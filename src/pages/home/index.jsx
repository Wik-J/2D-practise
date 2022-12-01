import { useEffect } from 'react'

const Home = () => {
  useEffect(() => {
    console.log(123)
  }, [])
  return <div>123</div>
}

export default Home
