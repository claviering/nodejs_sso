# passport

Nodejs 实现 passport

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

参考

> [bradtraversy](https://github.com/bradtraversy/node_passport_login)

> [allen.chen](https://github.com/chsipeng)

> [lyh2668](https://github.com/lyh2668/node-sso)