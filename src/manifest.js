import { isDev, port } from './utils/config'

export const getManifest = () => {
  const m = {
    manifest_version: 3,
    name: 'Vue Chrome Extension',
    version: '0.0.0',
    action: { default_popup: 'dist/src/popup/index.html' },
    side_panel: { default_path: 'dist/src/sidepanel/index.html' },
    options_page: 'dist/src/options/index.html',
    permissions: ['storage'],
    host_permissions: isDev ? [`http://localhost:${port}/*`] : [],
    background: isDev ? { service_worker: 'dist/script/dev-hmr.js', type: 'module' } : undefined,
    web_accessible_resources: [{ resources: ['dist/*'], matches: ['<all_urls>'] }],
  }
  if (isDev) {
    m.content_security_policy = {
      extension_pages: `script-src 'self' http://localhost:${port}; object-src 'self'; connect-src 'self' ws://localhost:${port} http://localhost:${port}`,
    }
  }
  return m
}

export default getManifest
