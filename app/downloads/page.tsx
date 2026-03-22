import Link from "next/link";

const apps = [
  {
    slug: "demo-macos-app",
    title: "示例 macOS 应用",
    platform: "macOS",
    version: "1.0.0",
    description: "这是一个 macOS 应用示例，后续会替换成真实应用。",
    downloadUrl: "#",
    size: "25.6 MB",
  },
  {
    slug: "demo-windows-app",
    title: "示例 Windows 应用",
    platform: "Windows",
    version: "1.0.0",
    description: "这是一个 Windows 应用示例，后续会替换成真实应用。",
    downloadUrl: "#",
    size: "32.4 MB",
  },
];

export default function Downloads() {
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
                    color: item === '下载' ? '#00f5ff' : '#a0a0a0',
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
        <div style={{ marginBottom: '30px' }}>
          <h1 style={{ 
            fontSize: '56px', 
            marginBottom: '20px',
            background: 'linear-gradient(135deg, #00f5ff 0%, #7b2fff 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            DOWNLOADS_
          </h1>
          <div style={{ 
            width: '100px', 
            height: '3px', 
            background: 'linear-gradient(90deg, #00f5ff, #7b2fff)'
          }} />
          <p style={{ 
            marginTop: '20px', 
            color: '#666',
            fontFamily: "'Fira Code', monospace",
            fontSize: '16px'
          }}>
            // 桌面应用程序下载 · macOS / Windows
          </p>
        </div>

        <p style={{ 
          fontSize: '18px', 
          color: '#a0a0a0',
          fontFamily: "'Fira Code', monospace",
          marginBottom: '50px',
          lineHeight: 1.8
        }}>
          这里提供我开发的桌面应用程序下载。所有应用均经过安全测试，请放心使用。
        </p>
        
        {/* 应用列表 */}
        <div style={{ display: 'grid', gap: '25px' }}>
          {apps.map((app) => (
            <div 
              key={app.slug}
              className="tech-card"
              style={{ 
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '30px'
              }}
            >
              <div style={{ flex: 1 }}>
                {/* 平台标签 */}
                <div style={{ 
                  display: 'inline-block',
                  padding: '5px 12px',
                  background: app.platform === 'macOS' 
                    ? 'rgba(0, 245, 255, 0.2)' 
                    : 'rgba(0, 204, 106, 0.2)',
                  color: app.platform === 'macOS' ? '#00f5ff' : '#00cc6a',
                  fontSize: '12px',
                  fontFamily: "'Fira Code', monospace",
                  borderRadius: '4px',
                  marginBottom: '12px'
                }}>
                  {app.platform === 'macOS' ? ' macOS' : '🪟 Windows'}
                </div>

                {/* 标题 */}
                <h3 style={{ 
                  fontSize: '28px', 
                  marginBottom: '10px',
                  color: '#e0e0e0'
                }}>
                  {app.title}
                </h3>

                {/* 版本和大小 */}
                <div style={{ 
                  display: 'flex', 
                  gap: '20px',
                  marginBottom: '12px',
                  fontFamily: "'Fira Code', monospace",
                  fontSize: '14px'
                }}>
                  <span style={{ color: '#7b2fff' }}>
                    v{app.version}
                  </span>
                  <span style={{ color: '#666' }}>
                    {app.size}
                  </span>
                </div>

                {/* 描述 */}
                <p style={{ 
                  color: '#a0a0a0', 
                  lineHeight: 1.8,
                  fontFamily: "'Fira Code', monospace",
                  fontSize: '14px'
                }}>
                  {app.description}
                </p>
              </div>

              {/* 下载按钮 */}
              <a 
                href={app.downloadUrl}
                className="tech-button"
                style={{ 
                  background: app.platform === 'macOS' 
                    ? 'linear-gradient(135deg, #00f5ff 0%, #00c8ff 100%)'
                    : 'linear-gradient(135deg, #00cc6a 0%, #00ff88 100%)',
                  color: '#0a0a0f',
                  padding: '15px 35px',
                  borderRadius: '8px',
                  fontWeight: 'bold',
                  fontSize: '16px',
                  whiteSpace: 'nowrap',
                  marginLeft: '30px',
                  fontFamily: "'Fira Code', monospace"
                }}
              >
                下载_
              </a>
            </div>
          ))}
        </div>

        {/* 提示信息 */}
        <div style={{ 
          marginTop: '50px',
          padding: '25px',
          background: 'rgba(123, 47, 255, 0.1)',
          border: '1px solid rgba(123, 47, 255, 0.3)',
          borderRadius: '8px',
          fontFamily: "'Fira Code', monospace"
        }}>
          <p style={{ color: '#7b2fff', fontSize: '14px', marginBottom: '10px' }}>
            💡 提示
          </p>
          <p style={{ color: '#a0a0a0', fontSize: '14px', lineHeight: 1.8 }}>
            所有应用均来自 GitHub Releases。如果下载速度慢，可以复制链接到浏览器下载。
            如遇到问题，请通过联系方式与我反馈。
          </p>
        </div>
      </div>
    </main>
  );
}
