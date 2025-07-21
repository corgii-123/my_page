---
title: 石杰洋 · 前端 / AI‑Front‑End 工程师
lastUpdated: 2025‑07‑21
---

## 01 Hero
- **姓名**：石杰洋
- **一句话定位**：AI‑First Front‑End Developer · 专注知识库 / DevEx
- **社交**：
  - GitHub: https://github.com/corgii-123
  - X / Twitter: https://x.com/Corgii_123
  - Email: corgii123mail@gmail.com

## 02 About
拥有 3 年教育 SaaS + AI 平台前端经验。擅长 React / Vue 双栈、Next.js 全栈与 Milvus 向量知识库集成。热衷用工具链提升团队协作效率（Cursor、Dify、n8n）。

## 03 Skills
- **语言**：TypeScript 5、JavaScript (ES2025+)、HTML5、CSS3
- **框架**：React 19、Vue 3.4 / Vapor、Next.js 14、Node (Nest.js/Express)
- **AI 技术**：OpenAI API、LangChain、Milvus、MCP、RAG、Dify、Cursor
- **工程**：Vite 6、Rspack、Bun、Docker、GitLab CI/CD
- **其他**：WebGPU、PWA、Vitest/Jest、Storybook

## 04 Projects

### LeDu U‑Class Desktop Client <small>2023.04 – Now</small>
tags: [Vue 2.7, Rspack, Education]
cover: /assets/ledu‑cover.png
summary: Vue 2.7 + Rspack 重构、播放器解耦、Lottie 动画首帧 TTI ↓90%。
bullets:
  - 迁移 Rspack 启动提升 **10×**，构建时长 **–60%**。
  - 统一监控体系，线上异常反馈率 **–90%**。
media:
  - /assets/ledu‑player‑flow.png
  - /assets/ledu‑rspack‑stats.png

### Milvus Team Knowledge Base & MCP Server <small>2024.02 – Now</small>
tags: [Next.js, Milvus, LangChain, MCP]
cover: /assets/kb‑cover.png
summary: 首个公司内部向量检索平台，IDE 中 Ask FAQ 秒级响应。
bullets:
  - 支持 Markdown / API schema 自动入库，权限隔离。
  - 将平均新人答疑时间 **–60%**。
media:
  - /assets/kb‑arch‑diagram.svg

### AI Code Review Platform <small>2024.06 – 2024.11</small>
tags: [GitLab Hook, LangChain, Milvus]
cover: /assets/cr‑cover.png
summary: GitLab Webhook + LLM 自动生成 MR 评审意见。
bullets:
  - 人均 review 时长 30 → 18 min。
  - 知识库匹配历史代码，提升一致性。
media:
  - /assets/cr‑sequence.png

### Online Issue Solver (Dify Workflow) <small>2024.10 – 2025.03</small>
tags: [Dify, n8n, OpenAI]
cover: /assets/solver‑cover.png
summary: 工单智能分发 + API 调度，全链路闭环。
bullets:
  - 峰值处理 200+/day，SLA < 3 s。
media:
  - /assets/solver‑flowchart.svg

<!-- 更多项目… -->

## 05 Timeline
2023‑04 加入好未来教育 → 2024‑02 启动知识库平台 → 2024‑06 上线 Code Review → 2025‑02 完成 AI Issue Solver…

## 06 Contact
📫 corgii123mail@gmail.com  
🏡 成都（计划回蓉）

---

### 资产指南

| 类型 | 命名规则 | 备注 |
|------|----------|------|
| **截图** | `*-cover.png` / `*-flow.png` | 对公司敏感信息打马赛克或模糊；可使用 Figma Mock 替代 |
| **流程图** | `*-diagram.svg` | 建议用 Mermaid/Figma 绘制，无涉密节点 |
| **架构图** | `*-arch-diagram.svg` | 只暴露技术栈 & 数据流，不展示机密 URI |
| **序列图** | `*-sequence.png` | 用低分辨率/抽象类名 |

> **隐私策略**：所有图片只展示 UI 或高层次流程，代码仓库地址以 `private repo` 字样替换；如需演示，可准备录屏存放在私有 Gist，用到时单独分享链接，否则站点仅露封面缩略图。

---

## 07 Deployment

```bash
pnpm i
pnpm build && pnpm export   # /out 目录上传到 Netlify
# 或
pnpm vercel --prod          # 推到 Vercel
