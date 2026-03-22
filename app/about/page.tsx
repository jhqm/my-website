import Link from "next/link";

export default function About() {
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
                    color: item === '关于' ? '#00f5ff' : '#a0a0a0',
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
            ABOUT_ME
          </h1>
          <div style={{ 
            width: '100px', 
            height: '3px', 
            background: 'linear-gradient(90deg, #00f5ff, #7b2fff)'
          }} />
        </div>
        
        {/* 内容区 */}
        <div style={{ 
          background: 'rgba(20, 20, 30, 0.6)',
          border: '1px solid rgba(0, 245, 255, 0.2)',
          borderRadius: '12px',
          padding: '40px',
          marginBottom: '40px'
        }}>
          <p style={{ 
            fontSize: '18px', 
            marginBottom: '25px', 
            color: '#e0e0e0',
            lineHeight: 1.8,
            fontFamily: "'Fira Code', monospace"
          }}>
            <span style={{ color: '#7b2fff' }}>const</span> <span style={{ color: '#00f5ff' }}>me</span> = {'{'}
          </p>
          
          <div style={{ paddingLeft: '20px', marginBottom: '25px' }}>
            <p style={{ color: '#e0e0e0', marginBottom: '15px', fontFamily: "'Fira Code', monospace" }}>
              name: <span style={{ color: '#00cc6a' }}>"斯科特（宋伯轩）"</span>,
            </p>
            <p style={{ color: '#e0e0e0', marginBottom: '15px', fontFamily: "'Fira Code', monospace" }}>
              role: <span style={{ color: '#00cc6a' }}>"游戏行业美术项目经理"</span>,
            </p>
            <p style={{ color: '#e0e0e0', marginBottom: '15px', fontFamily: "'Fira Code', monospace" }}>
              interests: [<span style={{ color: '#00cc6a' }}>"前沿科技"</span>, <span style={{ color: '#00cc6a' }}>"创作"</span>, <span style={{ color: '#00cc6a' }}>"开发"</span>],
            </p>
            <p style={{ color: '#e0e0e0', fontFamily: "'Fira Code', monospace" }}>
              location: <span style={{ color: '#00cc6a' }}>"中国深圳"</span>
            </p>
          </div>
          
          <p style={{ 
            fontSize: '18px', 
            color: '#e0e0e0',
            fontFamily: "'Fira Code', monospace"
          }}>
            {'}'};
          </p>
        </div>

        {/* 网站介绍 */}
        <div className="tech-card" style={{ marginBottom: '40px' }}>
          <h2 style={{ 
            fontSize: '28px', 
            marginBottom: '20px',
            color: '#00f5ff'
          }}>
            &gt; 这个网站是做什么的？
          </h2>
          <p style={{ 
            color: '#a0a0a0', 
            lineHeight: 1.8, 
            marginBottom: '20px',
            fontFamily: "'Fira Code', monospace",
            fontSize: '16px'
          }}>
            这是我的数字空间，我会在这里分享：
          </p>
          <ul style={{ 
            paddingLeft: '20px', 
            color: '#a0a0a0',
            fontFamily: "'Fira Code', monospace",
            fontSize: '16px'
          }}>
            <li style={{ marginBottom: '12px' }}>
              <span style={{ color: '#7b2fff' }}>📝</span> 技术博客和行业思考
            </li>
            <li style={{ marginBottom: '12px' }}>
              <span style={{ color: '#00f5ff' }}>🎮</span> H5 小游戏和 Web 应用
            </li>
            <li style={{ marginBottom: '12px' }}>
              <span style={{ color: '#00cc6a' }}>💾</span> 桌面应用程序下载
            </li>
          </ul>
        </div>

        {/* 联系方式 */}
        <div style={{ 
          paddingTop: '40px',
          borderTop: '1px solid rgba(0, 245, 255, 0.2)',
          fontFamily: "'Fira Code', monospace"
        }}>
          <h3 style={{ 
            fontSize: '20px', 
            marginBottom: '20px',
            color: '#00f5ff'
          }}>
            &gt; CONTACT
          </h3>
          <p style={{ color: '#666', marginBottom: '10px' }}>
            📧 Email: [待添加]
          </p>
          <p style={{ color: '#666', marginBottom: '10px' }}>
            🌐 GitHub: [待添加]
          </p>
          <p style={{ color: '#666' }}>
            📍 Location: Shenzhen, CN
          </p>
        </div>
      </div>
    </main>
  );
}
