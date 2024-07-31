import{r as o,j as e,l as h,s as j}from"./index-DVbhMGLa.js";import"./moment-C-ex9he4.js";import{T}from"./TitleCard-CNgGU-dZ.js";import{I as p,E as P}from"./InputText-BLskhWZc.js";import{u as g,l as d}from"./Layout-Dsp69F2b.js";import"./Subtitle-DKnovVMo.js";function N({labelTitle:c,labelStyle:l,type:x,containerStyle:n,defaultValue:i,placeholder:a,updateFormValue:u,updateType:m}){const[f,r]=o.useState(i),t=s=>{r(s),u({updateType:m,value:s})};return e.jsxs("div",{className:`form-control w-full ${n}`,children:[e.jsx("label",{className:"label",children:e.jsx("span",{className:"label-text text-base-content "+l,children:c})}),e.jsx("textarea",{value:f,className:"textarea textarea-bordered w-full",placeholder:a||"",onChange:s=>t(s.target.value)})]})}function S(){g();const[c,l]=o.useState(!1),[x,n]=o.useState(""),i=localStorage.getItem("token"),[a,u]=o.useState({email:"",name:"",about:"",oldpassword:"",newpassword:"",confirmPassword:""}),m=async()=>{try{if(i){l(!0);const t=await h.get("http://localhost:5000/admin/get-profile",{headers:{Authorization:`Bearer ${i}`}}),{name:s,about:w,email:y}=t.data.admin;u(b=>({...b,name:s,about:w,email:y}))}}catch(t){if(console.log(t),t.response&&t.response.status===401)return navigate("/");d.NotificationManager.error("Failed to fetch profile","Error",5e3,()=>{alert(t.response.data.error)})}finally{l(!1)}};o.useEffect(()=>{m()},[i]);const f=async t=>{if(t.preventDefault(),n(""),!a.email||!a.oldpassword){n("Please enter email and password"),d.NotificationManager.error("Error","Email and password are required.");return}if(a.newpassword!==a.confirmPassword){n("Passwords do not match."),d.NotificationManager.error("Error","Passwords do not match.");return}try{l(!0),console.log(a);const s=await h.post("http://localhost:5000/admin/update-profile",a,{headers:{Authorization:`Bearer ${i}`}});d.NotificationManager.success("Success","Profile Updated Successfully"),u({email:"",name:"",about:"",oldpassword:"",newpassword:"",confirmPassword:""}),m()}catch(s){n(s.response.data.error),d.NotificationManager.error("Error","Failed to update profile",5e3,()=>{alert(s.response.data.error)})}finally{l(!1)}},r=({updateType:t,value:s})=>{u(w=>({...w,[t]:s}))};return o.useEffect(()=>{console.log(a)},a),e.jsxs(e.Fragment,{children:[e.jsx(d.NotificationContainer,{}),e.jsx(T,{title:"Profile Settings",topMargin:"mt-2",children:e.jsxs("form",{onSubmit:f,children:[e.jsxs("div",{className:"flex flex-col w-full md:w-1/2",children:[a.name&&e.jsx(p,{labelTitle:"Name",updateType:"name",defaultValue:a.name,updateFormValue:r}),e.jsx(p,{labelTitle:"Email Id",updateType:"email",type:"email",containerStyle:"mt-4",defaultValue:a.email,updateFormValue:r}),e.jsx(p,{labelTitle:"Old Password",updateType:"oldpassword",type:"password",containerStyle:"mt-4",defaultValue:a.oldpassword,updateFormValue:r}),e.jsx(p,{labelTitle:"New Password",updateType:"newpassword",type:"password",containerStyle:"mt-4",defaultValue:a.newpassword,updateFormValue:r}),e.jsx(p,{labelTitle:"Confirm Password",updateType:"confirmPassword",type:"password",containerStyle:"mt-4",defaultValue:a.confirmPassword,updateFormValue:r}),a.about&&e.jsx(N,{labelTitle:"About",updateType:"about",containerStyle:"mt-4",defaultValue:a.about,updateFormValue:r})]}),e.jsx("div",{className:"divider"}),e.jsx(P,{styleClass:"mt-8",children:x}),e.jsx("div",{className:"mt-16",children:e.jsx("button",{type:"submit",className:"btn mt-2 w-full btn-primary float-right"+(c?" loading":""),children:"Update"})})]})})]})}function D(){const c=g();return o.useEffect(()=>{c(j({title:"Settings"}))},[]),e.jsx(S,{})}export{D as default};