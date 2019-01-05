const debug = require('debug')('passport:users');
const bcrypt = require('bcryptjs');
const userModels = require('../models/user');
const jwt = require('jsonwebtoken');
const config = require('../env/index');
const { client } = require('../middleware/redis');

const storeToken = async (token) => {
  try {
    let value = {
      isLogin: true
    }
    await client.set(token, JSON.stringify(value), 'EX', config.redis.ttl)
    debug('storeToken')
  } catch (err) {
    throw err
  }
};

const deleteToken = (token) => {
  try {
    client.del(token)
  } catch (err) {
    throw err
  }
};

module.exports = {
  loginPage: (req, res) => res.render('login'),
  register: async (req, res) => {
    debug(req.body)
    const { name, email, password, password2 } = req.body;
    let errors = [];
  
    if (!name || !email || !password || !password2) {
      errors.push({ msg: 'Please enter all fields' });
    }
  
    if (password != password2) {
      errors.push({ msg: 'Passwords do not match' });
    }
  
    if (password.length < 6) {
      errors.push({ msg: 'Password must be at least 6 characters' });
    }
  
    if (errors.length > 0) {
      res.render('register', {
        errors,
        name,
        email,
        password,
        password2
      });
    } else {
      let user = await userModels.findOne({ email: email }).exec();
      if (user) {
        errors.push({ msg: 'Email already exists' });
        res.render('register', {
          errors,
          name,
          email,
          password,
          password2
        });
      } else {
        const newUser = new userModels({
          name,
          email,
          password
        });

        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, async (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            await newUser.save()
            req.flash(
              'success_msg',
              'You are now registered and can log in'
            );
            res.redirect('/users/login');
          });
        });
      }
    }
  },
  registerPage: (req, res) => res.render('register'),
  login: async (req, res) => {
    const { email, password } = req.body;
    debug('email, password ', email, password )
    let user = await userModels.findOne({ email }).exec()
    if (!user) {
      req.flash('error_msg', 'That email is not registered')
      res.redirect('/users/login');
    };
    bcrypt.compare(password, user.password, async (err, isMatch) => {
      if (err) throw err;
      if (isMatch) {
        req.session.isLogin = true
        const newToken = jwt.sign(
          { email, password },
          config.token.secret,
          { expiresIn: config.token.expiresIn }
        );
        debug('newToken', newToken)
        await storeToken(newToken);
        res.setHeader('Set-Cookie',`token=${newToken};path=/;domain=example.com;max-age=${config.token.expiresIn};httpOnly`);
        res.redirect('/dashboard');
      } else {
        req.flash('error_msg', 'Password incorrect');
        res.redirect('/users/login');
      }
    });
  },
  logout: (req, res) => {
    req.session.isLogin = false
    deleteToken(req.cookies.token)
    req.flash('success_msg', 'You are logged out');
    res.redirect('/users/login');
  }
};
