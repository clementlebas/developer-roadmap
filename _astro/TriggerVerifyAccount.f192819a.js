import{S as l}from"./spinner.164b1eeb.js";import{h as n,p as h}from"./hooks.module.a845df0c.js";import{a as g,T as d}from"./jwt.f0e0aa9c.js";import{h as f}from"./http.20668c64.js";import{o as e}from"./jsxRuntime.module.8b00cb04.js";import"./preact.module.f1575aff.js";const p="/_astro/error.985c5c63.svg";function N(){const[s,r]=n(!0),[a,o]=n(""),m=i=>{r(!0),f("https://api.roadmap.sh/v1-verify-account",{code:i}).then(({response:t,error:c})=>{if(!t?.token){o(c?.message||"Something went wrong. Please try again."),r(!1);return}g.set(d,t.token,{path:"/",expires:30}),window.location.href="/"}).catch(t=>{r(!1),o("Something went wrong. Please try again.")})};return h(()=>{const t=new URLSearchParams(window.location.search).get("code");if(!t){r(!1),o("Something went wrong. Please try again later.");return}m(t)},[]),e("div",{className:"mx-auto flex max-w-md flex-col items-center pt-0 sm:pt-12",children:e("div",{className:"mx-auto max-w-md text-center",children:[s&&e("img",{alt:"Please wait.",src:l,class:"mx-auto h-16 w-16 animate-spin"}),a&&e("img",{alt:"Please wait.",src:p,className:"mx-auto h-16 w-16"}),e("h2",{className:"mb-1 mt-4 text-center text-xl font-semibold sm:mb-3 sm:mt-4 sm:text-2xl",children:"Verifying your account"}),e("div",{className:"text-sm sm:text-base",children:[s&&e("p",{children:"Please wait while we verify your account.."}),a&&e("p",{class:"text-red-700",children:a})]})]})})}export{N as TriggerVerifyAccount};
