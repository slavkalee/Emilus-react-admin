(this.webpackJsonpemilus=this.webpackJsonpemilus||[]).push([[10],{453:function(e,t,c){"use strict";var s=c(455),n=c.n(s),a=c(19),r=c(456).a(),i=c(30),o=c(263),l=n.a.create({baseURL:a.a,timeout:6e4}),d="/auth/login";l.interceptors.request.use((function(e){var t=localStorage.getItem(i.b);return t&&(e.headers.authorization=t),t||e.headers["public-request"]||(r.push(d),window.location.reload()),e}),(function(e){o.a.error({message:"Error"}),Promise.reject(e)})),l.interceptors.response.use((function(e){return e.data}),(function(e){var t={message:""};return 400!==e.response.status&&403!==e.response.status||(t.message="Authentication Fail",t.description="Please login again",localStorage.removeItem(i.b),r.push(d),window.location.reload()),404===e.response.status&&(t.message="Not Found"),500===e.response.status&&(t.message="Internal Server Error"),508===e.response.status&&(t.message="Time Out"),o.a.error(t),Promise.reject(e)}));var j=l,h={login:function(e){return j({url:"/posts",method:"post",headers:{"public-request":"true"},data:e})},signUp:function(e){return j({url:"/auth/signup",method:"post",headers:{"public-request":"true"},data:e})}};t.a=h},458:function(e,t,c){"use strict";var s=c(2),n=c(0),a=c.n(n),r=c(38),i=c(460),o=c(110),l=c(514),d=c(511),j=c(428),h=c(442),u=c(518),m=function(){return Object(s.jsx)("svg",{viewBox:"0 0 1024 1024",width:"1em",height:"1em",fill:"currentColor",children:Object(s.jsxs)("g",{children:[Object(s.jsx)("path",{fill:"#59C36A",d:"M827.301,875.968c-84.521,71.388-194.169,116.693-313.528,116.693c-177.609,0-333.52-97.848-418.041-240.62\r l31.646-145.858l140.255-26.039c32.553,105.078,130.779,182.178,246.141,182.178c55.964,0,107.937-17.703,150.767-49.112\r l134.777,20.558L827.301,875.968z"}),Object(s.jsx)("path",{fill:"#00A66C",d:"M827.301,875.968l-27.984-142.201l-134.777-20.558c-42.83,31.409-94.803,49.112-150.767,49.112v230.34\r C633.132,992.661,742.779,947.355,827.301,875.968z"}),Object(s.jsx)("g",{id:"Connected_Home_1_",children:Object(s.jsx)("g",{children:Object(s.jsx)("g",{children:Object(s.jsx)("g",{children:Object(s.jsx)("path",{fill:"#FFDA2D",d:"M256.781,505.331c0,26.267,3.998,51.396,10.851,74.813l-171.9,171.897\r c-42.83-71.957-69.29-156.48-69.29-246.71c0-90.233,26.46-174.754,69.29-246.711l137.965,23.743l33.936,148.154\r C260.779,453.932,256.781,479.06,256.781,505.331L256.781,505.331z"})})})})}),Object(s.jsx)("path",{fill:"#4086F4",d:"M1001.103,505.331c0,148.48-68.719,281.547-173.802,370.637L664.539,713.209\r c33.121-23.988,61.107-55.971,79.384-93.66h-230.15c-15.993,0-28.556-12.567-28.556-28.554V419.666\r c0-15.99,12.563-28.554,28.556-28.554h450.78c13.707,0,25.698,9.708,27.983,23.412\r C998.247,444.225,1001.103,475.063,1001.103,505.331L1001.103,505.331z"}),Object(s.jsx)("path",{fill:"#4175DF",d:"M743.924,619.549c-18.275,37.689-46.264,69.672-79.382,93.66l162.759,162.759\r c105.083-89.09,173.802-222.153,173.802-370.637c0-30.269-2.855-61.106-8.567-90.807c-2.284-13.704-14.278-23.412-27.984-23.412\r H513.772v228.437H743.924z"}),Object(s.jsx)("path",{fill:"#FF641A",d:"M835.297,154.107c0.571,7.996-2.855,15.422-7.996,21.131L705.086,296.881\r c-9.704,10.278-25.694,11.421-37.118,2.855c-45.119-33.693-98.231-51.396-154.195-51.396\r c-115.361,0-213.588,77.095-246.141,182.178L95.731,258.62C180.253,115.848,336.163,18,513.772,18\r c113.647,0,224.439,41.88,311.244,114.978C831.298,138.119,834.723,146.112,835.297,154.107L835.297,154.107z"}),Object(s.jsx)("path",{fill:"#F03800",d:"M667.966,299.736c11.422,8.567,27.411,7.423,37.119-2.855l122.214-121.643\r c5.143-5.709,8.569-13.133,7.996-21.131c-0.575-7.997-3.999-15.988-10.279-21.13C738.212,59.88,627.42,18,513.772,18v230.34\r C569.736,248.34,622.849,266.043,667.966,299.736z"})]})})},b=function(){return Object(s.jsx)("svg",{viewBox:"0 0 1024 1024",width:"1em",height:"1em",fill:"currentColor",children:Object(s.jsxs)("g",{children:[Object(s.jsx)("path",{fill:"#4A7AFF",d:"M1015.363,506.525c0,279.749-226.775,506.524-506.525,506.524c-279.749,0-506.524-226.775-506.524-506.524\r C2.313,226.775,229.089,0,508.838,0C788.588,0,1015.363,226.775,1015.363,506.525z"}),Object(s.jsx)("path",{fill:"#FFFFFF",d:"M663.688,149.015v114.697c0,0-131.686-19.113-131.686,65.843v84.957h118.941L636.08,544.072H532.002v337.709\r H400.316V544.072l-112.572-2.126V414.512H398.19V316.81c0,0-7.288-145.343,135.938-172.038\r C593.602,133.68,663.688,149.015,663.688,149.015z"}),Object(s.jsx)("path",{fill:"#DCE1EB",d:"M663.688,263.712V149.015c0,0-70.086-15.335-129.56-4.243c-9.291,1.73-17.932,3.973-25.993,6.623v730.387\r h23.867V544.072h104.07l14.871-129.561H532.002c0,0,0,0,0-84.957C532.002,244.599,663.688,263.712,663.688,263.712z"})]})})},x=c(5),g=c(22),p=c(6),O=c.n(p),f=c(64),v=n.forwardRef((function(e,t){var c=e.className,s=e.component,a=e.viewBox,r=e.spin,i=e.rotate,o=e.tabIndex,l=e.onClick,d=e.children,j=Object(g.a)(e,["className","component","viewBox","spin","rotate","tabIndex","onClick","children"]);Object(f.g)(Boolean(s||d),"Should have `component` prop or `children`."),Object(f.f)();var h=O()("anticon",c),u=O()({"anticon-spin":!!r}),m=i?{msTransform:"rotate(".concat(i,"deg)"),transform:"rotate(".concat(i,"deg)")}:void 0,b=Object(x.a)(Object(x.a)({},f.e),{},{className:u,style:m,viewBox:a});a||delete b.viewBox;var p=o;return void 0===p&&l&&(p=-1),n.createElement("span",Object.assign({role:"img"},j,{ref:t,tabIndex:p,onClick:l,className:h}),s?n.createElement(s,Object.assign({},b),d):d?(Object(f.g)(Boolean(a)||1===n.Children.count(d)&&n.isValidElement(d)&&"use"===n.Children.only(d).type,"Make sure that you provide correct `viewBox` prop (default `0 0 1024 1024`) to the icon."),n.createElement("svg",Object.assign({},b,{viewBox:a}),d)):null)}));v.displayName="AntdIcon";var w=v,y=a.a.forwardRef((function(e,t){return Object(s.jsx)(w,{component:e.svg,className:e.className})})),C=c(52),N=c(453),F=c(42),k=c(457),P=function(e){var t=Object(F.g)(),c=e.otherSignIn,a=e.showForgetPassword,r=e.hideAuthMessage,x=e.onForgetPasswordClick,g=e.showLoading,p=e.extra,O=e.loading,f=e.showMessage,v=e.message,w=e.authenticated,C=e.showAuthMessage,P=e.token,M=e.redirect,I=e.allowRedirect;Object(n.useEffect)((function(){null!==P&&I&&t.push(M),f&&setTimeout((function(){r()}),3e3)}));var z=Object(s.jsxs)("div",{children:[Object(s.jsx)(i.a,{children:Object(s.jsx)("span",{className:"text-muted font-size-base font-weight-normal",children:"or connect with"})}),Object(s.jsxs)("div",{className:"d-flex justify-content-center",children:[Object(s.jsx)(o.a,{onClick:function(){g()},className:"mr-2",disabled:O,icon:Object(s.jsx)(y,{svg:m}),children:"Google"}),Object(s.jsx)(o.a,{onClick:function(){g()},icon:Object(s.jsx)(y,{svg:b}),disabled:O,children:"Facebook"})]})]});return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(k.a.div,{initial:{opacity:0,marginBottom:0},animate:{opacity:f?1:0,marginBottom:f?20:0},children:Object(s.jsx)(l.a,{type:"error",showIcon:!0,message:v})}),Object(s.jsxs)(d.a,{layout:"vertical",name:"login-form",onFinish:function(e){g();N.a.login(e).then((function(e){w("fakeToken")})).then((function(e){C(e)}))},children:[Object(s.jsx)(d.a.Item,{name:"email",label:"Email",rules:[{required:!0,message:"Please input your email"},{type:"email",message:"Please enter a validate email!"}],children:Object(s.jsx)(j.a,{prefix:Object(s.jsx)(h.a,{className:"text-primary"})})}),Object(s.jsx)(d.a.Item,{name:"password",label:Object(s.jsxs)("div",{className:"".concat(a?"d-flex justify-content-between w-100 align-items-center":""),children:[Object(s.jsx)("span",{children:"Password"}),a&&Object(s.jsx)("span",{onClick:function(){return x},className:"cursor-pointer font-size-sm font-weight-normal text-muted",children:"Forget Password?"})]}),rules:[{required:!0,message:"Please input your password"}],children:Object(s.jsx)(j.a.Password,{prefix:Object(s.jsx)(u.a,{className:"text-primary"})})}),Object(s.jsx)(d.a.Item,{children:Object(s.jsx)(o.a,{type:"primary",htmlType:"submit",block:!0,loading:O,children:"Sign In"})}),c?z:null,p]})]})};P.defaultProps={otherSignIn:!0,showForgetPassword:!1};var M={showAuthMessage:C.c,showLoading:C.d,hideAuthMessage:C.b,authenticated:C.a};t.a=Object(r.b)((function(e){var t=e.auth;return{loading:t.loading,message:t.message,showMessage:t.showMessage,token:t.token,redirect:t.redirect}}),M)(P)},460:function(e,t,c){"use strict";var s=c(4),n=c(3),a=c(0),r=c(6),i=c.n(r),o=c(69),l=function(e,t){var c={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(c[s]=e[s]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(s=Object.getOwnPropertySymbols(e);n<s.length;n++)t.indexOf(s[n])<0&&Object.prototype.propertyIsEnumerable.call(e,s[n])&&(c[s[n]]=e[s[n]])}return c};t.a=function(e){return a.createElement(o.a,null,(function(t){var c,r=t.getPrefixCls,o=t.direction,d=e.prefixCls,j=e.type,h=void 0===j?"horizontal":j,u=e.orientation,m=void 0===u?"center":u,b=e.className,x=e.children,g=e.dashed,p=e.plain,O=l(e,["prefixCls","type","orientation","className","children","dashed","plain"]),f=r("divider",d),v=m.length>0?"-".concat(m):m,w=!!x,y=i()(f,"".concat(f,"-").concat(h),(c={},Object(n.a)(c,"".concat(f,"-with-text"),w),Object(n.a)(c,"".concat(f,"-with-text").concat(v),w),Object(n.a)(c,"".concat(f,"-dashed"),!!g),Object(n.a)(c,"".concat(f,"-plain"),!!p),Object(n.a)(c,"".concat(f,"-rtl"),"rtl"===o),c),b);return a.createElement("div",Object(s.a)({className:y},O,{role:"separator"}),x&&a.createElement("span",{className:"".concat(f,"-inner-text")},x))}))}},503:function(e,t,c){"use strict";c.r(t);var s=c(15),n=c(2),a=(c(0),c(458)),r=c(461),i=c(462),o=c(38),l={backgroundImage:"url(".concat("/img/others/img-17.jpg",")"),backgroundRepeat:"no-repeat",backgroundSize:"cover"};t.default=function(e){var t=Object(o.d)((function(e){return e.theme.currentTheme}));return Object(n.jsx)("div",{className:"h-100 ".concat("light"===t?"bg-white":""),children:Object(n.jsxs)(r.a,{justify:"center",className:"align-items-stretch h-100",children:[Object(n.jsx)(i.a,{xs:20,sm:20,md:24,lg:16,children:Object(n.jsx)("div",{className:"container d-flex flex-column justify-content-center h-100",children:Object(n.jsx)(r.a,{justify:"center",children:Object(n.jsxs)(i.a,{xs:24,sm:24,md:20,lg:12,xl:8,children:[Object(n.jsx)("h1",{children:"Sign In"}),Object(n.jsxs)("p",{children:["Don't have an account yet? ",Object(n.jsx)("a",{href:"/auth/register-2",children:"Sign Up"})]}),Object(n.jsx)("div",{className:"mt-4",children:Object(n.jsx)(a.a,Object(s.a)({},e))})]})})})}),Object(n.jsx)(i.a,{xs:0,sm:0,md:0,lg:8,children:Object(n.jsxs)("div",{className:"d-flex flex-column justify-content-between h-100 px-4",style:l,children:[Object(n.jsx)("div",{className:"text-right",children:Object(n.jsx)("img",{src:"/img/logo-white.png",alt:"logo"})}),Object(n.jsx)(r.a,{justify:"center",children:Object(n.jsxs)(i.a,{xs:0,sm:0,md:0,lg:20,children:[Object(n.jsx)("img",{className:"img-fluid mb-5",src:"/img/others/img-18.png",alt:""}),Object(n.jsx)("h1",{className:"text-white",children:"Welcome to emilus"}),Object(n.jsx)("p",{className:"text-white",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ullamcorper nisl erat, vel convallis elit fermentum pellentesque."})]})}),Object(n.jsx)("div",{className:"d-flex justify-content-end pb-4",children:Object(n.jsxs)("div",{children:[Object(n.jsx)("a",{className:"text-white",href:"/#",onClick:function(e){return e.preventDefault()},children:"Term & Conditions"}),Object(n.jsx)("span",{className:"mx-2 text-white",children:" | "}),Object(n.jsx)("a",{className:"text-white",href:"/#",onClick:function(e){return e.preventDefault()},children:"Privacy & Policy"})]})})]})})]})})}}}]);
//# sourceMappingURL=10.9413c466.chunk.js.map