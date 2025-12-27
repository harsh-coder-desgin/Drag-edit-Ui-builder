import React, { useState } from 'react'
import EditShowfile from './EditShowfile';

function EditComponent({ edit, id }) {
  const [items, setitems] = useState([])
  const [alert, Setalert] = useState(false)
  const [storedvalue, Setstoredvalue] = useState([])
  const [addpopup, Setaddpopup] = useState(false)
  const [allitems, Setallitems] = useState()

  const firsttag = "<"
  const lasttag = ">"
  const handleDragEnter = (e, group) => {
    const checkrepeat = items.findIndex((item) => item.id === Number(id))

    if (group && items.length === 1 && checkrepeat === -1) {
      Setalert(true)
      const secondvaluedrag = group.find((data) => data.id === Number(id))
      Setstoredvalue([secondvaluedrag])
    }
    if (items.length === 0) {
      if (Number(id) || Number(Add_id)) {
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

  const addlistfor = (e, group, Add_id) => {
    const checkrepeat = items.findIndex((item) => item.id === Number(Add_id))
    if (group && items.length === 1 && checkrepeat === -1) {
      Setaddpopup(false)
      const secondvaluedrag = group.find((data) => data.id === Number(Add_id))
      Setstoredvalue([secondvaluedrag])
      Setalert(true)
    }

    if (items.length === 0) {
      if (Number(Add_id)) {
        const finddrag = group.find((data) => data.id === Number(Add_id))
        if (checkrepeat === -1) {
          setitems([
            ...items,
            finddrag
          ]);
          Setaddpopup(false)
        }
      }
    }
  }

  const handleadd = () => {
    Setallitems(edit);
    Setaddpopup(true)
  }

  return (
    <div className='bg-gray-800 md:h-screen h-650 w-200 md:w-auto' onDragEnter={(e) => handleDragEnter(e, edit)}>
      <div>
        {id || items.length !== 0 ? <div>
          <h1 className='text-center bg-blue-900 text-3xl h-12 p-1 md:w-184 md:text-xl font-bold nd:h-10 md:p-2 text-white'>Edit your UI in live</h1>
          <div
            onClick={handleadd}
            className="absolute top-1 right-32 w-32 h-auto bg-green-600 p-2 pl-5 text-white font-bold">
            Tap to Add
          </div>
          {items?.map((data) => (
            <div className='' key={data?.id}>
              <EditShowfile comp={data?.name} />
            </div>
          ))}
        </div> : <div className="min-h-screen flex items-center justify-center bg-gray-100">
          <div className="bg-gray-800 md:w-184 w-full h-screen border-2 border-dashed border-gray-400 flex items-center justify-center">
            <p className="text-gray-300 text-lg">
              Drop tag to live edit
            </p>
            <p className='ml-4 mr-4 text-blue-300'>OR</p>
            <div
              onClick={handleadd}
              className="w-32 h-auto bg-green-400 p-2 pl-5 text-white font-bold">
              Tap to Add
            </div>
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
        {addpopup && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <div className="w-80 max-h-[70vh] bg-gray-900 rounded-xl shadow-xl p-4 animate-scaleIn">
              <div className="flex justify-between items-center mb-3">
                <h2 className="text-white font-semibold text-lg">
                  🎉 Added Items
                </h2>
                <button
                  onClick={() => Setaddpopup(false)}
                  className="text-gray-400 hover:text-white text-xl"
                >
                  ✕
                </button>
              </div>
              <div className="space-y-2 overflow-y-auto max-h-48">
                {allitems?.map((item) => (
                  <div
                    onClick={(e) => addlistfor(e, edit, item.id)}
                    key={item.id}
                    className="bg-gray-700 text-white px-3 py-2 rounded-md text-sm hover:bg-green-900 transition cursor-pointer"
                  >
                    {firsttag}{item.name.tag}{lasttag} {item.name.text} {firsttag}/{item.name.tag}{lasttag}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default EditComponent
