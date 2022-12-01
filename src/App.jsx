import { Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import routers from 'src/lib/routers'
import Loading from 'src/components/loading'

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          {routers.map(([url, mpath]) => {
            const Element = lazy(mpath)
            return <Route key={url} path={url} element={<Element />} />
          })}
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
