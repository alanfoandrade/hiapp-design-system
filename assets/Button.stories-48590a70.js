import{j as u}from"./jsx-runtime-5fc188ad.js";import{I as M,r as O,c as V}from"./index-64fef78f.js";import{R as e,r as H}from"./index-c0290abd.js";import"./extends-98964cd2.js";import"./_commonjsHelpers-725317a4.js";var n=new Map;n.set("bold",function(r){return e.createElement(e.Fragment,null,e.createElement("line",{x1:"40",y1:"128",x2:"216",y2:"128",fill:"none",stroke:r,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),e.createElement("polyline",{points:"144 56 216 128 144 200",fill:"none",stroke:r,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});n.set("duotone",function(r){return e.createElement(e.Fragment,null,e.createElement("line",{x1:"40",y1:"128",x2:"216",y2:"128",fill:"none",stroke:r,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),e.createElement("polyline",{points:"144 56 216 128 144 200",fill:"none",stroke:r,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});n.set("fill",function(){return e.createElement(e.Fragment,null,e.createElement("path",{d:"M221.7,133.7l-72,72A8.3,8.3,0,0,1,144,208a8.5,8.5,0,0,1-3.1-.6A8,8,0,0,1,136,200V136H40a8,8,0,0,1,0-16h96V56a8,8,0,0,1,4.9-7.4,8.4,8.4,0,0,1,8.8,1.7l72,72A8.1,8.1,0,0,1,221.7,133.7Z"}))});n.set("light",function(r){return e.createElement(e.Fragment,null,e.createElement("line",{x1:"40",y1:"128",x2:"216",y2:"128",fill:"none",stroke:r,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),e.createElement("polyline",{points:"144 56 216 128 144 200",fill:"none",stroke:r,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});n.set("thin",function(r){return e.createElement(e.Fragment,null,e.createElement("line",{x1:"40",y1:"128",x2:"216",y2:"128",fill:"none",stroke:r,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),e.createElement("polyline",{points:"144 56 216 128 144 200",fill:"none",stroke:r,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});n.set("regular",function(r){return e.createElement(e.Fragment,null,e.createElement("line",{x1:"40",y1:"128",x2:"216",y2:"128",fill:"none",stroke:r,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),e.createElement("polyline",{points:"144 56 216 128 144 200",fill:"none",stroke:r,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var N=function(m,_){return O(m,_,n)},I=H.forwardRef(function(r,m){return e.createElement(M,Object.assign({ref:m},r,{renderPath:N}))});I.displayName="ArrowRight";const Z=I,Q={title:"Form/Button",component:V,args:{children:"Send",variant:"primary",size:"md",disabled:!1},argTypes:{variant:{options:["primary","secondary","tertiary"],control:{type:"inline-radio"}},size:{options:["sm","md"],control:{type:"inline-radio"}},disabled:{control:{type:"boolean"}},onClick:{action:"click"}}},t={},a={args:{disabled:!0}},o={args:{variant:"secondary",children:"Create new"}},s={args:{variant:"secondary",children:"Create new",disabled:!0}},i={args:{variant:"tertiary",children:"Cancel"}},c={args:{variant:"tertiary",children:"Cancel",disabled:!0}},l={args:{size:"sm"}},d={args:{children:u.jsxs(u.Fragment,{children:["Próximo passo",u.jsx(Z,{weight:"bold"})]})}};var p,y,g;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(g=(y=t.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var k,h,f;a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(f=(h=a.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var E,L,b;o.parameters={...o.parameters,docs:{...(E=o.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    children: 'Create new'
  }
}`,...(b=(L=o.parameters)==null?void 0:L.docs)==null?void 0:b.source}}};var x,j,S;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    children: 'Create new',
    disabled: true
  }
}`,...(S=(j=s.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var W,v,w;i.parameters={...i.parameters,docs:{...(W=i.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    variant: 'tertiary',
    children: 'Cancel'
  }
}`,...(w=(v=i.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var P,C,F;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    variant: 'tertiary',
    children: 'Cancel',
    disabled: true
  }
}`,...(F=(C=c.parameters)==null?void 0:C.docs)==null?void 0:F.source}}};var R,A,D;l.parameters={...l.parameters,docs:{...(R=l.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    size: 'sm'
  }
}`,...(D=(A=l.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};var B,T,z;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    children: <>
        Próximo passo
        <ArrowRight weight="bold" />
      </>
  }
}`,...(z=(T=d.parameters)==null?void 0:T.docs)==null?void 0:z.source}}};const U=["Primary","PrimaryDisabled","Secondary","SecondaryDisabled","Tertiary","TertiaryDisabled","Small","WithIcon"];export{t as Primary,a as PrimaryDisabled,o as Secondary,s as SecondaryDisabled,l as Small,i as Tertiary,c as TertiaryDisabled,d as WithIcon,U as __namedExportsOrder,Q as default};
//# sourceMappingURL=Button.stories-48590a70.js.map
