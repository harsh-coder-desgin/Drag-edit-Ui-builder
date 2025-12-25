import React, { useState } from 'react'
import Showfile from './Showfile';
import EditShowfile from './EditShowfile';
function EditComponent({ edit, id }) {

  const [items, setitems] = useState([])

  const handleDragEnter = (e, group) => {
    if (items.length === 0) {
      if (Number(id)) {
        const finddrag = group.find((data) => data.id === Number(id))
        const checkrepeat = items.findIndex((item) => item.id === Number(id))
        if (checkrepeat === -1) {
          setitems([
            ...items,
            finddrag
          ]);
        }
      }
    }
  };
  
  return (
    <div className='bg-gray-800' onDragEnter={(e) => handleDragEnter(e, edit)}>
    { id ? <div >
        <h1 className='text-center bg-blue-900 w-184 text-xl font-bold h-10 p-2 text-white'>Edit your UI in live</h1>
        {items?.map((data) => (
          <div className='' key={data?.id}>
            <EditShowfile comp={data?.name} />
          </div>
        ))}
      </div> : <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-gray-800 w-184 h-screen border-2 border-dashed border-gray-400 flex items-center justify-center">
        <p className="text-gray-300 text-lg">
          Drop tag to live edit
        </p>
      </div>
    </div>}
    </div>
  )
}

export default EditComponent
