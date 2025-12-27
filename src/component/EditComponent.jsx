import React, { useState } from 'react'
import EditShowfile from './EditShowfile';

function EditComponent({ edit, id }) {
  const [items, setitems] = useState([])
  const [alert, Setalert] = useState(false)
  const [storedvalue, Setstoredvalue] = useState([])

  const handleDragEnter = (e, group) => {
    const checkrepeat = items.findIndex((item) => item.id === Number(id))
    if (group && items.length === 1 && checkrepeat === -1) {
      Setalert(true)
      const secondvaluedrag = group.find((data) => data.id === Number(id))
      Setstoredvalue([secondvaluedrag])
    }
    if (items.length === 0) {
      if (Number(id)) {
        const finddrag = group.find((data) => data.id === Number(id))
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
    <div className='bg-gray-800 h-screen' onDragEnter={(e) => handleDragEnter(e, edit)}>
      <div>
        {id && items.length !== 0 ? <div>
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
        <div>
          {alert === true && (
            <div className="fixed inset-0 flex items-center justify-center bg-black/50">
              <div className="bg-black rounded-xl p-6 w-80 shadow-lg">
                <h2 className="text-lg text-white  text-center font-semibold mb-4">
                  Current Editing
                </h2>
                <div className='mb-7 flex justify-around pt-6 '>
                  <button
                    onClick={() => {
                      Setalert(false)
                      setitems(storedvalue)
                    }}
                    className="px-5 py-3 bg-red-500 text-white rounded-md hover:bg-red-600">
                    Discard
                  </button>
                  <button onClick={() => { Setalert(false) }}
                    className="px-5 py-3 bg-gray-500 text-white rounded-md hover:bg-gray-600">Cancel</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default EditComponent
