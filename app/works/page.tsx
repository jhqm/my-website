import Link from "next/link";

const works = [
  {
    slug: "demo-game-1",
    title: "示例游戏 1",
    type: "H5 游戏",
    description: "这是一个 H5 小游戏示例，后续会替换成真实作品。",
    tech: ["HTML5", "JavaScript", "Canvas"],
  },
  {
    slug: "demo-app-1",
    title: "示例 Web 应用 1",
    type: "Web 应用",
    description: "这是一个 Web 应用示例，后续会替换成真实作品。",
    tech: ["React", "TypeScript", "Node.js"],
  },
];

export default function Works() {
  return (
    <main className="grid-bg" style={{ minHeight: '100vh' }}>
      {/* 导航栏 */}
      <nav style={{ 
        padding: '25px 0', 
        borderBottom: '1px solid rgba(0, 245, 255, 0.2)',
        backdropFilter: 'blur(10px)',
        background: 'rgba(10, 10, 15, 0.8)',
        position: 'sticky',
        top: 0,
        zIndex: 100
      }}>
        <div className="container" style={{ 
          display: 'flex', 
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <Link href="/" style={{ 
            fontWeight: 'bold', 
            fontSize: '24px',
            background: 'linear-gradient(135deg, #00f5ff 0%, #7b2fff 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            SCOTTSONG_
          </Link>
          <div style={{ display: 'flex', gap: '30px' }}>
            {['首页', '关于', '博客', '作品', '下载'].map((item, i) => {
              const hrefs = ['/', '/about', '/blog', '/works', '/downloads'];
              return (
                <Link 
                  key={item} 
                  href={hrefs[i]}
                  style={{ 
                    color: item === '作品' ? '#00f5ff' : '#a0a0a0',
                    fontSize: '14px'
                  }}
                >
                  {item}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>

      <div className="container" style={{ padding: '80px 20px' }}>
        {/* 标题 */}
        <div style={{ marginBottom: '60px' }}>
          <h1 style={{ 
            fontSize: '56px', 
            marginBottom: '20px',
            background: 'linear-gradient(135deg, #00f5ff 0%, #7b2fff 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            WORKS_
          </h1>
          <div style={{ 
            width: '100px', 
            height: '3px', 
            background: 'linear-gradient(90deg, #00f5ff, #7b2fff)'
          }} />
          <p style={{ 
            marginTop: '20px', 
            color: '#666',
            fontFamily: "'Fira Code', monospace"
          }}>
            // 个人项目 · 创意实验 · 技术探索
          </p>
        </div>
        
        {/* 作品网格 */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', 
          gap: '30px'
        }}>
          {works.map((work) => (
            <Link 
              key={work.slug}
              href={`/works/${work.slug}`}
              className="tech-card"
              style={{ 
                display: 'block',
                textDecoration: 'none'
              }}
            >
              {/* 缩略图区域 */}
              <div style={{ 
                height: '220px', 
                background: 'linear-gradient(135deg, rgba(0, 245, 255, 0.1) 0%, rgba(123, 47, 255, 0.1) 100%)',
                border: '1px solid rgba(0, 245, 255, 0.2)',
                borderRadius: '8px',
                marginBottom: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div style={{ 
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  background: `repeating-linear-gradient(
                    0deg,
                    transparent,
                    transparent 2px,
                    rgba(0, 245, 255, 0.03) 2px,
                    rgba(0, 245, 255, 0.03) 4px
                  )`
                }} />
                <span style={{ 
                  color: '#666',
                  fontSize: '14px',
                  fontFamily: "'Fira Code', monospace",
                  zIndex: 1
                }}>
                  [PROJECT_PREVIEW]
                </span>
              </div>

              {/* 类型标签 */}
              <div style={{ 
                display: 'inline-block',
                padding: '5px 12px',
                background: work.type === 'H5 游戏' 
                  ? 'rgba(123, 47, 255, 0.2)' 
                  : 'rgba(0, 245, 255, 0.2)',
                color: work.type === 'H5 游戏' ? '#7b2fff' : '#00f5ff',
                fontSize: '12px',
                fontFamily: "'Fira Code', monospace",
                borderRadius: '4px',
                marginBottom: '12px'
              }}>
                {work.type}
              </div>

              {/* 标题 */}
              <h3 style={{ 
                fontSize: '24px', 
                marginBottom: '12px',
                color: '#e0e0e0'
              }}>
                {work.title}
              </h3>

              {/* 描述 */}
              <p style={{ 
                color: '#a0a0a0', 
                lineHeight: 1.8,
                fontFamily: "'Fira Code', monospace",
                fontSize: '14px',
                marginBottom: '20px'
              }}>
                {work.description}
              </p>

              {/* 技术栈 */}
              <div style={{ 
                display: 'flex', 
                gap: '8px', 
                flexWrap: 'wrap',
                marginBottom: '20px'
              }}>
                {work.tech.map((t) => (
                  <span 
                    key={t}
                    style={{ 
                      padding: '4px 10px',
                      background: 'rgba(255, 255, 255, 0.05)',
                      color: '#666',
                      fontSize: '11px',
                      fontFamily: "'Fira Code', monospace",
                      borderRadius: '4px'
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* 链接 */}
              <div style={{ 
                color: '#00f5ff',
                fontSize: '14px',
                fontFamily: "'Fira Code', monospace"
              }}>
                &gt; 查看详情_
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
