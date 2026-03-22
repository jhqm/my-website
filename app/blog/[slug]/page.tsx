import Link from "next/link";

const posts: Record<string, { title: string; date: string; content: string }> = {
  "welcome-to-my-blog": {
    title: "欢迎来到我的博客",
    date: "2026-03-09",
    content: `
## 你好！

这是我的第一篇博客文章。

### 这个网站的定位

这个网站是我的个人空间，我会在这里分享：

- 📝 技术博客和行业思考
- 🎮 H5 小游戏和 Web 应用
- 💾 桌面应用程序下载

### 未来计划

接下来我会定期更新内容，包括：

1. 技术文章分享
2. 项目案例展示
3. 个人作品发布

欢迎关注！
    `.trim(),
  },
};

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = posts[params.slug];

  if (!post) {
    return (
      <main className="grid-bg" style={{ minHeight: '100vh' }}>
        <nav style={{ padding: '25px 0', borderBottom: '1px solid rgba(0, 245, 255, 0.2)' }}>
          <div className="container">
            <Link href="/blog" style={{ color: '#00f5ff', fontFamily: "'Fira Code', monospace" }}>
              &lt; 返回博客列表
            </Link>
          </div>
        </nav>
        <div className="container" style={{ padding: '80px 20px' }}>
          <p style={{ color: '#666', fontFamily: "'Fira Code', monospace" }}>404 // 文章未找到</p>
        </div>
      </main>
    );
  }

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

      <article className="container" style={{ padding: '80px 20px', maxWidth: '800px' }}>
        {/* 返回链接 */}
        <Link 
          href="/blog" 
          style={{ 
            color: '#7b2fff',
            fontFamily: "'Fira Code', monospace",
            fontSize: '14px',
            display: 'inline-block',
            marginBottom: '30px'
          }}
        >
          &lt; 返回博客列表
        </Link>
        
        {/* 文章标题 */}
        <h1 style={{ 
          fontSize: '48px', 
          marginBottom: '15px',
          background: 'linear-gradient(135deg, #00f5ff 0%, #7b2fff 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          lineHeight: 1.2
        }}>
          {post.title}
        </h1>
        
        {/* 发布日期 */}
        <div style={{ 
          display: 'flex',
          alignItems: 'center',
          gap: '15px',
          marginBottom: '50px',
          fontFamily: "'Fira Code', monospace",
          fontSize: '14px'
        }}>
          <span style={{ color: '#00f5ff' }}>
            📅 {post.date}
          </span>
          <span style={{ color: '#666' }}>
            // 博客文章
          </span>
        </div>

        {/* 分隔线 */}
        <div style={{ 
          height: '1px', 
          background: 'linear-gradient(90deg, transparent, rgba(0, 245, 255, 0.3), transparent)',
          marginBottom: '50px'
        }} />
        
        {/* 文章内容 */}
        <div style={{ 
          lineHeight: 1.9, 
          fontSize: '17px',
          fontFamily: "'Fira Code', monospace",
          color: '#d0d0d0'
        }}>
          {post.content.split('\n').map((paragraph, index) => {
            if (paragraph.startsWith('## ')) {
              return (
                <h2 
                  key={index} 
                  style={{ 
                    fontSize: '32px', 
                    marginTop: '50px', 
                    marginBottom: '20px',
                    color: '#00f5ff'
                  }}
                >
                  {paragraph.replace('## ', '')}
                </h2>
              );
            }
            if (paragraph.startsWith('### ')) {
              return (
                <h3 
                  key={index} 
                  style={{ 
                    fontSize: '24px', 
                    marginTop: '40px', 
                    marginBottom: '15px',
                    color: '#7b2fff'
                  }}
                >
                  {paragraph.replace('### ', '')}
                </h3>
              );
            }
            if (paragraph.startsWith('- ')) {
              return (
                <li 
                  key={index} 
                  style={{ 
                    marginLeft: '20px', 
                    marginBottom: '12px',
                    color: '#a0a0a0'
                  }}
                >
                  {paragraph.replace('- ', '')}
                </li>
              );
            }
            if (paragraph.match(/^\d+\. /)) {
              return (
                <li 
                  key={index} 
                  style={{ 
                    marginLeft: '20px', 
                    marginBottom: '12px',
                    listStyle: 'decimal',
                    color: '#a0a0a0'
                  }}
                >
                  {paragraph.replace(/^\d+\. /, '')}
                </li>
              );
            }
            if (paragraph.trim()) {
              return (
                <p 
                  key={index} 
                  style={{ 
                    marginBottom: '25px',
                    color: '#d0d0d0'
                  }}
                >
                  {paragraph}
                </p>
              );
            }
            return null;
          })}
        </div>

        {/* 底部分隔线 */}
        <div style={{ 
          height: '1px', 
          background: 'linear-gradient(90deg, transparent, rgba(0, 245, 255, 0.3), transparent)',
          marginTop: '60px',
          marginBottom: '40px'
        }} />

        {/* 下一篇提示 */}
        <div style={{ 
          textAlign: 'center',
          padding: '30px',
          background: 'rgba(0, 245, 255, 0.05)',
          border: '1px solid rgba(0, 245, 255, 0.2)',
          borderRadius: '8px',
          fontFamily: "'Fira Code', monospace"
        }}>
          <p style={{ color: '#666', fontSize: '14px' }}>
            // 更多文章即将发布
          </p>
          <Link 
            href="/blog"
            style={{ 
              color: '#00f5ff',
              marginTop: '15px',
              display: 'inline-block'
            }}
          >
            &gt; 返回博客列表_
          </Link>
        </div>
      </article>
    </main>
  );
}
