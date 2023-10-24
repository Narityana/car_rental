"use strict";(self.webpackChunkcar_rental=self.webpackChunkcar_rental||[]).push([[509],{9509:function(n,e,t){t.r(e),t.d(e,{default:function(){return D}});var r,a,i,o,l,u,s,c=t(4165),d=t(5861),p=t(9439),x=t(9434),f=t(2791),h=t(8727),g=function(n){return n.cars.cars},v=function(n){return n.cars.isLoading},b=function(n){return n.cars.error},m=(0,t(6916).P1)([g,function(n){return n.filter}],(function(n,e){return n.filter((function(n){return(""===e.make||n.make===e.make)&&(""===e.price||n.price<=e.price)&&(""===e.minMileage||n.mileage>=e.minMileage)&&(""===e.maxMileage||n.mileage<=e.maxMileage)}))})),Z=t(7116),j=t(2575),y=t(1413),k=t(9940),w=t(1634),M=function(){for(var n=[],e=30;e<=500;e+=10)n.push({value:e,label:e});return n},S=t(168),C=t(4313),P=C.ZP.div(r||(r=(0,S.Z)(["\n  display: flex;\n\n  width: 859px;\n  height: 74px;\n  margin: 20px auto 0;\n  // background-color: var(--secondwhite);\n"]))),z=C.ZP.form(a||(a=(0,S.Z)(["\n  display: flex;\n  gap: 18px;\n"]))),L=C.ZP.div(i||(i=(0,S.Z)(["\n  display: flex;\n  flex-direction: column;\n"]))),B=C.ZP.div(o||(o=(0,S.Z)(["\n  display: flex;\n"]))),E=C.ZP.input(l||(l=(0,S.Z)(["\n  width: 160px;\n  height: 48px;\n  padding: 0 24px;\n  margin-top: 8px;\n  // border: none;\n  font-size: 18px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 20px;\n  background: var(--secondwhite);\n\n  &:first-child {\n    border-radius: 14px 0 0 14px;\n    border: 1px solid rgba(138, 138, 137, 0.2);\n  }\n\n  &:last-child {\n    border-radius: 0 14px 14px 0;\n    border: 1px solid rgba(138, 138, 137, 0.2);\n  }\n\n  &:focus {\n    border: 2px solid var(--blue);\n    outline: none;\n  }\n\n  ::placeholder {\n    margin-left: 3px;\n  }\n"]))),T=JSON.parse('["Buick","Volvo","HUMMER","Subaru","Mitsubishi","Nissan","Lincoln","GMC","Hyundai","MINI","Bentley","Mercedes-Benz","Aston Martin","Pontiac","Lamborghini","Audi","BMW","Chevrolet","Mercedes-Benz","Chrysler","Kia","Land"]'),I=t(184),N=function(n){var e=n.setFiltering,t=(0,f.useState)(!1),r=(0,p.Z)(t,2),a=r[0],i=r[1],o=(0,f.useState)(!0),l=(0,p.Z)(o,2),u=l[0],s=l[1],h=(0,f.useState)({value:"",label:"Enter the text"}),g=(0,p.Z)(h,2),v=g[0],b=g[1],m=(0,f.useState)({value:"",label:"To $"}),Z=(0,p.Z)(m,2),j=Z[0],S=Z[1],C=(0,f.useState)({value:""}),N=(0,p.Z)(C,2),R=N[0],W=N[1],A=(0,f.useState)({value:""}),D=(0,p.Z)(A,2),F=D[0],H=D[1],K=(0,x.I0)();(0,f.useEffect)((function(){""===v.value&&""===j.value&&""===F.value&&""===R.value&&(console.log("button is disabled"),s(!0))}),[v,j,F,R]);var O,$=function(){var n=(0,d.Z)((0,c.Z)().mark((function n(t){var r;return(0,c.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:t.preventDefault(),i(!0),console.log("\u043d\u0430\u0442\u0438\u0441\u043d\u0443\u043b\u0438 \u043a\u043d\u043e\u043f\u043a\u0443"),r={make:v.value,price:j.value,minMileage:R.value,maxMileage:F.value},K((0,w.T)(r)),e(!0),console.log(r);case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return(0,I.jsx)(P,{children:(0,I.jsxs)(z,{onSubmit:$,children:[(0,I.jsxs)(L,{children:[(0,I.jsx)("label",{children:"Car brand"}),(0,I.jsx)(k.ZP,{name:"make",options:(O=T,O.map((function(n){return{value:n,label:n}}))),value:v,onChange:function(n){console.log(n),s(!1),b(n)},styles:{control:function(n){return(0,y.Z)((0,y.Z)({},n),{},{backgroundColor:"var(--secondwhite)",width:"224px",height:"48px",borderRadius:"14px",fontSize:"18px",fontWeight:"500",paddingLeft:"18px",marginTop:"8px"})}}})]}),(0,I.jsxs)(L,{children:[(0,I.jsx)("label",{children:"Price/ 1 hour"}),(0,I.jsx)(k.ZP,{name:"price",options:M(),value:j,onChange:function(n){s(!1),S(n)},styles:{control:function(n){return(0,y.Z)((0,y.Z)({},n),{},{backgroundColor:"var(--secondwhite)",width:"125px",height:"48px",borderRadius:"14px",fontSize:"18px",fontWeight:"500",paddingLeft:"18px",marginTop:"8px"})}}})]}),(0,I.jsxs)(L,{children:[(0,I.jsx)("label",{children:"\u0421ar mileage / km"}),(0,I.jsxs)(B,{children:[(0,I.jsx)(E,{id:"from",name:"minMileage",value:R.value,onChange:function(n){s(!1),W(n)}}),(0,I.jsx)(E,{id:"to",name:"maxMileage",value:F.value,onChange:function(n){s(!1),H(n)}})]})]}),(0,I.jsx)("button",{width:"274px",type:"submit",className:u?"disabled":"",disabled:a||u,children:"Search"}),(0,I.jsx)("button",{type:"reset",onClick:function(){b({value:"",label:"Enter the text"}),S({value:"",label:"To $"}),W({value:""}),H({value:""})},disabled:a||u})]})})},R=C.ZP.div(u||(u=(0,S.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),W=C.ZP.button(s||(s=(0,S.Z)(["\n  display: flex;\n  margin-top: 100px;\n  color: var(--blue);\n  background: none;\n  border: none;\n  font-family: Manrope;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 1.5px;\n  text-decoration: underline;\n"]))),A=function(){var n=(0,x.v9)(v),e=(0,x.v9)(b),t=(0,x.v9)(g),r=(0,x.v9)(m),a=(0,f.useState)(!1),i=(0,p.Z)(a,2),o=i[0],l=i[1],u=(0,f.useState)(1),s=(0,p.Z)(u,2),y=s[0],k=s[1],w=(0,f.useState)(!1),M=(0,p.Z)(w,2),S=M[0],C=M[1],P=(0,x.I0)();(0,f.useEffect)((function(){C(!0),P((0,h.Ke)())}),[P]);var z=function(){var n=(0,d.Z)((0,c.Z)().mark((function n(){var e;return(0,c.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return k((function(n){return n+1})),n.next=3,P((0,h.uz)({page:y+1}));case 3:e=n.sent,console.log(e.payload.length),e.payload.length<8&&C(!1);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return(0,I.jsxs)(R,{children:[n&&!e&&(0,I.jsx)(Z.Z,{}),e&&(0,I.jsx)("b",{children:"Oops! Something went wrong. Please try again later."}),(0,I.jsx)(N,{setFiltering:l}),(0,I.jsx)(j.Z,{carsData:o?o?(console.log(r),r):void 0:(console.log(t),t)}),S&&(0,I.jsx)(W,{onClick:z,children:"Load More"})]})},D=function(){return(0,I.jsx)(A,{})}}}]);
//# sourceMappingURL=509.2ddae010.chunk.js.map