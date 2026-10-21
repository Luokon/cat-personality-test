# 猫咪心情研究所

一个带兑换码验证的治愈系猫咪人格测试。用户完成 24 道生活情境题后，会获得八种猫咪人格之一，并看到完整的性格画像、优势、隐藏面、关系模式、充电方式和治愈建议。

## 功能

- 8 种猫咪人格与八维性格能量
- 24 道情境题
- Cloudflare D1 兑换码与使用次数验证
- 受密码保护的卖家兑换码管理页
- 响应式布局和打印结果

## 本地开发

```bash
npm install
npm run dev
```

## 部署

```bash
npm run build:pages
npx wrangler pages deploy pages-output --project-name cat-personality-quiz --branch main
```

需要绑定名为 `DB` 的 D1 数据库，并设置 Pages Secret `ADMIN_KEY`。
