const url = globalThis.__EXT_HMR__ || 'http://localhost:3000/extension-hmr'
let es
const connect = () => {
  try {
    es = new EventSource(url)
    es.onmessage = () => {
      const c = globalThis.chrome
      if (c && c.runtime && typeof c.runtime.reload === 'function') c.runtime.reload()
    }
    es.onerror = () => {
      try { es.close() } catch (e) { void e }
      setTimeout(connect, 1000)
    }
  } catch {
    setTimeout(connect, 1000)
  }
}
connect()
