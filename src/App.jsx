import { useState } from 'react'
import './App.css'
import TextEditor from './TextEditor'

function App() {
  const [value, setValue] = useState('')

  return (
    <>
      <TextEditor />
    </>
  )
}

export default App
