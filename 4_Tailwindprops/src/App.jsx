import { useState } from 'react'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-4xl font-bold text-amber-100 bg-amber-950 mb-4'> Tailwind</h1>
      <Card username="AVI"/>
      <Card username="Kartik"/>
    </>
  )
}

export default App
