import { useState } from 'react'
import './App.css'
import Viewcomponet from './component/ViewComponet'
import EditComponent from './component/EditComponent'

function App() {
  const [dataformuser,SetDataformuser] = useState()
  const [iduser,Setiduser] = useState()

  const userdata = (data) =>{
    SetDataformuser(data)
  }

  const userid = (id) =>{
    Setiduser(id)
  }
  
  return (
    <>
      <div className='flex'>
        <Viewcomponet sendfunction={userdata} id={userid} />
        <EditComponent edit={dataformuser} id={iduser} />
      </div>
    </>
  )
}

export default App
