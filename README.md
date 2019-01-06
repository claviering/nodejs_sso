# sso

Nodejs 实现 sso

## 配置 hosts

    127.0.0.1 passport.example.com
    127.0.0.1 sit1.example.com

## 配置 nginx
    server {
        listen 9000;
        server_name passport.example.com;
        location / {
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_pass http://127.0.0.1:7000;
        }
    }
    server {
        listen 9000;
        server_name sit1.example.com;
        location / {
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_pass http://127.0.0.1:7001;
        }

## 启动

`npm run dev`

访问

http://passport.example.com:9000

http://sit1.example.com:9000

## passport 系统

- 提供用户认证
- 生成 token
- token 保存到 redis 数据库
- 开放 token 认证 api

## sit1 系统

子系统

首次进入会请求 passport 系统, 验证 Cookies 中的 token, passport 系统使用 token 查询 redis 数据库获取 Session 返回给 sit1 系统

## 问题

Cookies 安全??


参考

> [bradtraversy](https://github.com/bradtraversy/node_passport_login)

> [allen.chen](https://github.com/chsipeng)

> [lyh2668](https://github.com/lyh2668/node-sso)