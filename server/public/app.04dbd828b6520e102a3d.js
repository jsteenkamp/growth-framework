!function(e){function t(t){for(var r,i,l=t[0],c=t[1],p=t[2],s=0,f=[];s<l.length;s++)i=l[s],a[i]&&f.push(a[i][0]),a[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);for(u&&u(t);f.length;)f.shift()();return o.push.apply(o,p||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,l=1;l<n.length;l++){var c=n[l];0!==a[c]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={0:0},o=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var l=window.webpackJsonp=window.webpackJsonp||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var p=0;p<l.length;p++)t(l[p]);var u=c;o.push([170,1]),n()}({170:function(e,t,n){e.exports=n(403)},403:function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"primaryColor",function(){return B}),n.d(r,"primaryLightColor",function(){return L}),n.d(r,"primaryDarkColor",function(){return H}),n.d(r,"primaryText",function(){return A}),n.d(r,"primaryLightText",function(){return F}),n.d(r,"primaryDarkText",function(){return R}),n.d(r,"secondaryColor",function(){return G}),n.d(r,"secondaryLightColor",function(){return $}),n.d(r,"secondaryDarkColor",function(){return Q}),n.d(r,"secondaryText",function(){return J}),n.d(r,"secondaryLightText",function(){return V}),n.d(r,"secondaryDarkText",function(){return K}),n.d(r,"backgroundColor",function(){return U}),n.d(r,"surfaceColor",function(){return X}),n.d(r,"surfaceDarkColor",function(){return Y}),n.d(r,"errorColor",function(){return Z});var a={};n.r(a),n.d(a,"sm",function(){return ee}),n.d(a,"md",function(){return te}),n.d(a,"lg",function(){return ne}),n.d(a,"xl",function(){return re}),n.d(a,"s0",function(){return ce}),n.d(a,"s1",function(){return pe}),n.d(a,"s2",function(){return ue}),n.d(a,"s3",function(){return se}),n.d(a,"s4",function(){return fe}),n.d(a,"s5",function(){return xe}),n.d(a,"s6",function(){return de}),n.d(a,"s7",function(){return me}),n.d(a,"s8",function(){return he}),n.d(a,"s9",function(){return ge}),n.d(a,"s10",function(){return be}),n.d(a,"s11",function(){return ye}),n.d(a,"s12",function(){return Ee}),n.d(a,"s13",function(){return ve}),n.d(a,"s14",function(){return we}),n.d(a,"s15",function(){return Oe}),n.d(a,"s16",function(){return je}),n.d(a,"s17",function(){return ke}),n.d(a,"s18",function(){return Se}),n.d(a,"s19",function(){return Ce}),n.d(a,"s20",function(){return Te}),n.d(a,"s21",function(){return ze}),n.d(a,"s22",function(){return Pe}),n.d(a,"s23",function(){return Ne}),n.d(a,"s24",function(){return We}),n.d(a,"shadowAmbient",function(){return De});var o=n(0),i=n.n(o),l=n(54),c=n.n(l),p=n(18),u=n(5),s=n(92),f=n(408),x=n(166),d=n(152),m=n(4),h=n(165),g=n(154),b=n.n(g),y=n(155),E=n.n(y),v=n(156),w=n.n(v),O=n(157),j=[],k=n.n(O).a.convert({cap:!1}),S=function(e){return b()(w()(e),k(E.a,{}))},C=function(e){var t=S("defaults")(j),n=S("mutations")(j);return Object(h.a)({cache:e,defaults:t,resolvers:{Mutation:n}})};function T(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){z(e,t,n[t])})}return e}function z(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var P=window.location,N=P.host,W=P.protocol,D="http://".concat(N,"/graphql");"https:"===W&&(D="https://".concat(N,"/graphql"));var I=new x.a({uri:D,credentials:"same-origin"}),_=new m.a(function(e,t){var n=sessionStorage.getItem("token");return e.setContext(function(e){var t=e.headers;return{headers:T({},void 0===t?{}:t,{Authorization:n?"Bearer ".concat(n):""})}}),t(e)}),M=C(new f.a),q=new s.default({link:m.a.from([Object(d.a)(function(e){var t=e.graphQLErrors,n=e.networkError;t&&t.map(function(e){var t=e.message,n=e.locations,r=e.path;return console.log("[GraphQL error]: Message: ".concat(t,", Location: ").concat(n,", Path: ").concat(r))}),n&&console.error("[Network error]: ".concat(n))}),M,_,I]),cache:new f.a}),B="#e0e0e0",L="#ffffff",H="#bcbcbc",A="#000000",F="rgba(0,0,0,.54)",R="rgba(0,0,0,.60)",G="#0277bd",$="#58a5f0",Q="#004c8c",J="#ffffff",V="rgba(0,0,0,.66)",K="rgba(255,255,255,.64)",U="#ffffff",X="#ffffff",Y="#f5f5f6",Z="#c30020",ee="0 0 2px 0 rgba(0,0,0,.1),0 1px 4px 0 rgba(0,0,0,.18)",te="0 0 2px 0 rgba(0,0,0,.1),0 2px 8px 0 rgba(0,0,0,.18)",ne="0 0 2px 0 rgba(0,0,0,.1),0 4px 16px 0 rgba(0,0,0,.18)",re="0 0 2px 0 rgba(0,0,0,.1),0 8px 32px 0 rgba(0,0,0,.18)",ae=["0px 0px 0px 0px","0px 2px 1px -1px","0px 3px 1px -2px","0px 3px 3px -2px","0px 2px 4px -1px","0px 3px 5px -1px","0px 3px 5px -1px","0px 4px 5px -2px","0px 5px 5px -3px","0px 5px 6px -3px","0px 6px 6px -3px","0px 6px 7px -4px","0px 7px 8px -4px","0px 7px 8px -4px","0px 7px 9px -4px","0px 8px 9px -5px","0px 8px 10px -5px","0px 8px 11px -5px","0px 9px 11px -5px","0px 9px 12px -6px","0px 10px 13px -6px","0px 10px 13px -6px","0px 10px 14px -6px","0px 11px 14px -7px","0px 11px 15px -7px"],oe=["0px 0px 0px 0px","0px 1px 1px 0px","0px 2px 2px 0px","0px 3px 4px 0px","0px 4px 5px 0px","0px 5px 8px 0px","0px 6px 10px 0px","0px 7px 10px 1px","0px 8px 10px 1px","0px 9px 12px 1px","0px 10px 14px 1px","0px 11px 15px 1px","0px 12px 17px 2px","0px 13px 19px 2px","0px 14px 21px 2px","0px 15px 22px 2px","0px 16px 24px 2px","0px 17px 26px 2px","0px 18px 28px 2px","0px 19px 29px 2px","0px 20px 31px 3px","0px 21px 33px 3px","0px 22px 35px 3px","0px 23px 36px 3px","0px 24px 38px 3px"],ie=["0px 0px 0px 0px","0px 1px 3px 0px","0px 1px 5px 0px","0px 1px 8px 0px","0px 1px 10px 0px","0px 1px 14px 0px","0px 1px 18px 0px","0px 2px 16px 1px","0px 3px 14px 2px","0px 3px 16px 2px","0px 4px 18px 3px","0px 4px 20px 3px","0px 5px 22px 4px","0px 5px 24px 4px","0px 5px 26px 4px","0px 6px 28px 5px","0px 6px 30px 5px","0px 6px 32px 5px","0px 7px 34px 6px","0px 7px 36px 6px","0px 8px 38px 7px","0px 8px 40px 7px","0px 8px 42px 7px","0px 9px 44px 8px","0px 9px 46px 8px"],le=function(e){return"".concat(ae[e]," rgba(0, 0, 0, ").concat("0.2","), ").concat(oe[e]," rgba(0, 0, 0, ").concat("0.14","), ").concat(ie[e]," rgba(0, 0, 0, ").concat("0.12",") ")},ce=le(0),pe=le(1),ue=le(2),se=le(3),fe=le(4),xe=le(5),de=le(6),me=le(7),he=le(8),ge=le(9),be=le(10),ye=le(11),Ee=le(12),ve=le(13),we=le(14),Oe=le(15),je=le(16),ke=le(17),Se=le(18),Ce=le(19),Te=le(20),ze=le(21),Pe=le(22),Ne=le(23),We=le(24),De=function(e,t){return"".concat(ae[e]," rgba(0, 0, 0, ").concat("0.2","), ").concat(oe[e]," rgba(0, 0, 0, ").concat("0.14","), ").concat(ie[e]," rgba(0, 0, 0, ").concat(t,") ")},Ie={breakpoints:["30em","40em","52em","64em"],space:[0,4,8,16,32,64,128,256,512],fontSizes:[10,12,14,16,18,21,24,36,48,60],fontWeights:[300,500,700],lineHeights:[0,1,1.5,3,8],colors:r,shadows:a},_e=n(19),Me=n(1),qe=n.n(Me),Be=n(26),Le=n.n(Be),He=n(2);function Ae(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Fe=u.default.div.withConfig({displayName:"Box",componentId:"sc-16mih5o-0"})(["boxSizing:border-box;",";",";",";",";",";",";",";",";",";",";",";"],He.width,He.height,He.space,He.fontSize,He.color,He.flex,He.order,He.alignSelf,He.display,He.borders,He.borderColor);Fe.displayName="Box",Fe.propTypes=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){Ae(e,t,n[t])})}return e}({},He.width.propTypes,He.space.propTypes,He.fontSize.propTypes,He.color.propTypes,He.flex.propTypes,He.order.propTypes,He.alignSelf.propTypes);var Re=Fe,Ge=n(164),$e=n.n(Ge),Qe=n(57),Je=n.n(Qe);function Ve(){return(Ve=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var Ke=Je()({is:"h6",fontSize:3,fontWeight:500,lineHeight:1.1,letterSpacing:.25,m:0},function(e){return{color:"".concat(Object(He.themeGet)("colors.primaryText")(e))}},"color","fontSize","fontWeight","letterSpacing","space","textAlign");Ke.displayName="Heading",Ke.h1=function(e){return i.a.createElement(Ke,Ve({},e,{is:"h1",fontSize:9,fontWeight:0,letterSpacing:-1.5}))},Ke.h2=function(e){return i.a.createElement(Ke,Ve({},e,{is:"h2",fontSize:8,fontWeight:0,letterSpacing:-.5}))},Ke.h3=function(e){return i.a.createElement(Ke,Ve({},e,{is:"h3",fontSize:7,fontWeight:0,letterSpacing:0,lineHeight:1.5}))},Ke.h4=function(e){return i.a.createElement(Ke,Ve({},e,{is:"h4",fontSize:6,fontWeight:0,letterSpacing:.25}))},Ke.h5=function(e){return i.a.createElement(Ke,Ve({},e,{is:"h5",fontSize:5,fontWeight:0,letterSpacing:0}))},Ke.h6=function(e){return i.a.createElement(Ke,Ve({},e,{is:"h6",fontSize:4,fontWeight:0,letterSpacing:0,lineHeight:1.2}))};var Ue=Ke;function Xe(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["text-transform: uppercase;"]);return Xe=function(){return e},e}function Ye(){return(Ye=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var Ze=Je()({m:0,lineHeight:1},function(e){return{color:"".concat(Object(He.themeGet)("colors.primaryText")(e))}},"color","fontSize","fontWeight","letterSpacing","lineHeight","space","textAlign");Ze.displayName="Text",Ze.Subtitle1=function(e){return i.a.createElement(Ze,Ye({},e,{fontSize:3,fontWeight:1,letterSpacing:.15}))},Ze.Subtitle2=function(e){return i.a.createElement(Ze,Ye({},e,{fontSize:2,fontWeight:2,letterSpacing:.1}))},Ze.Body1=function(e){return i.a.createElement(Ze,Ye({},e,{fontSize:3,fontWeight:1,letterSpacing:.5}))},Ze.Body2=function(e){return i.a.createElement(Ze,Ye({},e,{fontSize:2,fontWeight:1,letterSpacing:.25}))},Ze.Caption=function(e){return i.a.createElement(Ze,Ye({},e,{fontSize:1,fontWeight:1,letterSpacing:.4}))},Ze.Overline=function(e){return i.a.createElement(tt,Ye({},e,{fontSize:0,fontWeight:1,letterSpacing:1.5}))};var et=Ze,tt=Object(u.default)(Ze)(Xe()),nt=n(20),rt=Object(u.default)(et).withConfig({displayName:"Card__Markdown",componentId:"sc-1t2dtut-0"})(['font-size:0.8em;line-height:1.2em;& ul{padding-left:8px;& li{margin:.5em 0;padding:0;list-style-type:none;line-height:1.2em;}& li:before{content:"- ";margin-left:-7px;}}']),at=function(e){var t=e.heading,n=e.text;return i.a.createElement(Re,{m:[1],width:[1]},i.a.createElement(Re,{height:"100%",bg:Object(nt.a)(.01,"aliceblue")},i.a.createElement(Re,{height:55,p:[2],bg:Object(nt.a)(.12,"lightskyblue")},i.a.createElement(Ue,{color:"white"},t)),i.a.createElement(Re,{p:[2],mt:"-12px"},i.a.createElement(rt,null,i.a.createElement($e.a,{source:n})))))};at.displayName="Card",at.propTypes={heading:qe.a.string,text:qe.a.string};var ot=at;function it(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var lt=Object(u.default)(Re).withConfig({displayName:"Flex",componentId:"sc-1z0xqqz-0"})(["display:flex;"," "," "," ",""],He.flexWrap,He.flexDirection,He.alignItems,He.justifyContent);lt.displayName="Flex",lt.propTypes=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){it(e,t,n[t])})}return e}({},He.flexWrap.propTypes,He.flexDirection.propTypes,He.alignItems.propTypes,He.justifyContent.propTypes);var ct=lt;function pt(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var ut=u.default.div.withConfig({displayName:"Link__LinkWrapper",componentId:"sc-1ykkc7h-0"})(["display:inline-block;& > a{color:",";text-decoration:none;}"],function(e){return e.theme.colors.primaryText}),st=function(e){var t=e.children,n=pt(e,["children"]);return i.a.createElement(ut,null,i.a.createElement(_e.a,n,i.a.createElement(et.Body1,null,t)))};st.displayName="Link";function ft(){var e=dt(["",""]);return ft=function(){return e},e}function xt(){var e=dt(["\n  query Roles($id: String) {\n    roles(id: $id) {\n      id\n      title\n    }\n  }\n"]);return xt=function(){return e},e}function dt(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var mt={dark:Object(nt.a)(.12,"lightskyblue"),light:Object(nt.a)(.01,"aliceblue")},ht=Le()(xt()),gt=Object(u.default)(Re).withConfig({displayName:"Map__HoverBox",componentId:"sc-1ryv7el-0"})(["cursor:pointer;"]),bt=function(e){var t=e.width,n=void 0===t?"30%":t,r=e.text;return i.a.createElement(ct,{justifyContent:"space-between"},i.a.createElement(Re,null),i.a.createElement(Ot,{m:[1],width:n,minHeight:16,fontSize:[4],_css:{textAlign:"center"}},i.a.createElement(Ue.h6,null,r)),i.a.createElement(Re,null))},yt=function(e){var t=e.width,n=void 0===t?"30%":t,r=e.selected,a=e.role,o=e.labels,l=a.id,c=a.title,p=o||r===l?mt.dark:mt.light;return i.a.createElement(ct,{justifyContent:"space-between"},i.a.createElement(Re,null),i.a.createElement(gt,{m:[1],p:[2],width:n,minHeight:16,bg:p,onClick:function(){return Object(_e.c)("/role/".concat(l))}},o?i.a.createElement(Ue.h6,{align:"center",color:"white"},c):null),i.a.createElement(Re,null))},Et=function(e){var t=e.width,n=void 0===t?"50%":t,r=e.selected,a=e.roles,o=e.labels,l=o||r===a[0].id||r===a[1].id?mt.dark:mt.light;return i.a.createElement(ct,{justifyContent:"space-between"},i.a.createElement(Re,null),i.a.createElement(Re,{m:[1],width:n,minHeight:16,bg:l},i.a.createElement(ct,null,i.a.createElement(gt,{p:[2],width:"60%",onClick:function(){return Object(_e.c)("/role/".concat(a[0].id))}},o?i.a.createElement(Ue.h6,{align:"center",color:"white"},a[0].title):null),i.a.createElement(gt,{p:[2],width:"40%",onClick:function(){return Object(_e.c)("/role/".concat(a[1].id))}},o?i.a.createElement(Ue.h6,{align:"center",color:"white"},a[1].title):null))),i.a.createElement(Re,null))},vt=function(e){var t=e.selected,n=e.labels,r=void 0===n||n,a=e.headings,o=void 0!==a&&a;return i.a.createElement(p.Query,{query:ht,variables:{id:"software-engineering"}},function(e){var n=e.loading,a=e.error,l=e.data;if(n)return i.a.createElement(qt,null);if(a)return console.error(a),i.a.createElement(Ct,{title:"Error"},"Check console for details");var c=l.roles;return i.a.createElement(ct,{flexDirection:"column"},o&&i.a.createElement(bt,{text:"Engineers"}),i.a.createElement(yt,{selected:t,role:c[0],labels:r}),i.a.createElement(yt,{selected:t,role:c[1],labels:r}),i.a.createElement(yt,{selected:t,role:c[2],labels:r}),i.a.createElement(Et,{wselectedth:"60%",selected:t,roles:[c[3],c[4]],labels:r}),i.a.createElement(ct,null,i.a.createElement(ct,{width:"50%",flexDirection:"column"},i.a.createElement(yt,{width:"60%",selected:t,role:c[5],labels:r}),i.a.createElement(yt,{width:"60%",selected:t,role:c[6],labels:r}),o&&i.a.createElement(bt,{width:"60%",text:"Individual Contributors"})),i.a.createElement(ct,{width:"50%",flexDirection:"column"},i.a.createElement(yt,{width:"60%",selected:t,role:c[7],labels:r}),i.a.createElement(yt,{width:"60%",selected:t,role:c[8],labels:r}),o&&i.a.createElement(bt,{width:"60%",text:"People Managers"}))))})};vt.displayName="Map",vt.propTypes={selected:qe.a.string};var wt=vt,Ot=Object(u.default)(Re)(ft(),function(e){return e._css}),jt=u.default.div.withConfig({displayName:"MessageBox__Container",componentId:"sc-1rounf1-0"})(["width:100%;height:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;margin-top:-20px;"]),kt=u.default.div.withConfig({displayName:"MessageBox__Box",componentId:"sc-1rounf1-1"})(["height:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;& > span{font-size:24px;font-weight:500;line-height:40px;text-align:center;padding:0 0 10px 0;width:100px;border-bottom:",";}& > p{font-size:14px;font-weight:400;padding:10px 0 0 0;}@media (min-width:768px){height:40px;flex-direction:row;& > span{width:auto;border-bottom:0;border-right:",";padding:0 20px 0 0;}& > p{padding:0 0 0 20px;}}"],function(e){return"1px solid ".concat(e.theme.colors.primaryColor)},function(e){return"1px solid ".concat(e.theme.colors.primaryColor)}),St=function(e){var t=e.title,n=e.children;return i.a.createElement(jt,null,i.a.createElement(kt,null,i.a.createElement("span",null,t),i.a.createElement("p",null,n)))};St.displayName="MessageBox",St.propTypes={title:qe.a.string,children:qe.a.string};var Ct=St,Tt=function(){return i.a.createElement("div",{className:"NotFound"},"404 Not Found")},zt=function(e){var t=e.title,n=e.description,r=e.children;return i.a.createElement(ct,{flexDirection:"column",m:[3]},i.a.createElement(ct,{justifyContent:"space-between"},i.a.createElement(ct,{flexDirection:"column",width:"66%"},i.a.createElement(Re,{m:[2]},i.a.createElement(Ue.h3,null,t)),i.a.createElement(Re,{m:[2]},i.a.createElement(Ue.h6,null,n))),i.a.createElement(Re,{m:[2],width:"33%"})),i.a.createElement(Re,{m:[2]},r))};zt.displayName="Page",zt.propTypes={title:qe.a.string,description:qe.a.string,children:qe.a.node};var Pt=function(e){var t=e.role,n=t.id,r=t.title,a=t.description,o=t.skills.map(function(e){var t=e.title,n=e.details;return i.a.createElement(ot,{key:t,heading:t,text:n})});return i.a.createElement(ct,{flexDirection:"column",my:[3],mx:[5]},i.a.createElement(ct,{justifyContent:"space-between"},i.a.createElement(ct,{flexDirection:"column",width:"66%"},i.a.createElement(Re,{m:[2]},i.a.createElement(Ue.h3,null,r)),i.a.createElement(Re,{mx:[2]},i.a.createElement(Ue.h6,null,a))),i.a.createElement(Re,{mx:[2],width:"33%"},i.a.createElement(wt,{selected:n,labels:!1}))),i.a.createElement(ct,{my:[3],justifyContent:"space-between"},o))};Pt.displayName="Role",Pt.propTypes={role:qe.a.object};var Nt=Pt;function Wt(){return(Wt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function Dt(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  query Skills($id: String) {\n    skills(id: $id) {\n      id\n      title\n      details\n    }\n  }\n"]);return Dt=function(){return e},e}var It=Le()(Dt()),_t=function(e){return i.a.createElement(p.Query,{query:It,variables:{id:"software-engineering"}},function(t){var n=t.loading,r=t.error,a=t.data;if(n)return i.a.createElement(qt,null);if(r)return console.error(r),i.a.createElement(Ct,{title:"Error"},"Check console for details");var o=a.skills.map(function(e){var t=e.title,n=e.details;return i.a.createElement(ot,{key:t,heading:t,text:n})});return i.a.createElement(ct,Wt({justifyContent:"space-between"},e),o)})};_t.displayName="Skills",_t.propTypes={role:qe.a.object};var Mt=_t,qt=u.default.div.withConfig({displayName:"Spinner",componentId:"sc-1gjkk6f-0"})(["&:not(:required){position:absolute;top:50%;left:50%;margin:-12px 0 0 -12px;width:24px;height:24px;border:2px solid ",";border-radius:24px;border-right-color:transparent;display:",";animation:spinner 1125ms infinite linear;}@keyframes spinner{0%{transform:rotate(0deg);}100%{transform:rotate(360deg);}}"],function(e){return e.theme.colors.primaryLightColor},function(e){return e.show?"block":"none"}),Bt=u.default.div.withConfig({displayName:"Values__Circle",componentId:"sc-17fu7eo-0"})(["border-radius:100%;text-align:center;display:block;height:0;width:100%;padding:50% 0;background:",";& > *{color:white;}"],Object(nt.a)(.12,"lightskyblue")),Lt=function(e){var t=e.title,n=e.text;return i.a.createElement(Re,{width:"100%",height:"100%"},i.a.createElement(Bt,null,i.a.createElement(ct,{height:"100%",flexDirection:"column",justifyContent:"space-around",alignItems:"center"},i.a.createElement(Re,null),i.a.createElement(Re,{m:[2]},i.a.createElement(Ue.h6,{color:"white"},t)),i.a.createElement(Re,{mx:[3]},i.a.createElement(et,{fontSize:14,color:"white"},n)),i.a.createElement(Re,null))))},Ht=function(){return i.a.createElement(ct,null,i.a.createElement(Lt,{title:"We're better diverse",text:"We embrace our differences. Great decisions come from fostering diverse perspectives, in a fair and inclusive environment."}),i.a.createElement(Lt,{title:"Open and honest",text:"Our workplace is an open, honest and flexible environment. We operate on trust, get the job done in our own way, and make room for life."}),i.a.createElement(Lt,{title:"One team",text:"We succeed and fail as a team. We empower each other with the skills, context and feedback we need to achieve our full potential. We don’t point fingers when there’s a problem, we work together to understand and solve it."}),i.a.createElement(Lt,{title:"Customers first",text:"We put the music fan at the centre of everything we do. We make their problems our problems. We live to serve."}),i.a.createElement(Lt,{title:"Progress over perfection",text:"JFDI - Just focus and do it is to have all the context you need to make quick, educated decisions. If we break things, we react, learn and improve."}))};Ht.displayName="Values",Ht.propTypes={};function At(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n    query Roles($id: String) {\n        roles(id: $id) {\n            id\n            title\n            description\n            skills\n        }\n    }\n"]);return At=function(){return e},e}var Ft=Le()(At()),Rt=function(e){var t=e.id;return i.a.createElement(p.Query,{query:Ft,variables:{id:"software-engineering"}},function(e){var n=e.loading,r=e.error,a=e.data;if(n)return i.a.createElement(qt,null);if(r)return console.error(r),i.a.createElement(Ct,{title:"Error"},"Check console for details");var o=a.roles.find(function(e){return e.id===t});return i.a.createElement(Nt,{role:o})})};Rt.displayName="Roles",Rt.propTypes={id:qe.a.string};var Gt=Rt,$t=function(){return i.a.createElement(Tt,null)};$t.displayName="NotFound";var Qt=$t,Jt=function(){return i.a.createElement(ct,{flexDirection:"column",my:[3],mx:[5]},i.a.createElement(Re,{width:"66%"},i.a.createElement(Ue.h1,{my:[2]},"Growth Framework"),i.a.createElement(Ue.h6,null,"The purpose of the framework is to help you plan your software engineering career and to provide a clear structure of what is expected in different roles.")),i.a.createElement(Re,{width:"66%",my:[4]},i.a.createElement(Ue.h4,{my:[2]},"Roles and Responsibilities"),i.a.createElement(Ue.h6,null,"The framework builds on shared Engineer steps, with a fork to the Individual Contributor and People Management steps.")),i.a.createElement(ct,null,i.a.createElement(Re,{width:"33%"},i.a.createElement(ct,{flexDirection:"column"},i.a.createElement(Re,null,i.a.createElement(Ue.h6,{my:[2]},i.a.createElement("strong",null,"Engineers")," are focused on delivering value to the business, by building and maintaining software as part of the tech team.")),i.a.createElement(Re,null,i.a.createElement(Ue.h6,{my:[2]},i.a.createElement("strong",null,"Individual Contributors")," are individuals with technical expertise who are focused on growing and honing their technical skills, leading by example, and developing the team.")),i.a.createElement(Re,null,i.a.createElement(Ue.h6,{my:[2]},i.a.createElement("strong",null,"People Managers")," are individuals with development and leadership expertise who are focused on leading and growing the team.")))),i.a.createElement(Re,{width:"66%"},i.a.createElement(wt,{headings:!0}))),i.a.createElement(Re,{width:"66%",my:[4]},i.a.createElement(Ue.h4,{my:[2]},"Titles and Progression"),i.a.createElement(Ue.h6,null,"The role titles (including the numerics) are for you and your manager to keep track of your progress internally, but you are free to use anything sensible for your outward facing title (e.g. conference talks, LinkedIn). Determining when to progress from one role to the next is a discussion that should happen between you and your manager. As a general guide, performing a significant percentage of the responsibilities of the next role for 3-6 months would indicate readiness to step into that role.")),i.a.createElement(Re,{my:[2]},i.a.createElement(Ue.h4,{my:[2]},"Skills"),i.a.createElement(Ue.h6,null,"Each step and responsibilities are described in the context of 7 different skills:"),i.a.createElement(Mt,{my:[2]})))};Jt.displayName="Start",Jt.propTypes={id:qe.a.string};var Vt=Jt,Kt=function(){return i.a.createElement(_e.b,null,i.a.createElement(Vt,{path:"/"}),i.a.createElement(Gt,{path:"/role/:id"}),i.a.createElement(Qt,{default:!0}))};Kt.displayName="AppRouter";var Ut=Kt;function Xt(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  body { margin: 0; background: white; font-family: sans-serif; }\n  * { box-sizing: border-box; }\n  a { color: inherit; text-decoration: none; }\n"]);return Xt=function(){return e},e}var Yt=Object(u.createGlobalStyle)(Xt());c.a.render(i.a.createElement(function(){return i.a.createElement(i.a.Suspense,{fallback:i.a.createElement(qt,null)},i.a.createElement(Yt,null),i.a.createElement(p.ApolloProvider,{client:q},i.a.createElement(u.ThemeProvider,{theme:Ie},i.a.createElement(Ut,null))))},null),document.getElementById("root"))}});
//# sourceMappingURL=app.04dbd828b6520e102a3d.js.map