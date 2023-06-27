import './App.css'
import Board from './components/Board'
import MyNavbar from './components/MyNavbar'
import { useState } from 'react'

function App() {
  const [showModal, setShowModal] = useState(false)

  const handleClose = () => setShowModal(false)
  const handleShow = () => setShowModal(true)

  return (
    <div>
      <MyNavbar onNewDoc={handleShow}/>
      <div className='container'>
        <Board showModal={showModal} handleClose={handleClose}/>
      </div>
    </div>
  )
}

export default App