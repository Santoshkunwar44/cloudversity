(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5405],{40639:function(e,n,t){"use strict";t.d(n,{S:function(){return l}});var i=t(83849),o=t.n(i),s=(t(29901),t(13645)),r=t(63862),a=t(61250),l=function(e){var n=e.compact,t=void 0!==n&&n,i=e.transparent,l=void 0!==i&&i,c=e.onClickUpload,d=void 0===c?function(){return null}:c;return t?(0,a.jsxs)("div",{className:o()("w-full rounded-lg bg-gray-100 px-3 py-2 flex justify-between items-center gap-x-3",{"bg-transparent":l}),children:[(0,a.jsxs)("div",{className:"flex items-center gap-x-1",children:[(0,a.jsx)("div",{className:"text-base text-gray-800",children:"Convert video and image sequence to Lottie"}),(0,a.jsx)("div",{className:"rounded-lg bg-orange-100 text-[10px] text-orange-500 px-2 py-0.5 font-lf-bold flex justify-center items-center leading-4",children:"Beta"})]}),(0,a.jsx)("div",{children:(0,a.jsx)(r.z,{text:"Try it out",width:"w-25",additionalClass:"font-lf-bold whitespace-nowrap px-3 border-gray-500",variant:"tertiary",onClick:d})})]}):(0,a.jsxs)("div",{className:o()("w-full rounded-lg bg-gray-100 px-3 py-2 flex justify-between items-center gap-x-3 mb-6",{"bg-transparent":l}),children:[(0,a.jsx)("div",{className:"w-16 h-16 -m-3 -mr-2",children:(0,a.jsx)(s.V,{loop:!0,autoplay:!0,src:"/lotties/video-to-lottie.json"})}),(0,a.jsxs)("div",{className:"flex-col w-full",children:[(0,a.jsxs)("div",{className:"flex items-center gap-x-1",children:[(0,a.jsx)("div",{className:"text-base text-gray-800 font-lf-bold",children:"Convert video and image sequence to Lottie"}),(0,a.jsx)("div",{className:"rounded-lg bg-orange-100 text-[10px] text-orange-500 px-2 py-0.5 font-lf-bold",children:"Beta"})]}),(0,a.jsx)("div",{className:"text-sm text-gray-500 ",children:"You can now convert MP4, MOV, WebM, WebP, GIF, animated PNG and zipped PNG sequence files into Lottie animations 🎉"})]}),(0,a.jsx)("div",{children:(0,a.jsx)(r.z,{text:"Upload now",width:"w-25",additionalClass:"font-lf-bold whitespace-nowrap px-3 border-gray-500",variant:"tertiary",onClick:d})})]})}},97452:function(e,n,t){"use strict";t.d(n,{o:function(){return a}});t(29901);var i=t(24161),o=t(95610),s=t(26729),r=t(61250),a=function(e){var n=e.children,t=e.contentWrapperCssClasses,a=void 0===t?"flex-grow overflow-hidden":t,l=e.headerControl,c=e.headerWrapperCssClasses,d=void 0===c?"bg-white h-16 flex items-center px-6 border-b border-gray-100 flex-shrink-0":c,u=(0,i.useRecoilValue)(o.qx);return(0,r.jsxs)("div",{"data-onboarding-watch":"create_menu_new_button",className:"absolute inset-0 flex flex-col w-full overflow-y-auto",children:[l&&(0,r.jsx)("div",{className:d,children:l}),u?(0,r.jsx)(s.a,{size:"lg"}):(0,r.jsx)("div",{className:a,children:n})]})}},27467:function(e,n,t){"use strict";t.d(n,{z:function(){return r}});t(29901);var i=t(96312),o=t(61250),s=function(e){var n=e.shortcutKey,t="sm"===e.size?"text-xs h-4 min-w-[1rem] px-0.5":"text-sm h-6 min-w-[1.5rem] px-1";return(0,o.jsx)("span",{className:"flex items-center justify-center bg-gray-500 text-white text-sm rounded-sm ".concat(t),children:n})},r=function(e){var n=e.keys,t=e.metaKey,r=e.separator,a=e.size,l=void 0===a?"sm":a,c=e.width,d=void 0===c?"":c,u=i.Mq?"⌘":"ctrl";return(0,o.jsxs)("div",{className:"flex flex-row items-center space-x-1 ".concat(d),children:[t&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s,{shortcutKey:u,size:l}),r&&(0,o.jsx)("span",{className:"text-gray-900",children:"+"})]}),n.map((function(e,t){return(0,o.jsxs)("div",{children:[(0,o.jsx)(s,{shortcutKey:e,size:l}),r&&!(n.length-1===t)&&(0,o.jsx)("span",{className:"text-gray-900",children:"+"})]},e)}))]})}},51855:function(e,n,t){"use strict";t.r(n),t.d(n,{GridView:function(){return k},default:function(){return N}});var i=t(29901),o=t(24161),s=t(59715),r=t(62295),a=t(46717),l=t(83849),c=t.n(l),d=t(48645),u=t(68760),f=t(79524),p=t(38873),m=t(61250),x=(0,a.zo)("button",{display:"flex",alignItems:"center",justifyContent:"center",width:"100%",height:32,fontSize:14,fontWeight:700,padding:"4px 12px",borderRadius:8,backgroundColor:"#00C1A2",border:"none",color:"#FFF",cursor:"pointer",transition:"all 0.3s ease-in-out","&:hover":{backgroundColor:"#00C1A2"},"&:focus":{outline:"none"},"&:active":{backgroundColor:"#00C1A2"}}),h=function(e){var n=e.workspaceId,t=(0,s.SS)(r.AD.FILE_UPLOAD_LIMIT),o=(0,f.Z)({workspaceId:n}).onClick,a=(0,p.g)(n).planName,l=(0,i.useState)(!1),d=l[0],u=l[1],h=(0,i.useCallback)((function(){u(!0)}),[]),v=(0,i.useCallback)((function(){u(!1)}),[]);return(0,m.jsx)("div",{onMouseEnter:h,onMouseLeave:v,className:c()({"absolute top-0 bottom-0 left-0 right-0 w-full h-full z-10 rounded-md":!0}),children:d&&(0,m.jsxs)("div",{className:"flex flex-col items-center h-full p-5 space-y-5 bg-white border rounded-md border-gray-50 bg-opacity-90",children:[(0,m.jsxs)("div",{className:"text-sm text-gray-700 line-clamp-5",children:["You can only access your ",t.value," most recently created files on your current ",a,". Upgrade to access all your files."]}),(0,m.jsx)(x,{onClick:o,children:"Upgrade"})]})})},v=function(e){var n,t,i,o,s,r,a=e.animation,l=e.disableMenu,c=e.isSelected,f=e.onClick,p=e.onSelectionChange,x=e.selectable,v=e.selectionMode,g=e.showAddToCollection,w=e.showStatus,b=void 0===w||w,j=e.showUpdatedUser,C=e.workspaceId,y=(0,u.Q)(C);return(0,m.jsxs)("div",{className:"relative rounded-md",children:[y.length>0&&!y.includes(a.id)&&(0,m.jsx)(h,{workspaceId:a.project.workspaceId}),(0,m.jsx)(d.K,{scopes:a.animationPermissionScopes,animation:a,backgroundColor:a.backgroundColor,thumbnail:null===(n=a.fileObject)||void 0===n||null===(t=n.thumbnails)||void 0===t||null===(i=t.webp)||void 0===i?void 0:i.medium.url,title:a.name,url:null===(o=a.fileObject)||void 0===o?void 0:o.url,showUpdatedUser:j,username:a.modifiedBy?a.modifiedBy.name:null===(s=a.createdBy)||void 0===s?void 0:s.name,project:null===(r=a.project)||void 0===r?void 0:r.title,date:a.updatedAt,selectable:x,selected:c,onSelectionChange:p,selectionMode:v,showStatus:b,status:a.status,onClick:f,disableMenu:l,showAddToCollection:g,upgradeRequired:y.length>0&&!y.includes(a.id)})]})},g=t(45118),w=t(26729),b=t(69166),j=t(67779),C=t(30525),y=t(79321),k=function(e){var n=e.canLoadMore,t=void 0!==n&&n,s=e.files,r=e.isLoadingMore,a=void 0!==r&&r,l=e.onLoadMore,c=void 0===l?function(){}:l,d=e.onSelectionChange,u=e.onFolderDownloadAllClick,f=e.selectable,p=void 0!==f&&f,x=e.selectedAnimations,h=e.selectionMode,k=e.showUpdatedUser,N=void 0===k||k,I=e.showAddToCollection,_=void 0!==I&&I,L=e.showStatus,S=void 0===L||L,M=e.onItemClick,E=e.workspaceId,A=(0,o.useRecoilValue)(C.Y),U=(0,j.S)({onIntersecting:c}),O=(0,i.useCallback)((function(e){return function(){d&&d(e.id)}}),[d]),P=(0,i.useCallback)((function(e){return function(){return M(e)}}),[M]);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)("div",{className:"grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xxl:grid-cols-5 2xl:grid-cols-5 3xl:grid-cols-6 4xl:grid-cols-7",children:[s.map((function(e){var n,t,i="file-card-".concat(e.id);return(0,y.qR)(e)?(0,m.jsx)(b.A,{onClick:P(e),title:e.name,username:(null===(n=e.modifiedBy)||void 0===n?void 0:n.name)||(null===(t=e.createdBy)||void 0===t?void 0:t.name),date:e.updatedAt,folder:e,filesCount:e.filesCount,scopes:e.animationPermissionScopes,onDownloadAllClick:u,selectable:p,selectionMode:h,onSelectionChange:O(e),isSelected:!!x&&Boolean(x.some((function(n){return n.id===e.id})))},i):(0,y.QR)(e)?(0,m.jsx)(v,{animation:e,showUpdatedUser:N,showStatus:S,selectable:p,isSelected:!!x&&Boolean(x.some((function(n){return n.id===e.id}))),onSelectionChange:O(e),selectionMode:h,onClick:P(e),disableMenu:A>0,showAddToCollection:_,workspaceId:E},i):(0,y.xK)(e)?(0,m.jsx)(g.r,{file:e,onClick:P(e),selectable:p,onSelectionChange:O(e),selected:!!x&&Boolean(x.includes(e)),selectionMode:h}):(0,m.jsx)(m.Fragment,{})})),a&&(0,m.jsx)(w.a,{type:"spinner"})]}),t&&!a&&(0,m.jsx)("span",{ref:U})]})},N=k},79524:function(e,n,t){"use strict";var i=t(89303),o=t(59715),s=t(62295),r=t(29901),a=t(389),l=t(25279),c=t(28875);n.Z=function(e){var n,t,d=e.workspaceId,u=(0,o.SS)(s.AD.FILE_UPLOAD_LIMIT),f=(0,a.aM)({query:c.wG,variables:{workspaceId:d},pause:!d}),p=null!==(n=null===(t=(0,i.Z)(f,1)[0].data)||void 0===t?void 0:t.fileCountByWorkspaceId)&&void 0!==n?n:0,m=u?Math.min(Math.round(p/u.value*100),100):0,x=m<80,h=m>=80&&m<=90,v=m>90,g=function(e){e.stopPropagation(),e.preventDefault(),x?(0,l.Z)({source:s.pj.FILE_UPLOAD_LIMIT,workspaceId:d}):h?(0,l.Z)({source:s.pj.FILE_UPLOAD_LIMIT_ALMOST_REACHED,workspaceId:d}):(0,l.Z)({source:s.pj.FILE_UPLOAD_LIMIT_EXCEEDED,workspaceId:d})};return(0,r.useMemo)((function(){return{fileCount:p,percentage:m,isDefaultState:x,isWarningState:h,isDangerState:v,onClick:g}}),[p,m,x,h,v,g])}},75443:function(e,n,t){"use strict";var i=t(29901),o=t(96312);n.Z=function(){var e=(0,i.useState)(!1),n=e[0],t=e[1],s=function(e){(e.metaKey&&o.Mq||e.ctrlKey&&!o.Mq)&&t(!0)},r=function(e){(!e.metaKey&&o.Mq||!e.ctrlKey&&!o.Mq)&&t(!1)};return(0,i.useEffect)((function(){return document.addEventListener("keydown",s),document.addEventListener("keyup",r),function(){document.removeEventListener("keydown",s),document.removeEventListener("keyup",r)}}),[]),n}},86186:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return T}});var i=t(89303),o=t(55312),s=t(24642),r=t.n(s),a=t(59715),l=t(26766),c=t(62295),d=t(83849),u=t.n(d),f=t(73378),p=t(17172),m=t(46255),x=t(29901),h=t(24161),v=t(389),g=t(97452),w=t(63862),b=t(18732),j=t(26729),C=t(51855),y=t(28875),k=t(97527),N=t(54724),I=t(79321),_=t(54573),L=t(40639),S=t(74536),M=t(27467),E=t(15830),A=t(54767),U=t(91705),O=t(75443),P=t(51638),D=t(52859),F=t(61250),Z="https://creator.lottiefiles.com",R="".concat("https://lottiefiles.com"),W=(0,f.default)((0,o.Z)(r().mark((function e(){return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.e(6533).then(t.bind(t,86533)));case 1:case"end":return e.stop()}}),e)}))),{ssr:!1,loadableGenerated:{webpack:function(){return[86533]},modules:["index.tsx -> @/components/ui/discover-tabs-framer"]}}),B=(0,f.default)((0,o.Z)(r().mark((function e(){return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.e(3302).then(t.bind(t,33302)));case 1:case"end":return e.stop()}}),e)}))),{ssr:!1,loadableGenerated:{webpack:function(){return[33302]},modules:["index.tsx -> @/components/empty-state/creation-tools"]}}),q=(0,f.default)((0,o.Z)(r().mark((function e(){return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Promise.all([t.e(6627),t.e(726),t.e(5313),t.e(2042)]).then(t.bind(t,32042)));case 1:case"end":return e.stop()}}),e)}))),{ssr:!1,loadableGenerated:{webpack:function(){return[32042]},modules:["index.tsx -> @/components/empty-state/featured-animations"]}}),z=(0,f.default)((0,o.Z)(r().mark((function e(){return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Promise.all([t.e(6627),t.e(726),t.e(5313),t.e(718)]).then(t.bind(t,90718)));case 1:case"end":return e.stop()}}),e)}))),{ssr:!1,loadableGenerated:{webpack:function(){return[90718]},modules:["index.tsx -> @/components/empty-state/upload-starter-animation"]}});function T(){var e=(0,h.useSetRecoilState)(N._b),n=(0,P.cF)().activeWorkspace,t=(0,h.useRecoilState)(k.qx),o=(0,i.Z)(t,2),s=o[0],r=o[1],d=(0,x.useState)([]),f=d[0],T=d[1],G=(0,D.QU)(),K=(0,h.useSetRecoilState)(N.mx),V=(0,a.SS)(c.AD.ENABLE_VIDEO_TO_LOTTIE),Y=(0,v.aM)({query:y.t}),H=(0,i.Z)(Y,1)[0];(0,x.useEffect)((function(){if(H.fetching)r(!0);else if(r(!1),H.error);else if(H.data&&H.data.filesRecentlyModified){var e=H.data.filesRecentlyModified;T(e)}}),[H,r]);var Q=(0,x.useMemo)((function(){return(0,F.jsx)(M.z,{keys:["U"],metaKey:!0})}),[]),X=(0,x.useCallback)((function(){window.open("".concat(Z,"/new?workspace=").concat(null==n?void 0:n.id),"_blank")}),[n]),J=(0,O.Z)(),$=(0,x.useCallback)((function(e){var n;if(((0,I.QR)(e)||(0,I.xK)(e))&&(n=e.fileObject.filename.split(".").pop()),"creator"===n)window.open("".concat(Z,"?fileId=").concat(e.id),"_blank");else{var t="/animation/".concat(e.id);J?window.open(t,"_blank"):m.default.push(t)}}),[J]),ee=(0,U.X)();(0,x.useEffect)((function(){G()}),[ee,f,G]);return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(p.default,{children:(0,F.jsx)("title",{children:"LottieFiles Platform"})}),(0,F.jsxs)(g.o,{headerWrapperCssClasses:"flex items-center px-6 pt-6 pb-6 flex-shrink-0",contentWrapperCssClasses:u()("flex-grow px-6  pb-9",{"pt-6":0===f.length}),headerControl:f.length>0&&(0,F.jsx)(b.Z,{variant:"heading-1",gutter:!1,lineHeightClass:"leading-8",darkest:!0,children:"Dashboard"}),children:[V.on&&(0,F.jsx)(L.S,{onClickUpload:function(){return K(!0)}}),(0,F.jsx)("div",{className:"space-y-10",children:s?(0,F.jsx)(j.a,{}):(0,F.jsxs)(F.Fragment,{children:[f.length>0?(0,F.jsxs)("div",{className:"space-y-4",children:[(0,F.jsxs)("div",{className:"flex items-center justify-between",children:[(0,F.jsx)(b.Z,{variant:"heading-3",darkest:!0,children:"Recently modified"}),(0,F.jsxs)("div",{className:"flex gap-2",children:[ee&&(0,F.jsx)("div",{className:"relative","data-onboarding-id":"dashboard-create-animation",children:(0,F.jsx)(w.z,{onClick:X,text:"Create animation",additionalClass:"h-8 rounded-lg",padding:"px-4 py-1",fontClasses:"font-lf-semi-bold",icon:"plus",iconSize:"small"})}),(0,F.jsx)("div",{className:"relative","data-onboarding-id":"dashboard-anim-upload",children:(0,F.jsx)(E.u,{title:"",shortcut:Q,placement:"bottom",children:(0,F.jsx)(w.z,{onClick:function(){return e(!0)},text:"Upload animations",icon:"upload",fontClasses:"font-lf-semi-bold",additionalClass:"h-8 rounded-lg",padding:"px-4 py-1",iconSize:"small"})})})]})]}),(0,F.jsx)("div",{className:"mt-4",children:(0,F.jsx)(C.GridView,{onItemClick:$,workspaceId:null==n?void 0:n.id,files:f,showUpdatedUser:!1})})]}):(0,F.jsx)(z,{}),(0,F.jsxs)("div",{className:"space-y-4",children:[(0,F.jsx)(b.Z,{variant:"heading-3",lineHeightClass:"leading-6",darkest:!0,children:"Begin your motion design journey with these tools"}),(0,F.jsx)(B,{})]}),(0,F.jsxs)("div",{className:"space-y-4",children:[(0,F.jsx)(b.Z,{variant:"heading-3",lineHeightClass:"leading-6",darkest:!0,children:"Discover"}),(0,F.jsx)(W,{})]}),(0,F.jsxs)("div",{className:"space-y-4",children:[(0,F.jsxs)("div",{className:"flex justify-between",children:[(0,F.jsx)(b.Z,{variant:"heading-3",lineHeightClass:"leading-6",darkest:!0,children:"Free community animations"}),(0,F.jsx)(A.r,{href:"".concat(R,"/featured"),target:"_blank",onClick:function(){(0,l.Z9)(new l.Rd("button","view more featured animation"))},children:(0,F.jsxs)("div",{className:"flex items-center cursor-pointer ",style:{color:"#00C1A2"},children:[(0,F.jsx)("span",{className:"mr-2 text-sm font-lf-semi-bold hover:text-teal-400",children:"View more "}),(0,F.jsx)(S.J,{name:"arrow-right",style:{color:"#00C1A2"},small:!0})]})})]}),(0,F.jsx)(q,{})]})]})})]}),(0,F.jsx)(_.Z,{show:!0})]})}},30525:function(e,n,t){"use strict";t.d(n,{Y:function(){return i}});var i=(0,t(24161).atom)({key:"selectedAnimationsCount",default:0})},95610:function(e,n,t){"use strict";t.d(n,{E4:function(){return i.E4},rU:function(){return i.rU},qx:function(){return i.qx},NY:function(){return i.NY}});var i=t(97527);t(19664)},79321:function(e,n,t){"use strict";var i,o,s,r,a,l,c;t.d(n,{GN:function(){return i},Nn:function(){return o},hF:function(){return s},eL:function(){return r},nT:function(){return l},ws:function(){return c},QR:function(){return u},xK:function(){return f},qR:function(){return p}}),function(e){e.DOWNLOAD="download",e.FULL_ACCESS="full_access",e.PUBLIC_DOWNLOAD="public_download",e.PUBLIC_VIEW="public_view",e.VIEW="view"}(i||(i={})),function(e){e.Loop="Loop",e.PlayOnce="PlayOnce"}(o||(o={})),function(e){e.DotLottie="lottie",e.Gif="gif",e.LottieJson="json",e.Mp4="mp4"}(s||(s={})),function(e){e.GIF="gif",e.MOV="mov",e.MP4="mp4",e.WEBM="webm"}(r||(r={})),function(e){e.DOWNLOAD="download",e.FULL_ACCESS="full_access",e.PUBLIC_DOWNLOAD="public_download",e.PUBLIC_VIEW="public_view",e.VIEW="view"}(a||(a={})),function(e){e.Approved="Approved",e.InProgress="InProgress",e.NeedsReview="NeedsReview",e.Shipped="Shipped"}(l||(l={})),function(e){e.Completed="Completed",e.Failed="Failed",e.InProgress="InProgress",e.Pending="Pending"}(c||(c={}));var d=function(e){return e.split(".").pop()};function u(e){if(!e.fileObject)return!1;var n=e.fileObject.filename,t=d(n);return void 0!==t&&["lottie","json"].includes(t)}function f(e){if(!e.fileObject)return!1;var n=e.fileObject.filename,t=d(n);return void 0!==t&&"creator"===t}function p(e){return e&&"Folder"===e.__typename}},43343:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(86186)}])}},function(e){e.O(0,[5471,9837,467,785,532,8361,8620,3069,133,837,4573,4572,9774,2888,179],(function(){return n=43343,e(e.s=n);var n}));var n=e.O();_N_E=n}]);