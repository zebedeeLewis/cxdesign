import{j as i}from"./index-C3T4cSFs.js";import{a as o}from"./primary-BcWKPdYe.js";const e="/assets/canada-location-image-D7djgAJc.svg",l="/assets/australia-location-image-BgpfEkJM.svg",c="/assets/united-kingdom-location-image-0eDLWifs.svg",m=a=>({"--image":`url(${a})`}),L=()=>i.jsx("nav",{className:"locationLinks",children:i.jsxs("ul",{className:"locationLinks-list",children:[" ",[{title:"Canada",image:e},{title:"Australia",image:l},{title:"United Kingdom",image:c}].map(({title:a,image:s},t)=>i.jsxs("li",{className:"locationLinks-item",style:m(s),children:[i.jsx("span",{className:"locationLinks-title",children:a}),i.jsx(o,{to:"/location",className:"locationLinks-link",children:"see location"})]},t))," "]})}),g=(a,s)=>({...a,"--image":`url(${s})`}),x=({as:a="div",image:s=null,children:t,className:n})=>i.jsx(a,{className:`flexiCard ${n||""} ${s?"":"flexiCard--simple"}`,style:s?g({},s):{},children:t});export{x as F,L};