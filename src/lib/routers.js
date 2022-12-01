const routers = []
const pages = import.meta.glob('src/pages/**/index.jsx')

Object.keys(pages).forEach(key => {
  const mpath = key.match(/.\/pages(\/.+)\//)
  if (mpath && mpath[1]) {
    // [url,()=>import()]
    routers.push([mpath[1], pages[key]])
  }
})

export default routers
