import { useState } from "react";
import '../index.css'

function Showfile({ comp }) {  
  
  const [name, Setname] = useState([comp])
  const styledata = {
    variant: {
      primary: "bg-blue-500 text-white",
      secondary: "bg-gray-500 text-white",
      success: "bg-green-500 text-white",
      danger: "bg-red-500 text-white",
      warning: "bg-yellow-400 text-black"
    },

    size: {
      xs: "text-xs px-2 py-1",
      sm: "text-sm px-3 py-1.5",
      md: "text-base px-4 py-2",
      lg: "text-lg px-5 py-2.5",
      xl: "text-xl px-6 py-3"
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

  const Tag = name[0].tag || "div";
  const inlineTags = ["button", "span", "a", "strong", "em", "small", "label", "code"];
  const blockTags = ["p", "div", "section", "article", "header"];
  
  const isInline = inlineTags.includes(comp.tag);
  return (
    <div>
      <Tag className={` ${isInline ? "inline-flex" : "block w-200"}  ${styledata.variant[comp.variant]} ${styledata.size[comp.size]} ${styledata.radius[comp.radius]}
      ${styledata.fontWeight[comp.fontWeight]} ${styledata.textAlign[comp.textAlign]} ${styledata.display[comp.display]} ${styledata.shadow[comp.shadow]}
       ${styledata.padding[comp.padding]}  ${styledata.border[comp.border]}
      `}
        >{name[0].text}</Tag>
    </div>
  )
}

export default Showfile
