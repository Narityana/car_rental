"use strict";(self.webpackChunkcar_rental=self.webpackChunkcar_rental||[]).push([[814],{353:function(n,e,t){t.r(e),t.d(e,{default:function(){return en}});var r=t(433),i=t(861),a=t(439),o=t(757),c=t.n(o),s=t(243);function l(n,e){return d.apply(this,arguments)}function d(){return(d=(0,i.Z)(c().mark((function n(e,t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.Z.get("/adverts",{params:{page:e,limit:t}});case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}s.Z.defaults.baseURL="https://64be5da45ee688b6250c46d7.mockapi.io";var u=t(791),p=t(116);var h=t.p+"static/media/image.797d78548af88d2335d5.png";var x,f,b,v,g,Z,j,m,w,y,k,P,C,z,M,L,S,D=t.p+"static/media/icons.ebabecd03b6accf144163a27edebd0f8.svg",N=t(168),_=t(444),E=_.ZP.button(x||(x=(0,N.Z)(["\n  width: ",";\n  height: 44px;\n  padding: 12px;\n\n  font-family: Manrope;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 1.42;\n\n  color: var(--white);\n  background-color: var(--blue);\n  border: none;\n  border-radius: 12px;\n  transition: var(--cubic);\n\n  &:hover,\n  &:focus {\n    background-color: var(--blue-second);\n    box-shadow: none;\n  }\n\n  // &:active {\n  //   box-shadow: none;\n  //   background-color: #0b44cd;\n  // }\n"])),(function(n){return n.width})),F=t(184),O=function(n){var e=n.buttonName,t=n.onClick,r=n.width;return(0,F.jsx)(E,{type:"button",onClick:t,width:r,children:e})},R=_.ZP.li(f||(f=(0,N.Z)(["\n  width: 274px;\n  height: 426px;\n"]))),U=_.ZP.img(b||(b=(0,N.Z)(["\n  width: 100%;\n  height: 268px;\n  display: block;\n  border-radius: 14px;\n  object-fit: cover;\n"]))),q=_.ZP.div(v||(v=(0,N.Z)(["\n  position: relative;\n  width: 274px;\n  height: 268px;\n  border-radius: 14px;\n"]))),A=_.ZP.button(g||(g=(0,N.Z)(["\n  position: absolute;\n  top: 14px;\n  right: 14px;\n  \n  align-items: center;\n  justify-content: center;\n  text-align: center;\n\n  border: none;\n  background: none;\n  padding: 0px;\n\n  &:hover,\n  &:focus {\n    svg {\n      stroke: var(--blue);\n      fill: var(--blue);\n      transition: var(--cubic);\n    }\n  }\n\n  // &.active {\n  //   svg {\n  //     stroke: #3470ff;\n  //     fill: #3470ff;\n  //   }\n  }\n"]))),B=_.ZP.svg(Z||(Z=(0,N.Z)(["\n  width: 18px;\n  height: 18px;\n  bacground: none;\n  stroke: var(--heart);\n  fill: transparent;\n"]))),G=_.ZP.div(j||(j=(0,N.Z)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: var(--gradient);\n  border-radius: 14px;\n"]))),H=_.ZP.div(m||(m=(0,N.Z)(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n"]))),I=_.ZP.div(w||(w=(0,N.Z)(["\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n"]))),J=_.ZP.div(y||(y=(0,N.Z)(["\n  display: flex;\n  margin-bottom: 8px;\n  font-family: Manrope;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 1.5;\n  color: var(--text-black);\n"]))),K=_.ZP.span(k||(k=(0,N.Z)(["\n  margin-left: 2px;\n  color: var(--blue);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: 60px;\n"]))),Q=_.ZP.div(P||(P=(0,N.Z)(["\n  font-family: Manrope;\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 1.5;\n  color: var(--text-grey);\n"]))),T=_.ZP.span(C||(C=(0,N.Z)(["\n  visibility: hidden;\n  width: 120px;\n  bottom: 110%;\n  left: 50%;\n  margin-left: -60px;\n  font-size: 12px;\n  background-color: var(--secondwhite);\n  color: var(--blue);\n  text-align: center;\n  border-radius: 6px;\n  padding: 5px 0;\n  position: absolute;\n  z-index: 100;\n  transition: var(--cubic);\n"]))),V=_.ZP.div(z||(z=(0,N.Z)(["\n  position: relative;\n  display: flex;\n\n  &:hover "," {\n    visibility: visible;\n    transition: var(--cubic);\n  }\n"])),T),W=function(n){var e=n.details,t=n.onLearnMoreClick,r=e.id,i=e.year,a=e.make,o=e.model,c=e.type,s=e.img,l=e.functionalities,d=e.rentalPrice,u=e.rentalCompany,p=e.address,x="".concat(s||h),f=function(n){var e=n.split(", ");return{city:e[1],country:e[2]}}(p),b=f.city,v=f.country,g=function(n){return n.reduce((function(n,e){return e.length<n.length?e:n}),n[0])}(l);return(0,F.jsxs)(R,{children:[(0,F.jsxs)(q,{children:[(0,F.jsx)(U,{src:x,alt:"".concat(a," ").concat(o," ").concat(i)}),(0,F.jsx)(G,{}),(0,F.jsx)(A,{type:"button",children:(0,F.jsx)(B,{children:(0,F.jsx)("use",{href:"".concat(D,"#icon-heart")})})})]}),(0,F.jsxs)(H,{children:[(0,F.jsxs)(I,{children:[(0,F.jsx)(V,{children:(0,F.jsxs)(J,{children:[(0,F.jsx)(T,{children:"".concat(o)}),(0,F.jsx)("p",{children:"".concat(a)}),(0,F.jsxs)(K,{children:[" ","".concat(o)]}),(0,F.jsxs)("p",{children:[", ","".concat(i)]})]})}),(0,F.jsx)(J,{children:d})]}),(0,F.jsxs)(Q,{children:[(0,F.jsx)("p",{children:b}),(0,F.jsx)("p",{children:v}),(0,F.jsx)("p",{children:u}),(0,F.jsx)("p",{children:c}),(0,F.jsx)("p",{children:r}),(0,F.jsx)("p",{children:g})]})]}),(0,F.jsx)(O,{buttonName:"Learn more",width:"274px",onClick:t})]})},X=_.ZP.div(M||(M=(0,N.Z)(["\n  display: flex;\n  margin: 0 auto;\n"]))),Y=_.ZP.ul(L||(L=(0,N.Z)(["\n  margin-top: 50px;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 29px;\n"]))),$=(_.ZP.li(S||(S=(0,N.Z)(["\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover {\n    color: rgb(245 244 154);\n    font-size: 18px;\n  }\n"]))),function(n){var e=n.carsData;return(0,F.jsx)(X,{children:(0,F.jsx)(Y,{children:e.map((function(n){return(0,F.jsx)(W,{details:n},n.id)}))})})}),nn=function(){var n=(0,u.useState)([]),e=(0,a.Z)(n,2),t=e[0],o=e[1],s=(0,u.useState)(!1),d=(0,a.Z)(s,2),h=d[0],x=d[1],f=(0,u.useState)(1),b=(0,a.Z)(f,2),v=b[0],g=b[1];(0,u.useEffect)((function(){var n=function(){var n=(0,i.Z)(c().mark((function n(){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,x(!0),n.next=4,l(v,8);case 4:return e=n.sent,n.abrupt("return",o(1===v?e:function(n){return[].concat((0,r.Z)(n),(0,r.Z)(e))}));case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:return n.prev=11,x(!1),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[0,8,11,14]])})));return function(){return n.apply(this,arguments)}}();n()}),[v]);return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)("h1",{children:"Our best cars"}),(0,F.jsx)($,{carsData:t}),h&&(0,F.jsx)(p.Z,{}),(0,F.jsx)("button",{onClick:function(){g(v+1)},children:"Load More"})]})},en=function(){return(0,F.jsx)(nn,{})}}}]);
//# sourceMappingURL=814.acc6faf6.chunk.js.map