import React, { useState } from 'react'
import Select from './Select'
import '../index.css'
import Copycode from './Copycode';

function EditShowfile({ comp }) {
    const styledata = {
        variant: {
            primary: "#3B82F6",
            secondary: "#6B7280",
            success: "#22C55E",
            danger: "#EF4444",
            warning: "#FACC15",
        },

        size: {
            xs: "text-xs",
            sm: "text-sm",
            md: "text-base",
            lg: "text-lg",
            xl: "text-xl"
        },

        radius: {
            none: "rounded-none",
            sm: "rounded-sm",
            md: "rounded-md",
            lg: "rounded-lg",
            full: "rounded-full"
        },

        fontWeight: {
            thin: "font-thin",
            normal: "font-normal",
            medium: "font-medium",
            bold: "font-bold"
        },

        textAlign: {
            left: "text-left",
            center: "text-center",
            right: "text-right"
        },

        display: {
            block: "block",
            inline: "inline-block",
            flex: "flex",
            grid: "grid"
        },

        shadow: {
            none: "shadow-none",
            sm: "shadow-sm",
            md: "shadow-md",
            lg: "shadow-lg"
        },

        padding: {
            none: "p-0",
            xs: "p-1",
            xs2: "p-2",
            sm: "p-2",
            sm2: "p-3",
            md: "p-4",
            md2: "p-5",
            lg: "p-6",
            lg2: "p-7",
            xl: "p-8"
        },

        border: {
            none: "border-0",
            sm: "border border-gray-300",
            md: "border-2 border-gray-400"
        },
    };
    const [name, Setname] = useState([comp])
    const [bg, setBg] = useState(`${styledata.variant[comp.variant]}`);
    const [textColor, setTextColor] = useState("#ffffff");
    const [fontWeight, setFontWeight] = useState("");
    const [align, setAlign] = useState("");
    const [padding, setPadding] = useState({ pl: 1, pr: 1, pt: 1, pb: 1 });
    const [radius, setRadius] = useState("");
    const [shadow, setShadow] = useState("");
    const [userfontSize, setuserFontSize] = useState('15')
    const [borderuser, Setborderuser] = useState('border-none')
    const [borderwidth, Setborderwidth] = useState(0)
    const [bordercoloruser, Setbordercoloruser] = useState("#000000")
    const [tagtext, Settagtext] = useState(name[0].text)

    const Tag = name[0].tag || "div";
    const inlineTags = ["button", "span", "a", "strong", "em", "small", "label", "code"];
    const blockTags = ["p", "div", "section", "article", "header"];

    const isInline = inlineTags.includes(comp.tag);
    const MAX_CHARS = 800;
    const MAX_FONT = 60;
    const MIN_FONT = 15;
    const MAX_WIDTH = 183;

    function calculateSafeFontSize(text, requestedSize) {
        const CHAR_RATIO = 0.6;
        const maxAllowedByWidth = MAX_WIDTH / (text.length * CHAR_RATIO);
        return Math.max(
            MIN_FONT,
            Math.min(requestedSize, MAX_FONT, maxAllowedByWidth)
        );
    }


    return (
        <div className='w-183'>
            <div className="grid grid-cols-3 gap-3 p-6 w-183">

                <div>
                    <label  className={`text-center text-white text-lg ${bg === '' && 'line-through'}`} onClick={()=>{setBg('')}}>Background Color</label>
                    <input type="color" className='ml-2' onChange={(e) => { setBg(e.target.value) }} />
                </div>

                <div>
                    <label className='text-center text-white text-lg'>Color</label>
                    <input type="color" className='ml-2' value={textColor} onChange={(e) => { setTextColor(e.target.value) }} />
                </div>

                <div>
                    <label className='text-center text-white text-sm'>Add FontSize</label>
                    <input type="number" className='bg-white ml-1' value={userfontSize}
                        onChange={e => {
                            const safeSize = calculateSafeFontSize(tagtext, Number(e.target.value));
                            setuserFontSize(Math.floor(safeSize));
                        }} placeholder='Enter fontSize' min={0} />
                </div>

                <Select
                    label="FontWeight"
                    value={fontWeight}
                    onChange={e => setFontWeight(e.target.value)}
                    options={["Select", "font-thin", "font-extralight", "font-light", "font-normal", "font-medium",
                        "font-semibold", "font-bold", "font-extrabold", "font-black"]}
                    className="block w-full px-3 py-2 mt-2 bg-black text-white"
                />

                <Select
                    label="Text Align"
                    value={align}
                    onChange={e => setAlign(e.target.value)}
                    options={["Select", "text-left", "text-center", "text-right"]}
                    className="block w-full px-3 py-2 mt-2  bg-black text-white"
                />

                <div className='w-60'>
                    <label className='text-center text-white text-sm'>Add Padding</label>
                    <div className='flex text-white'>
                        <span className='mr-9'>p</span>
                        <span className='mr-9'>pl</span>
                        <span className='mr-9'>pr</span>
                        <span className='mr-9'>pt</span>
                        <span className='mr-9'>pb</span>
                    </div>
                    <input type="number" onChange={(e) => {
                        if (e.target.value < 0) e.target.value = 0;
                        if (e.target.value > 26) e.target.value = 26;
                        setPadding({ ...padding, pl: e.target.value, pr: e.target.value, pt: e.target.value, pb: e.target.value })
                    }} className='bg-white w-10 mr-2' min={0} defaultValue={0} max={26} />
                    <input type="number" value={padding.pl} onChange={(e) => {
                        if (e.target.value < 0) e.target.value = 0;
                        if (e.target.value > 26) e.target.value = 26;
                        setPadding({ ...padding, pl: e.target.value })
                    }} className='bg-white w-10 mr-2' min={0} max={26} />
                    <input type="number" value={padding.pr} onChange={(e) => {
                        if (e.target.value < 0) e.target.value = 0;
                        if (e.target.value > 26) e.target.value = 26;
                        setPadding({ ...padding, pr: e.target.value })
                    }} className='bg-white w-10 mr-2' min={0} max={26} />
                    <input type="number" value={padding.pt} onChange={(e) => {
                        if (e.target.value < 0) e.target.value = 0;
                        if (e.target.value > 26) e.target.value = 26;
                        setPadding({ ...padding, pt: e.target.value })
                    }} className='bg-white w-10 mr-2' min={0} max={26} />
                    <input type="number" value={padding.pb} onChange={(e) => {
                        if (e.target.value < 0) e.target.value = 0;
                        if (e.target.value > 26) e.target.value = 26;
                        setPadding({ ...padding, pb: e.target.value })
                    }} className='bg-white w-10 mr-2' min={0} max={26} />
                </div>

                <Select
                    label="Radius"
                    value={radius}
                    onChange={e => setRadius(e.target.value)}
                    options={["Select", "rounded-none", "rounded-sm", "rounded-md", "rounded-lg", "rounded-full"]}
                    className="block w-full px-3 py-2 mt-2  bg-black text-white"
                />

                <Select
                    label="Shadow"
                    value={shadow}
                    onChange={e => setShadow(e.target.value)}
                    options={["Select", "shadow-none", "shadow-sm", "shadow", "shadow-md", "shadow-lg", "shadow-xl",
                        "shadow-2xl", "shadow-inner", "shadow-xl/20", "shadow-xl/30"]}
                    className="block w-full px-3 py-2 mt-2  bg-black text-white"
                />

                <div className='mt-9'>
                    <label className='text-center text-white text-sm'>Add Border</label>
                    <input type="number" className='bg-white ml-2' value={borderwidth}
                        onChange={e => {
                            if (e.target.value < 0) e.target.value = 0;
                            if (e.target.value > 5) e.target.value = 5;
                            Setborderwidth(e.target.value)
                        }} placeholder='Enter Border' min={0} max={5} />
                </div>

                <Select
                    label="Border Style"
                    value={borderuser}
                    onChange={e => Setborderuser(e.target.value)}
                    options={["Select", "border", "border-solid", "border-dashed", "border-dotted", "border-double"]}
                    className="block w-full px-3 py-2 mt-2 bg-black text-white"
                />

                <div className='mt-6'>
                    <label className='text-center text-white text-lg'>Border Color</label>
                    <input type="color" className='ml-2 ' value={bordercoloruser} onChange={(e) => { Setbordercoloruser(e.target.value) }} />
                </div>

                <div>
                    <label className='text-center text-white text-sm'>Enter Text</label>
                    <input type="text" className='bg-white' value={tagtext}
                        onChange={e => {
                            let value = e.target.value;
                            if (value.length > MAX_CHARS) {
                                value = value.slice(0, MAX_CHARS);
                            }
                            Settagtext(value);
                            const safeSize = calculateSafeFontSize(tagtext, userfontSize);
                            setuserFontSize(Math.floor(safeSize));
                        }} placeholder='Enter Text'
                        onPaste={(e) => {
                            const pastedText = e.clipboardData.getData("text");
                            const safeSize = calculateSafeFontSize(pastedText, userfontSize);
                            setuserFontSize(Math.floor(safeSize));
                        }}
                    />
                </div>

            </div>
            <div>
                <Copycode allstylespass={{
                    data: [bg, textColor, userfontSize, padding, padding.pl, padding.pr, padding.pt, padding.pb,
                        borderwidth, bordercoloruser, fontWeight, align, radius, shadow, borderuser, tagtext, name[0].tag]
                }} />
            </div>
            <div className='flex items-center justify-center'>
                <Tag style={{ 
                    backgroundColor: `${bg}`, color: `${textColor}`, fontSize: `${userfontSize}px`, paddingLeft: `${padding.pl}px`,
                    paddingRight: `${padding.pr}px`, paddingTop: `${padding.pt}px`, paddingBottom: `${padding.pb}px`, borderWidth: `${borderwidth}px`,
                    borderColor: `${bordercoloruser}`
                }}
                    className={`break-all  ${isInline ? "inline-flex" : "block w-full"} ${fontWeight} ${align}
            ${radius} ${shadow}   ${borderuser}  ${styledata.variant[comp.variant]}`}
                >{tagtext}</Tag>
            </div>
        </div>
    )
}

export default EditShowfile
