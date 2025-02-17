# element-plus-admin-qiankun

> 这是一个基于[vue-element-plus-admin](https://github.com/kailong321200875/vue-element-plus-admin)为基座的微前端项目。

## 项目运行
> 启动项目命令
```bash
# 安装依赖
pnpm install
# 启动项目
pnpm dev
```
- 主应用main-app地址：http://localhost:4000/ 
- 子应用system-app地址：http://localhost:4001/  
- 子应用example-app地址：http://localhost:4002/  
- [线上demo](http://single-domain.scorp.fun/)
## 改造过程简单记录
1. 安装qiankun
```bash
pnpm add qiankun
```
## 部署项目记录
### 单域名部署方式
#### 部署目录结构
```
single-domain.scorp.fun/   # 根目录文件夹
├── main/                  # 主应用包
└── subapp/                # 子应用目录
    ├── system/            # 系统管理子应用
    └── example/           # 示例子应用
```

#### nginx配置
```bash
# nginx部署参数记录
location / {
  root /www/wwwroot/single-domain.scorp.fun/main;
  index index.html;
  try_files $uri $uri/ /index.html;
  
  add_header Access-Control-Allow-Origin *;
  add_header Access-Control-Allow-Methods 'GET, POST, OPTIONS';
  add_header Access-Control-Allow-Headers '*';
  if ($request_method = 'OPTIONS') {
      return 204;
  }
}

location /subapp {
  alias /www/wwwroot/single-domain.scorp.fun/subapp;
  try_files $uri $uri/ $uri/index.html;
  
  add_header Access-Control-Allow-Origin *;
  add_header Access-Control-Allow-Methods 'GET, POST, OPTIONS';
  add_header Access-Control-Allow-Headers '*';
  if ($request_method = 'OPTIONS') {
      return 204;
  }
}
```

## Git 贡献提交规范

- `feat` 新功能
- `fix` 修补 bug
- `docs` 文档
- `style` 格式、样式(不影响代码运行的变动)
- `refactor` 重构(即不是新增功能，也不是修改 BUG 的代码)
- `perf` 优化相关，比如提升性能、体验
- `test` 添加测试
- `build` 编译相关的修改，对项目构建或者依赖的改动
- `ci` 持续集成修改
- `chore` 构建过程或辅助工具的变动
- `revert` 回滚到上一个版本
- `workflow` 工作流改进
- `mod` 不确定分类的修改
- `wip` 开发中
- `types` 类型