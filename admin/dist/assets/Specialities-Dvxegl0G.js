import{r as t,j as e,L as c,l as p,v as j,s as m}from"./index-DVbhMGLa.js";import"./moment-C-ex9he4.js";import{T as u}from"./TitleCard-CNgGU-dZ.js";import{F as f,a as g}from"./PencilIcon-BKuAQOq-.js";import{u as o,l as b}from"./Layout-Dsp69F2b.js";import"./Subtitle-DKnovVMo.js";const N=()=>e.jsx("div",{className:"inline-block float-right",children:e.jsx(c,{to:"/app/specialities/new",children:e.jsx("button",{className:"btn px-6 btn-sm normal-case btn-primary",children:"Add New"})})});function v(){const a=o(),i=localStorage.getItem("token"),[r,d]=t.useState(),[w,n]=t.useState(!1),l=async()=>{try{if(i){n(!0);const s=await p.get("http://localhost:5000/admin/get-all-specialties",{headers:{Authorization:`Bearer ${i}`}});d(s.data.specialities)}}catch(s){if(console.log(s),s.response&&s.response.status===401)return navigate("/");b.NotificationManager.error("Failed to fetch campaigns","Error",5e3,()=>{alert(s.response.data.error)})}finally{n(!1)}};t.useEffect(()=>{l()},[i]);const h=s=>{a(j({title:"Confirmation",bodyType:"CONFIRMATION",extraObject:{message:"Are you sure you want to delete ",type:"LEAD_DELETE",item:s}})),l()};return e.jsx(e.Fragment,{children:e.jsx(u,{title:"Specialities",topMargin:"mt-2",TopSideButtons:e.jsx(N,{}),children:e.jsx("div",{className:"overflow-x-auto w-full",children:e.jsxs("table",{className:"table w-full",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Name"}),e.jsx("th",{children:"Description"}),e.jsx("th",{children:"Last Update"}),e.jsx("th",{children:"Created At"}),e.jsx("th",{})," ",e.jsx("th",{})]})}),e.jsx("tbody",{children:r&&r.length>0&&r.map((s,x)=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsxs("div",{className:"flex items-center space-x-3",children:[e.jsx("div",{className:"avatar",children:e.jsx("div",{className:"mask mask-squircle w-12 h-12",children:e.jsx("img",{src:s.icon,alt:"Avatar"})})}),e.jsx("div",{children:e.jsx("div",{className:"font-bold",children:s.title})})]})}),e.jsx("td",{children:s.desc}),e.jsx("td",{children:s.lastUpdate}),e.jsx("td",{children:s.createdAt}),e.jsx("td",{children:e.jsx(c,{to:`/app/specialities/${s.link}`,children:e.jsx("button",{className:"btn btn-square btn-ghost p-4",children:e.jsxs("p",{className:"flex items-center gap-1",children:["Edit ",e.jsx(f,{className:"w-5"})]})})})}),e.jsx("td",{children:e.jsx("button",{className:"btn btn-square btn-ghost",onClick:()=>h(s),children:e.jsx(g,{className:"w-5"})})})]},x))})]})})})})}function L(){const a=o();return t.useEffect(()=>{a(m({title:"Specialities"}))},[]),e.jsx(v,{})}export{L as default};