import React, { useState } from 'react'

function Copycode(data) {
    const [open, setOpen] = useState(false);
    const [copyied, setcopyied] = useState(false);

    if (data.allstylespass.data[10] === 'Select') {
        data.allstylespass.data[10] = ''
    }
    if (data.allstylespass.data[11] === 'Select') {
        data.allstylespass.data[11] = ''
    }
    if (data.allstylespass.data[12] === 'Select') {
        data.allstylespass.data[12] = ''
    }
    if (data.allstylespass.data[13] === 'Select') {
        data.allstylespass.data[13] = ''
    }
    if (data.allstylespass.data[14] === 'Select') {
        data.allstylespass.data[14] = ''
    }

    let tagonlt = `<${data.allstylespass.data[16]} 
    className='bg-[${data.allstylespass.data[0]}] text-[${data.allstylespass.data[1]}] text-[${data.allstylespass.data[2]}px] 
    pl-[${data.allstylespass.data[3].pl}px] pr-[${data.allstylespass.data[3].pr}px] pt-[${data.allstylespass.data[3].pt}px] pb-[${data.allstylespass.data[3].pb}px]  
    ${data.allstylespass.data[10]}  ${data.allstylespass.data[11]} ${data.allstylespass.data[12]} ${data.allstylespass.data[13]} 
    border-${data.allstylespass.data[8]} ${data.allstylespass.data[14]} border-[${data.allstylespass.data[9]}]'>
    ${data.allstylespass.data[15]} 
</${data.allstylespass.data[16]}>`

    const hanldeonclick = () => {
        navigator.clipboard.writeText(tagonlt)
        setcopyied(true)
    }

    return (
        <div>
            <button className='text-white mt-2 mb-7 md:mb-0 bg-black p-4 md:p-2 md:text-[17px] text-3xl rounded-md ml-6 md:-mt-4' onClick={() => setOpen(true)}>Show Code</button>
            <div>
                {open && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black/50">
                        <div className="bg-black rounded-xl p-6 w-180 shadow-lg">
                           <div className='flex justify-between'>
                             <h2 className="text-lg text-white font-semibold mb-4">
                                Copy Your code
                            </h2>
                             <button
                                onClick={() => {setOpen(false) 
                                    setcopyied(false)}}
                                className="px-5 py-1 bg-red-500 text-white rounded-md hover:bg-red-600">
                                X
                            </button>
                            </div>
                           { copyied &&<h1 className='text-green-300 font-bold text-center mr-3'>Code Copied Successfully</h1>}
                            <div className='mb-7'>
                                <h1 className='text-white absolute ml-10 mt-3'>File</h1>
                                <button onClick={hanldeonclick} className='text-white absolute right-27 md:right-117 mt-3'>Copy</button>
                                <div className='break-all text-white bg-gray-800 mt-10 h-auto p-5 pt-13 pb-3 rounded-lg ml-5 mr-5'>
                                    <pre className="whitespace-pre-wrap break-words">
                                        <code>{tagonlt}</code>
                                    </pre>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Copycode
