import React, { useState } from 'react'
import Showfile from './Showfile';
function EditComponent({edit,id}) {
  console.log(edit);
  console.log(id);

  const [items, setitems] = useState([])

  const handleDragEnter = (e, group) => {
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
  };
  console.log(items);
  

  return (
    <div>
       <div onDragEnter={(e) => handleDragEnter(e, edit)}>
        check draging
        {items?.map((data) => (
          <div className='' key={data?.id}>
            <Showfile comp={data?.name} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default EditComponent
