/**
 * 目标：生成一个可部署到 Vercel / Netlify 的个人站点，用于展示简历与项目经历。
 * 技术栈：Next.js 14 (App Router) + TypeScript + Tailwind CSS + shadcn/ui。
 *
 * ⚠️ 关键要求：**绝不能将中文长文本硬编码在 .tsx / .ts 文件中！**
 * 请遵循「内容 = Markdown / MDX / JSON；渲染 = 纯组件与数据映射」的原则。
 *
 * ──────────────────────────────────────────
 * 📂 目录结构（示例）
 * .
 * ├─ app/
 * │  ├─ layout.tsx
 * │  ├─ page.tsx                 # 首页（纯 JSX，数据从 libs/projects.ts 取）
 * │  ├─ projects/
 * │  │   ├─ page.tsx             # 列表页
 * │  │   └─ [slug]/page.tsx      # 详情页，使用 next‑mdx‑remote 动态加载
 * │  └─ resume/page.tsx          # iframe + 下载按钮
 * ├─ content/
 * │  ├─ projects/                # 每个项目一份 .mdx
 * │  │   ├─ milvus-kb.mdx
 * │  │   ├─ code-review.mdx
 * │  │   └─ ...
 * │  └─ about.mdx                # About / Hero 文本段落
 * ├─ libs/
 * │  ├─ mdx.ts                   # 统一的 mdx-remote 加载器
 * │  └─ projects.ts              # 读取 /content/projects 中 front‑matter，产出数组
 * ├─ public/assets/              # 脱敏截图 / 流程图
 * ├─ site-spec.md                # 人可读的结构化清单（见下）
 * ├─ tailwind.config.ts
 * └─ ...
 *
 * ──────────────────────────────────────────
 * 内容驱动规范
 * 1. 所有 **长中文描述、时间轴、技能列表** 等文字，写在 MDX 文件前置 YAML 或 Markdown 内容块中。
 * 2. mdx front‑matter 字段（示例）：
 *    ---
 *    title: Milvus 团队知识库平台 & MCP Server
 *    date: 2024-02
 *    tags: [Next.js, Milvus, MCP]
 *    cover: /assets/kb-cover.png
 *    summary: 首个公司内部向量检索平台，IDE Ask FAQ 秒级响应
 *    bullets:
 *      - 支持 Markdown / API schema 自动入库，权限隔离
 *      - 将平均新人答疑时间 –60%
 *    ---
 *    项目长描述...
 * 3. 组件只做 **🌱 数据→UI 映射**：比如 <ProjectCard {...project}/>。
 * 4. 静态构建：在 `pnpm build` 时扫描 /content，生成静态 JSON（可用 next‑export‑optimize-images）。
 *
 * ──────────────────────────────────────────
 * 交付清单
 * ▫ 完整代码 → 不含任何硬编码中文；数据来自 /content。
 * ▫ libs/mdx.ts 需支持 next-mdx-remote + rehype-slug。
 * ▫ README 更新：说明如何向 /content 新增项目即可在站点自动生效。
 *
 * Lighthouse ≥ 95 / 95 / 100 / 100 （PWA 非必需）; ESLint / Prettier / Husky / Vitest。
 * 开始生成吧 🚀
 */
