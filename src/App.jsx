
import Nav from './components/nav/Nav'
import Footer from './components/footer/Footer.jsx'
import { Outlet } from 'react-router-dom'
import ScrollTop from './components/scrolltop/ScrollTop.jsx'
function App() {
  

  return (
    <>
      <ScrollTop/>
      <Nav/>
      <Footer></Footer>
    </>
  )
}

export default App
