import Link from "next/link";

const posts = [
  {
    slug: "welcome-to-my-blog",
    title: "欢迎来到我的博客",
    date: "2026-03-09",
    excerpt: "这是我的第一篇博客文章，介绍一下这个网站的定位和未来计划。",
  },
];

export default function Blog() {
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
                    color: item === '博客' ? '#00f5ff' : '#a0a0a0',
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

      <div className="container" style={{ padding: '80px 20px', maxWidth: '900px' }}>
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
            BLOG_
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
            // 技术文章 · 行业思考 · 学习笔记
          </p>
        </div>
        
        {/* 博客列表 */}
        <div>
          {posts.map((post) => (
            <Link 
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="tech-card"
              style={{ 
                display: 'block',
                marginBottom: '30px',
                textDecoration: 'none'
              }}
            >
              <div style={{ 
                fontSize: '12px', 
                color: '#7b2fff',
                fontFamily: "'Fira Code', monospace",
                marginBottom: '10px'
              }}>
                {'<'}article{'>'}
              </div>
              <h2 style={{ 
                fontSize: '28px', 
                marginBottom: '12px',
                color: '#e0e0e0',
                transition: 'color 0.2s'
              }}>
                {post.title}
              </h2>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '15px',
                marginBottom: '15px'
              }}>
                <span style={{ 
                  color: '#00f5ff',
                  fontSize: '14px',
                  fontFamily: "'Fira Code', monospace"
                }}>
                  📅 {post.date}
                </span>
              </div>
              <p style={{ 
                color: '#a0a0a0', 
                lineHeight: 1.8,
                fontFamily: "'Fira Code', monospace",
                fontSize: '15px'
              }}>
                {post.excerpt}
              </p>
              <div style={{ 
                marginTop: '20px',
                color: '#00f5ff',
                fontSize: '14px',
                fontFamily: "'Fira Code', monospace"
              }}>
                &gt; 阅读更多_
              </div>
              <div style={{ 
                marginTop: '15px',
                fontSize: '12px', 
                color: '#7b2fff',
                fontFamily: "'Fira Code', monospace"
              }}>
                {'</'}article{'>'}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
