import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
const details = {
name:"oppo",
company : "poco"

}


  return (
    <>
      <div>
      <h1 className="text-3xl font-bold underline bg-black ">
      Hello world!
    </h1>
    <Card title="best phone in 2024" content="oppo phone heavy "></Card>

    <Card title= "promar"> </Card>
      </div>
      
    </>
  )
}

export default App
