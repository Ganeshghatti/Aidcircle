import{j as e,r as m}from"./index-Bf73z5r4.js";function j({styleClass:a,children:s}){return e.jsx("p",{className:`text-center  text-error ${a}`,children:s})}function f({labelTitle:a,labelStyle:s,type:r,containerStyle:l,defaultValue:n,placeholder:u,updateFormValue:o,updateType:c}){const[x,p]=m.useState(n),i=t=>{p(t),o({updateType:c,value:t})};return e.jsxs("div",{className:`form-control w-full ${l}`,children:[e.jsx("label",{className:"label",children:e.jsx("span",{className:"label-text text-base-content "+s,children:a})}),e.jsx("input",{type:r||"text",value:x,placeholder:u||"",onChange:t=>i(t.target.value),className:"input  input-bordered w-full "})]})}export{j as E,f as I};