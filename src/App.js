import Topbar from './components/topbar/Topbar'
import Intro from './components/intro/Intro'
import Portfolio from './components/portfolio/Porfolio'
import Works from './components/works/Works'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import './scss/main.scss'
import { useState } from 'react'
import Menu from './components/menu/Menu'

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="app">
      <Topbar
        setMenuOpen={setMenuOpen}
        menuOpen={menuOpen}
      />
      <Menu
        setMenuOpen={setMenuOpen}
        menuOpen={menuOpen}
      />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Works />
        <Testimonials />
        <Contact />
      </div>
    </div>
  )
}

export default App
