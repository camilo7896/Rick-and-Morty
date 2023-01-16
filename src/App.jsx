import './App.css'
import Api from './utils/Api'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
function App() {
  return (
    <div className="App">
      <Navbar />

      <div className="container">
        <Api />
      </div>
      <Footer />
    </div>
  )
}

export default App
