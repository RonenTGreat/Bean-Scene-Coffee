import { useState } from 'react'
import './App.css'
import Header from './components/Header/header.component'
import Container from './components/Container/container.component'
import Footer from './components/Footer/footer.component'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      <Container />
      <Footer />
    </div>
  )
}

export default App
