const debug = require('debug')('sit2:users');
const bcrypt = require('bcryptjs');
const userModels = require('../models/user');

module.exports = {
  index: (req, res) => res.render('login'),
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
    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err) throw err;
      if (isMatch) {
        req.session.isLogin = true
        res.redirect('/dashboard');
      } else {
        req.flash('error_msg', 'Password incorrect');
        res.redirect('/users/login');
      }
    });
  },
  logout: (req, res) => {
    req.session.isLogin = false
    req.flash('success_msg', 'You are logged out');
    res.redirect('/users/login');
  }
};
