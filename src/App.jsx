import { useState } from 'react'
import './App.css'
import Viewcomponet from './component/Viewcomponet'
import EditComponent from './component/EditComponent'

function App() {
  return (
    <>
      <div className='flex'>
        <Viewcomponet/>
        <EditComponent/>
      </div>
    </>
  )
}

export default App
