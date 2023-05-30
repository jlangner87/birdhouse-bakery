import './styles/App.css'
import './styles/Mobile.css'
import { BrowserRouter } from 'react-router-dom'
import Header from './components/header'
import About from './components/about'
import Gallery from './components/gallery'
import Contact from './components/contact'

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Gallery />
      <Contact />
    </div>
  )
}

export default App
