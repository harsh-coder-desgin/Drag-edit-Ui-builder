import React, { useEffect, useState } from 'react'
import Showfile from './Showfile'
import Data from './data.json'
import Style from './style.json'
import { useRef } from 'react'

function Viewcomponet({sendfunction ,id}) {
  let ref = useRef(0)
  const [allcomp, Setallcomp] = useState([])
  const [code, Setcode] = useState('')
  const schemadata = Data

  const handleclick = () => {
    const allstyleschema = Style
    const allValues = Object.values(allstyleschema.styledata);
    const allkeys = Object.keys(allstyleschema.styledata);
    const allsizeValues = Object.values(allstyleschema.size);
    const allsizekeys = Object.keys(allstyleschema.size);
    const radiusValues = Object.values(allstyleschema.radius);
    const radiusekeys = Object.keys(allstyleschema.radius);
    const fontWeightValues = Object.values(allstyleschema.fontWeight);
    const fontWeightKeys = Object.keys(allstyleschema.fontWeight);
    const displayValues = Object.values(allstyleschema.display);
    const displayKeys = Object.keys(allstyleschema.display);
    const alignValues = Object.values(allstyleschema.align);
    const alignKeys = Object.keys(allstyleschema.align);
    const shadowValues = Object.values(allstyleschema.shadow);
    const shadowKeys = Object.keys(allstyleschema.shadow);
    const paddingValues = Object.values(allstyleschema.padding);
    const paddingKeys = Object.keys(allstyleschema.padding);

    const parser = new DOMParser();
    const doc = parser.parseFromString(code.replace("className", "class"), "text/html");
    const el = doc.body.firstElementChild;
    schemadata.tag = el.tagName.toLocaleLowerCase()
    schemadata.text = el.textContent
    let clssss = el.className.split(" ")

    for (let i = 0; i < clssss.length; i++) {
      let color = clssss[i].slice(0, clssss[i].length - 4)
      let size = clssss[i].slice(3)
      let padding = clssss[i].slice(2)

      const objectv = allValues.findIndex(element => element === color)
      if (objectv != -1) {
        schemadata.variant = allkeys[objectv]
      }

      const sizevalue = allsizeValues.findIndex(element => element === clssss[i])
      if (sizevalue != -1) {
        schemadata.size = allsizekeys[sizevalue]
      }

      if (Number(size) < 2) {
        schemadata.size = "xs"
      } else if (Number(size) > 6) {
        schemadata.size = "xl"
      }

      const radiusvalue = radiusValues.findIndex(element => element === clssss[i])
      if (radiusvalue != -1) {
        schemadata.radius = radiusekeys[radiusvalue]
      }

      const fontvalue = fontWeightValues.findIndex(element => element === clssss[i])
      if (fontvalue != -1) {
        schemadata.fontWeight = fontWeightKeys[fontvalue]
      } else {
        schemadata.fontWeight = "normal"
      }

      const displayvalue = displayValues.findIndex(element => element === clssss[i])
      if (displayvalue != -1) {
        schemadata.display = displayKeys[displayvalue]
      }

      const alignvalue = alignValues.findIndex(element => element === clssss[i])
      if (alignvalue != -1) {
        schemadata.textAlign = alignKeys[alignvalue]
      }

      const shadowvalue = shadowValues.findIndex(element => element === clssss[i])
      if (shadowvalue != -1) {
        schemadata.shadow = shadowKeys[shadowvalue]
      }

      const paddingvalue = paddingValues.findIndex(element => element === clssss[i])
      if (paddingvalue != -1) {
        schemadata.padding = paddingKeys[paddingvalue]
      } else if (Number(padding) > 8) {
        schemadata.padding = "xl"
      }
    }

    ref.current = ref.current + 1    
    Setallcomp(prev => [
      ...prev,
      {
        id: ref.current,
        name: structuredClone(schemadata)
      }
      ]);
    }

    useEffect(()=>{
      sendfunction(allcomp)
    },[allcomp])

    const handleDragStart = (e) => {
      id(e.target.id)
    };

  return (
    <div className='bg-gray-900 w-200 h-screen'>
      <input onChange={(e) => { Setcode(e.target.value) }} value={code}
        className='w-160 h-8 p-5 mt-5 ml-13 bg-gray-600 text-white font-3xl' placeholder='Copy Paste Code Here' />
      <button onClick={handleclick} className='bg-green-400 px-6 py-2'>Add</button>
      <div>
        <p className='bg-blue-900 text-center text-white mt-2 text-lg p-2' >Drag-and-edit UI builder where you can add one HTML tag at a 
          time and visually modify its content and styles.</p>
      </div>
      <div className='flex flex-wrap gap-2'>
        {allcomp?.map((data) => (
          <div className='' key={data.id} id={data.id}
             draggable onDragStart={(e) => handleDragStart(e)}>
            <Showfile comp={data.name} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Viewcomponet
