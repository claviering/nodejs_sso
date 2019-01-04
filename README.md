# SSO

Nodejs 实现 SSO

## 配置 hosts

    127.0.0.1 sso.example.com
    127.0.0.1 sit1.example.com
    127.0.0.1 sit2.example.com

## 配置 nginx
    server {
        listen 9000;
        server_name sso.example.com;
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
    }
    server {
        listen 9000;
        server_name sit2.example.com;
        location / {
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_pass http://127.0.0.1:7002;
        }
    }

## 启动

`npm run dev`

访问

http://sso.example.com:9000

参考

> [bradtraversy](https://github.com/bradtraversy/node_passport_login)

> [allen.chen](https://github.com/chsipeng)