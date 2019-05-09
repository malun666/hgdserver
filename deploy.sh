#!/bin/sh
ssh root@192.168.1.130  <<  remotessh1
  cd /home/hgd_server/dev
  echo "[exec] 下载最新的包...  hamkd.com"
  /usr/bin/svn up --force /home/hgd_server/dev
  echo "==> 完成下载。开始安装"
  npm i
  echo "[exec] 安装完成！"
  echo "[exec] 关闭node服务！"
  pm2 stop /home/hgd_server/dev/server.js
  echo "开始启动nodejs服务...."
  pm2 start /home/hgd_server/dev/server.js
  echo "完成部署，退出！"
  exit 0
remotessh1