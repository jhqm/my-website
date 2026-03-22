"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import "./globals.css";

const HERO_SLIDE_INTERVAL_MS = 5500;

type HeroAccent = "cyan" | "purple" | "green" | "amber";

type HeroSlide = {
  id: string;
  badge: string;
  title: string;
  titleAccent: string;
  description: string;
  accent: HeroAccent;
  emoji: string;
};

const HERO_SLIDES: HeroSlide[] = [
  {
    id: "light-origin",
    badge: "Featured Project",
    title: "光影之源",
    titleAccent: "2.0",
    description:
      "探索极简主义下的光影交互，在指尖感受物理模拟的纯粹魅力。这是对 Web 性能与视觉艺术的深度尝试。",
    accent: "cyan",
    emoji: "✨",
  },
  {
    id: "pixel-rush",
    badge: "Arcade Lab",
    title: "极速像素",
    titleAccent: "Racing",
    description:
      "8-bit 复古赛道与粒子尾迹，在浏览器里跑出主机级手感。全球排行榜与每日挑战，随时再来一局。",
    accent: "purple",
    emoji: "🏁",
  },
  {
    id: "forest-match",
    badge: "Casual Hit",
    title: "森林消除",
    titleAccent: "Procedural",
    description:
      "算法生成的动态关卡，每一局地形与目标都不重复。轻松上手，却很难放下「再玩一把」。",
    accent: "green",
    emoji: "🌿",
  },
  {
    id: "shader-playground",
    badge: "Tech Demo",
    title: "着色器实验场",
    titleAccent: "WebGPU",
    description:
      "实时光照、后处理与交互式参数面板，把桌面级图形管线搬进网页。为下一款作品预热引擎与工具链。",
    accent: "amber",
    emoji: "🧪",
  },
];

const accentTitleClass: Record<HeroAccent, string> = {
  cyan: "text-cyan-400",
  purple: "text-purple-400",
  green: "text-green-400",
  amber: "text-amber-400",
};

const accentBorderClass: Record<HeroAccent, string> = {
  cyan: "border-cyan-500/30 text-cyan-400 hover:bg-cyan-500 hover:text-white",
  purple: "border-purple-500/30 text-purple-400 hover:bg-purple-500 hover:text-white",
  green: "border-green-500/30 text-green-400 hover:bg-green-500 hover:text-white",
  amber: "border-amber-500/30 text-amber-400 hover:bg-amber-500 hover:text-black",
};

const accentGradientRight: Record<HeroAccent, string> = {
  cyan: "from-cyan-500/10",
  purple: "from-purple-500/10",
  green: "from-green-500/10",
  amber: "from-amber-500/10",
};

const accentGlowHover: Record<HeroAccent, string> = {
  cyan: "hover:shadow-[0_0_25px_rgba(0,242,255,0.6)]",
  purple: "hover:shadow-[0_0_25px_rgba(168,85,247,0.45)]",
  green: "hover:shadow-[0_0_25px_rgba(34,197,94,0.45)]",
  amber: "hover:shadow-[0_0_25px_rgba(245,158,11,0.45)]",
};

export default function HomePage() {
  const [scrolled, setScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  const [hoverTimer, setHoverTimer] = useState<NodeJS.Timeout | null>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const [heroIndex, setHeroIndex] = useState(0);
  const [heroPaused, setHeroPaused] = useState(false);
  const heroLen = HERO_SLIDES.length;

  const goHero = useCallback(
    (dir: 1 | -1) => {
      setHeroIndex((i) => (i + dir + heroLen) % heroLen);
    },
    [heroLen]
  );

  const goHeroTo = useCallback((index: number) => {
    setHeroIndex(((index % heroLen) + heroLen) % heroLen);
  }, [heroLen]);

  useEffect(() => {
    if (heroPaused) return;
    const t = setInterval(() => {
      setHeroIndex((i) => (i + 1) % heroLen);
    }, HERO_SLIDE_INTERVAL_MS);
    return () => clearInterval(t);
  }, [heroPaused, heroLen]);

  const heroSlide = HERO_SLIDES[heroIndex];

  // 导航栏滚动效果
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 鼠标追踪（聚光灯效果）
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // 头像悬停显示彩蛋
  const handleAvatarEnter = () => {
    const timer = setTimeout(() => {
      setShowEasterEgg(true);
    }, 1000);
    setHoverTimer(timer);
  };

  const handleAvatarLeave = () => {
    if (hoverTimer) {
      clearTimeout(hoverTimer);
    }
  };

  const closeEasterEgg = () => {
    setShowEasterEgg(false);
  };

  const startEasterEggGame = () => {
    closeEasterEgg();
    // 预留游戏接口
    const msg = document.createElement("div");
    msg.className =
      "fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-yellow-400 text-black px-8 py-4 rounded-xl font-black z-[1000] border-4 border-black shadow-[8px_8px_0_#000] animate-bounce";
    msg.style.fontFamily = '"Comic Sans MS", "Marker Felt", cursive';
    msg.innerText = "🎮 载入隐藏关卡中...";
    document.body.appendChild(msg);
    setTimeout(() => msg.remove(), 2500);
  };

  // 滚动揭示动画
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".reveal-on-scroll").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen bg-[#050505] text-white overflow-x-hidden pt-12">
      {/* 动态背景 */}
      <div
        className="fixed inset-0 z-[-2] opacity-60"
        style={{
          backgroundImage: `
            radial-gradient(at 0% 0%, hsla(253,16%,7%,1) 0, transparent 50%),
            radial-gradient(at 50% 0%, hsla(225,39%,30%,1) 0, transparent 50%),
            radial-gradient(at 100% 0%, hsla(339,49%,30%,1) 0, transparent 50%)
          `,
        }}
      />

      {/* 网格背景 */}
      <div
        className="fixed inset-0 z-[-1] opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 242, 255, 0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 242, 255, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
          maskImage: "radial-gradient(circle at center, black, transparent 80%)",
        }}
      />

      {/* 1. 顶部导航 */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all ${
          scrolled
            ? "bg-[rgba(5,5,5,0.8)] backdrop-blur-md border-b border-[rgba(0,242,255,0.2)]"
            : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-cyan-500 rounded-lg animate-pulse" />
            <span className="font-bold text-xl tracking-tighter uppercase italic text-white" style={{ textShadow: "0 0 10px rgba(0, 242, 255, 0.5)" }}>
              PORTFOLIO
            </span>
          </div>

          <div className="hidden md:flex space-x-10 text-sm font-medium tracking-widest">
            <a href="#hero" className="hover:text-cyan-400 transition-colors uppercase">
              精选推荐
            </a>
            <a href="#about" className="hover:text-cyan-400 transition-colors uppercase">
              关于我
            </a>
            <a href="#gallery" className="hover:text-cyan-400 transition-colors uppercase">
              作品画廊
            </a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors uppercase">
              联系合作
            </a>
          </div>

          <button
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#00f2ff] to-[#0071e3] text-white px-4 py-1 rounded-xl font-semibold text-xs shadow-[0_4px_15px_rgba(0,242,255,0.3)] hover:shadow-[0_0_25px_rgba(0,242,255,0.6)] hover:scale-105 transition-all"
          >
            RESUME
          </button>
        </div>
      </nav>

      {/* 2. Hero Section - 轮播图 */}
      <section id="hero" className="pt-20 pb-16 reveal-on-scroll" style={{ opacity: 0, transform: "translateY(40px)", transition: "all 1s cubic-bezier(0.23, 1, 0.32, 1)" }}>
        {/* max-w-6xl (72rem) × 1.15 ≈ 82.8rem，轮播区单独加宽 */}
        <div className="max-w-[min(100%,82.8rem)] mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-1 sm:gap-2 md:gap-3">
            {/* 切页：置于卡片外侧，不遮挡内容 */}
            <button
              type="button"
              onClick={() => goHero(-1)}
              className="hidden sm:flex shrink-0 items-center justify-center min-w-[2rem] md:min-w-[2.25rem] text-white/20 hover:text-cyan-400/70 active:text-cyan-400 transition-colors text-2xl md:text-3xl font-extralight leading-none select-none touch-manipulation"
              aria-label="上一张"
            >
              ‹
            </button>

            <div
              className="relative group flex-1 min-w-0 flex items-center p-8 sm:p-10 md:p-12 overflow-hidden min-h-[450px] rounded-[24px] border border-[rgba(0,242,255,0.2)] bg-[rgba(255,255,255,0.03)] transition-all duration-500 hover:shadow-[0_0_30px_rgba(0,242,255,0.2)] hover:border-[#00f2ff]"
              style={{
                transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
              onMouseEnter={() => setHeroPaused(true)}
              onMouseLeave={() => setHeroPaused(false)}
              role="region"
              aria-roledescription="carousel"
              aria-label="精选作品轮播"
            >
            <div className="z-10 flex-1 pr-0 lg:pr-8 min-h-[280px] flex flex-col justify-center">
              <div key={heroSlide.id} className="hero-slide-animate">
                <div
                  className={`inline-block px-3 py-1 rounded-md border text-xs mb-4 uppercase tracking-widest ${
                    heroSlide.accent === "cyan"
                      ? "border-cyan-500/50 text-cyan-400"
                      : heroSlide.accent === "purple"
                        ? "border-purple-500/50 text-purple-400"
                        : heroSlide.accent === "green"
                          ? "border-green-500/50 text-green-400"
                          : "border-amber-500/50 text-amber-400"
                  }`}
                >
                  {heroSlide.badge}
                </div>
                <h2 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
                  {heroSlide.title}{" "}
                  <span className={accentTitleClass[heroSlide.accent]}>{heroSlide.titleAccent}</span>
                </h2>
                <p className="text-gray-400 text-lg mb-10 max-w-md">{heroSlide.description}</p>
                <div className="flex flex-wrap gap-4">
                  <button
                    className={`inline-flex items-center gap-2 bg-gradient-to-r from-[#00f2ff] to-[#0071e3] text-white px-8 py-3 rounded-xl font-semibold shadow-[0_4px_15px_rgba(0,242,255,0.3)] ${accentGlowHover[heroSlide.accent]} hover:scale-105 transition-all`}
                  >
                    开始游戏
                  </button>
                  <button
                    className={`px-8 py-3 rounded-xl border bg-transparent transition ${accentBorderClass[heroSlide.accent]}`}
                  >
                    项目详情
                  </button>
                </div>
              </div>
            </div>

            <div className="hidden lg:block absolute right-0 top-0 w-1/2 h-full pointer-events-none">
              <div
                key={`bg-${heroSlide.id}`}
                className={`hero-slide-animate w-full h-full bg-gradient-to-l ${accentGradientRight[heroSlide.accent]} to-transparent flex items-center justify-center`}
              >
                <span className="text-[200px] opacity-10 animate-pulse select-none" aria-hidden>
                  {heroSlide.emoji}
                </span>
              </div>
            </div>

            {/* 指示点 */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
              {HERO_SLIDES.map((s, i) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => goHeroTo(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === heroIndex ? "w-8 bg-cyan-400 shadow-[0_0_12px_rgba(0,242,255,0.6)]" : "w-2 bg-white/25 hover:bg-white/45"
                  }`}
                  aria-label={`切换到 ${s.title}`}
                  aria-current={i === heroIndex ? "true" : undefined}
                />
              ))}
            </div>
            </div>

            <button
              type="button"
              onClick={() => goHero(1)}
              className="hidden sm:flex shrink-0 items-center justify-center min-w-[2rem] md:min-w-[2.25rem] text-white/20 hover:text-cyan-400/70 active:text-cyan-400 transition-colors text-2xl md:text-3xl font-extralight leading-none select-none touch-manipulation"
              aria-label="下一张"
            >
              ›
            </button>
          </div>
        </div>
      </section>

      {/* 3. About Section - 个人介绍 */}
      <section id="about" className="py-32 reveal-on-scroll" style={{ opacity: 0, transform: "translateY(40px)", transition: "all 1s cubic-bezier(0.23, 1, 0.32, 1)" }}>
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          {/* 头像部分 */}
          <div className="relative" id="avatarContainer">
            {/* 漫画风格气泡框 */}
            {showEasterEgg && (
              <div
                id="easterEggBubble"
                className="absolute top-[30%] left-[65%] bg-white text-black px-5 py-4 rounded-[30px] w-[210px] shadow-[8px_8px_0px_rgba(0,242,255,0.4)] border-[3px] border-black z-[100] animate-bounce"
                style={{
                  display: "block",
                  fontFamily: '"Comic Sans MS", "Marker Felt", cursive',
                  animation: "comicPop 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)",
                }}
              >
                <p className="font-black text-lg mb-4 text-center italic">要玩个小游戏吗？</p>
                <div className="flex flex-col gap-2">
                  <button
                    onClick={startEasterEggGame}
                    className="w-full bg-black text-white text-sm py-2 rounded-full font-bold border-2 border-black hover:bg-cyan-500 hover:text-black transition-colors uppercase italic tracking-tighter"
                  >
                    开始吧！
                  </button>
                  <button
                    onClick={closeEasterEgg}
                    className="w-full bg-transparent text-gray-500 text-xs py-1 hover:text-red-500 transition-colors"
                  >
                    算了算了...
                  </button>
                </div>
              </div>
            )}

            <div className="absolute -inset-4 bg-cyan-500/20 blur-3xl rounded-full" />
            <div
              className="relative border-4 border-white/10 bg-black/40 p-2 rounded-[32px] overflow-hidden cursor-pointer transition-transform hover:scale-[1.02]"
              id="avatarImage"
              onMouseEnter={handleAvatarEnter}
              onMouseLeave={handleAvatarLeave}
            >
              <img
                src="https://api.dicebear.com/7.x/pixel-art/svg?seed=creator"
                alt="Avatar"
                className="w-full rounded-[24px]"
              />
            </div>
          </div>

          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              热衷于创造，<br />
              <span className="text-gray-500">更热衷于突破。</span>
            </h2>
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                我是一名专注于 H5 开发与交互设计的创作者。我深信，优秀的 Web 体验应当像原生应用一样流畅，并拥有独特的视觉灵魂。
              </p>
              <p>
                在过去的几年里，我通过 <span className="text-white font-semibold">Three.js</span> 和高性能着色器，开发了超过 20 款具备独特风格的小游戏。我不只是在写代码，我是在为每一位玩家构建一个可触碰的数字世界。
              </p>
              <div className="pt-8 grid grid-cols-2 gap-8 border-t border-white/10">
                <div>
                  <div className="text-4xl font-bold text-white mb-1">20+</div>
                  <div className="text-xs text-cyan-400 uppercase tracking-widest font-mono">完成项目</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-white mb-1">0.1s</div>
                  <div className="text-xs text-cyan-400 uppercase tracking-widest font-mono">首屏响应</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Gallery Section - 作品展示 */}
      <section id="gallery" className="py-24 max-w-7xl mx-auto px-6 reveal-on-scroll" style={{ opacity: 0, transform: "translateY(40px)", transition: "all 1s cubic-bezier(0.23, 1, 0.32, 1)" }}>
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-16">
          <h2 className="text-5xl font-black italic">WORKS_GALLERY</h2>
          <Link
            href="/gallery"
            className="text-cyan-500/70 hover:text-cyan-400 font-mono mt-4 md:mt-0 uppercase tracking-tighter text-sm transition-colors inline-flex items-center gap-1 group"
          >
            探索更多内容
            <span className="opacity-60 group-hover:translate-x-0.5 transition-transform" aria-hidden>
              →
            </span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* 游戏卡片 1 - 光影之源 */}
          <div
            ref={(el) => {
              cardsRef.current[0] = el;
            }}
            className="spotlight-card relative p-6 flex flex-col group bg-[rgba(20,20,25,0.7)] rounded-[20px] border border-white/10 overflow-hidden transition-transform hover:-translate-y-[10px]"
            style={{
              position: "relative",
            }}
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              e.currentTarget.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
              e.currentTarget.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
            }}
          >
            {/* 聚光灯效果 */}
            <div
              className="absolute inset-0 z-0 pointer-events-none"
              style={{
                background: `radial-gradient(600px circle at var(--mouse-x, 0) var(--mouse-y, 0), rgba(0, 242, 255, 0.15), transparent 40%)`,
              }}
            />

            <div className="aspect-video bg-black rounded-xl mb-6 overflow-hidden relative border border-white/5">
              <div className="absolute inset-0 flex items-center justify-center text-6xl group-hover:scale-125 transition-transform duration-500">
                🌌
              </div>
              <div className="absolute inset-0 bg-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-2xl font-bold text-white tracking-tight">光影之源</h3>
                <span className="text-xs text-cyan-400 uppercase font-mono tracking-widest">Puzzle</span>
              </div>
              <p className="text-gray-500 text-sm mb-8 leading-relaxed">
                在 Web 端实现超流畅的光线物理模拟解谜。
              </p>
              <button className="w-full py-3 rounded-lg border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500 hover:text-white transition-all font-semibold tracking-widest">
                立即试玩
              </button>
            </div>
          </div>

          {/* 游戏卡片 2 - 极速像素 */}
          <div
            ref={(el) => {
              cardsRef.current[1] = el;
            }}
            className="spotlight-card relative p-6 flex flex-col group bg-[rgba(20,20,25,0.7)] rounded-[20px] border border-white/10 overflow-hidden transition-transform hover:-translate-y-[10px]"
            style={{
              position: "relative",
            }}
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              e.currentTarget.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
              e.currentTarget.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
            }}
          >
            <div
              className="absolute inset-0 z-0 pointer-events-none"
              style={{
                background: `radial-gradient(600px circle at var(--mouse-x, 0) var(--mouse-y, 0), rgba(147, 51, 234, 0.15), transparent 40%)`,
              }}
            />

            <div className="aspect-video bg-black rounded-xl mb-6 overflow-hidden relative border border-white/5">
              <div className="absolute inset-0 flex items-center justify-center text-6xl group-hover:scale-125 transition-transform duration-500">
                🏁
              </div>
              <div className="absolute inset-0 bg-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-2xl font-bold text-white tracking-tight">极速像素</h3>
                <span className="text-xs text-purple-400 uppercase font-mono tracking-widest">Racing</span>
              </div>
              <p className="text-gray-500 text-sm mb-8 leading-relaxed">
                致敬经典的 8-bit 复古赛车，挑战全球排行榜。
              </p>
              <button className="w-full py-3 rounded-lg border border-purple-500/30 text-purple-400 hover:bg-purple-500 hover:text-white transition-all font-semibold tracking-widest">
                立即试玩
              </button>
            </div>
          </div>

          {/* 游戏卡片 3 - 森林消除 */}
          <div
            ref={(el) => {
              cardsRef.current[2] = el;
            }}
            className="spotlight-card relative p-6 flex flex-col group bg-[rgba(20,20,25,0.7)] rounded-[20px] border border-white/10 overflow-hidden transition-transform hover:-translate-y-[10px]"
            style={{
              position: "relative",
            }}
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              e.currentTarget.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
              e.currentTarget.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
            }}
          >
            <div
              className="absolute inset-0 z-0 pointer-events-none"
              style={{
                background: `radial-gradient(600px circle at var(--mouse-x, 0) var(--mouse-y, 0), rgba(34, 197, 94, 0.15), transparent 40%)`,
              }}
            />

            <div className="aspect-video bg-black rounded-xl mb-6 overflow-hidden relative border border-white/5">
              <div className="absolute inset-0 flex items-center justify-center text-6xl group-hover:scale-125 transition-transform duration-500">
                🌿
              </div>
              <div className="absolute inset-0 bg-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-2xl font-bold text-white tracking-tight">森林消除</h3>
                <span className="text-xs text-green-400 uppercase font-mono tracking-widest">Casual</span>
              </div>
              <p className="text-gray-500 text-sm mb-8 leading-relaxed">
                基于算法生成的动态关卡，每一局都是全新体验。
              </p>
              <button className="w-full py-3 rounded-lg border border-green-500/30 text-green-400 hover:bg-green-500 hover:text-white transition-all font-semibold tracking-widest">
                立即试玩
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Contact Section - 联系方式 */}
      <section id="contact" className="py-32 relative reveal-on-scroll" style={{ opacity: 0, transform: "translateY(40px)", transition: "all 1s cubic-bezier(0.23, 1, 0.32, 1)" }}>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="bg-white/5 border border-white/10 rounded-[40px] p-16 text-center backdrop-blur-md">
            <h2 className="text-4xl md:text-6xl font-black mb-6">建立联系</h2>
            <p className="text-gray-400 text-xl mb-12">
              如果你有任何有趣的想法或合作机会，请随时通过邮件联系我。
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8">
              <a
                href="mailto:hello@example.com"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#00f2ff] to-[#0071e3] text-white px-12 py-5 rounded-xl font-semibold text-xl shadow-[0_4px_15px_rgba(0,242,255,0.3)] hover:shadow-[0_0_25px_rgba(0,242,255,0.6)] hover:scale-105 transition-all"
              >
                发送邮件
              </a>
              <div className="flex space-x-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 hover:border-cyan-500 cursor-pointer transition">
                  <span className="text-xs">GitHub</span>
                </div>
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 hover:border-cyan-500 cursor-pointer transition">
                  <span className="text-xs">Zhihu</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center text-gray-600 font-mono text-xs border-t border-white/5">
        <p>&copy; 2024 DESIGNED_BY_CREATOR. ALL RIGHTS RESERVED.</p>
      </footer>
    </main>
  );
}
