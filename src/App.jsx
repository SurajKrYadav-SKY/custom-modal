import { useState } from 'react'
import './App.css'
import DummyData from './components/DummyData'
import Modal from './components/modal/Modal'

function App() {

  return (
    <center>
      <h1 style={{marginBottom : "20px"}}>These are just dummy data</h1>
      <DummyData/>
      <Modal/>
      <DummyData/>
      <DummyData/>
      <DummyData/>
      <DummyData/>

    </center>
  )
}

export default App
