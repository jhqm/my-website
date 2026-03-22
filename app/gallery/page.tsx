import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "作品画廊 | 斯科特的个人网站",
  description: "个人作品与实验项目合集（占位内容，后续替换为真实作品）",
};

/** 占位数据，后续由真实作品信息替换 */
const PLACEHOLDER_WORKS = [
  {
    id: "1",
    title: "霓虹脉冲",
    tag: "Rhythm",
    accent: "cyan" as const,
    emoji: "🎵",
    description: "音乐节拍与光轨同步的网页音游原型，验证 Web Audio 与时间轴调度。",
  },
  {
    id: "2",
    title: "深渊历法",
    tag: "Roguelike",
    accent: "purple" as const,
    emoji: "🃏",
    description: "卡牌构筑叠加程序生成地牢，测试状态机与关卡种子复现。",
  },
  {
    id: "3",
    title: "折叠城市",
    tag: "Puzzle",
    accent: "blue" as const,
    emoji: "🧊",
    description: "以 CSS 3D 与透视变换搭建的立体解谜关卡集合。",
  },
  {
    id: "4",
    title: "雾港侦探社",
    tag: "Narrative",
    accent: "slate" as const,
    emoji: "🕵️",
    description: "全文本分支剧情与线索板 UI，侧重叙事节奏与选项权重。",
  },
  {
    id: "5",
    title: "量子花园",
    tag: "Sandbox",
    accent: "green" as const,
    emoji: "✳️",
    description: "粒子系统与鼠标交互的视觉玩具，可调参数实时预览。",
  },
  {
    id: "6",
    title: "像素工坊",
    tag: "Tool",
    accent: "amber" as const,
    emoji: "🖌️",
    description: "在线 8×8 精灵编辑器，支持调色板与 PNG 导出。",
  },
  {
    id: "7",
    title: "回声塔防",
    tag: "Strategy",
    accent: "teal" as const,
    emoji: "🛡️",
    description: "极简几何风塔防与关卡编辑器，路径寻路与波次配置占位。",
  },
  {
    id: "8",
    title: "星际驿站",
    tag: "Idle",
    accent: "indigo" as const,
    emoji: "🛸",
    description: "资源循环、事件卡与离线收益公式的放置类原型。",
  },
  {
    id: "9",
    title: "墨流书法",
    tag: "Interactive",
    accent: "stone" as const,
    emoji: "🖋️",
    description: "模拟笔触压力与宣纸晕染的 Canvas 交互实验。",
  },
  {
    id: "10",
    title: "钟楼协定",
    tag: "Co-op",
    accent: "rose" as const,
    emoji: "⏱️",
    description: "本地双端同步计时解谜的概念验证，通信层预留 WebRTC。",
  },
];

const accentStyles: Record<
  (typeof PLACEHOLDER_WORKS)[number]["accent"],
  { tag: string; border: string; glow: string }
> = {
  cyan: {
    tag: "text-cyan-400",
    border: "border-cyan-500/30 hover:border-cyan-400/50",
    glow: "group-hover:shadow-[0_0_24px_rgba(0,242,255,0.12)]",
  },
  purple: {
    tag: "text-purple-400",
    border: "border-purple-500/30 hover:border-purple-400/50",
    glow: "group-hover:shadow-[0_0_24px_rgba(168,85,247,0.12)]",
  },
  blue: {
    tag: "text-sky-400",
    border: "border-sky-500/30 hover:border-sky-400/50",
    glow: "group-hover:shadow-[0_0_24px_rgba(56,189,248,0.12)]",
  },
  slate: {
    tag: "text-slate-400",
    border: "border-slate-500/30 hover:border-slate-400/50",
    glow: "group-hover:shadow-[0_0_24px_rgba(148,163,184,0.1)]",
  },
  green: {
    tag: "text-green-400",
    border: "border-green-500/30 hover:border-green-400/50",
    glow: "group-hover:shadow-[0_0_24px_rgba(34,197,94,0.12)]",
  },
  amber: {
    tag: "text-amber-400",
    border: "border-amber-500/30 hover:border-amber-400/50",
    glow: "group-hover:shadow-[0_0_24px_rgba(245,158,11,0.12)]",
  },
  teal: {
    tag: "text-teal-400",
    border: "border-teal-500/30 hover:border-teal-400/50",
    glow: "group-hover:shadow-[0_0_24px_rgba(45,212,191,0.12)]",
  },
  indigo: {
    tag: "text-indigo-400",
    border: "border-indigo-500/30 hover:border-indigo-400/50",
    glow: "group-hover:shadow-[0_0_24px_rgba(129,140,248,0.12)]",
  },
  stone: {
    tag: "text-stone-400",
    border: "border-stone-500/30 hover:border-stone-400/50",
    glow: "group-hover:shadow-[0_0_24px_rgba(168,162,158,0.1)]",
  },
  rose: {
    tag: "text-rose-400",
    border: "border-rose-500/30 hover:border-rose-400/50",
    glow: "group-hover:shadow-[0_0_24px_rgba(251,113,133,0.12)]",
  },
};

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <div
        className="fixed inset-0 z-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 242, 255, 0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 242, 255, 0.06) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 20%, black, transparent)",
        }}
      />

      <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#050505]/85 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link
            href="/"
            className="text-sm font-bold tracking-tight uppercase italic text-white hover:text-cyan-400 transition-colors"
            style={{ textShadow: "0 0 12px rgba(0, 242, 255, 0.25)" }}
          >
            ← 返回首页
          </Link>
          <span className="text-xs font-mono text-cyan-500/50 uppercase tracking-widest">Gallery</span>
        </div>
      </nav>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 md:py-20">
        <header className="mb-14 md:mb-16">
          <p className="text-cyan-500/60 font-mono text-xs uppercase tracking-[0.2em] mb-3">Works · 占位预览</p>
          <h1 className="text-4xl md:text-6xl font-black italic tracking-tight mb-4">作品画廊</h1>
          <p className="text-gray-500 max-w-2xl text-sm md:text-base leading-relaxed">
            以下为 10 条示例条目，用于占位布局与风格统一；你提供正式文案与链接后，可直接替换数据源。
          </p>
        </header>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 list-none p-0 m-0">
          {PLACEHOLDER_WORKS.map((work) => {
            const a = accentStyles[work.accent];
            return (
              <li key={work.id}>
                <article
                  className={`group h-full flex flex-col rounded-2xl border border-white/10 bg-[rgba(20,20,25,0.75)] p-6 transition-all duration-300 hover:-translate-y-1 ${a.border} ${a.glow}`}
                >
                  <div className="aspect-video rounded-xl bg-black/60 border border-white/5 mb-5 flex items-center justify-center text-5xl opacity-90 group-hover:scale-[1.02] transition-transform duration-300">
                    <span aria-hidden>{work.emoji}</span>
                  </div>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h2 className="text-xl font-bold text-white tracking-tight">{work.title}</h2>
                    <span className={`text-[10px] font-mono uppercase tracking-widest shrink-0 ${a.tag}`}>
                      {work.tag}
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-5">{work.description}</p>
                  <button
                    type="button"
                    disabled
                    className="w-full py-2.5 rounded-lg text-xs font-semibold tracking-widest uppercase border border-white/10 text-gray-600 cursor-not-allowed"
                  >
                    详情待定
                  </button>
                </article>
              </li>
            );
          })}
        </ul>
      </div>
    </main>
  );
}
