(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[26],{12:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard",function(){return r(2314)}])},2314:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return g}});var n=r(5893),a=r(7294),s=r(5666),l=r.n(s),i=r(5144),o=r(3793),c=function(e){var t=e.userInfo;return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("img",{src:t.photoUrl,className:" rounded-full border-3 border-black dark:border-white w-[250px] h-[250px] mx-auto mb-3"})})},u=function(e){var t=e.userInfo;return(0,n.jsxs)("div",{className:"lg:w-1/2 ",children:[(0,n.jsx)("h1",{className:"display-5 dark:text-white text-center mb-5 ",children:t.username}),(0,n.jsx)("h1",{className:"text-2xl text-muted mb-5 text-center",children:t.email}),(0,n.jsxs)("h1",{className:"text-4xl mb-5 text-center dark:text-white ",children:["Total time:",(t.totalTime/60).toFixed(1)," hr"]}),(0,n.jsxs)("h1",{className:"text-4xl mb-5 text-center dark:text-white ",children:["Complete ",t.totalTask," tasks"]})]})},d=r(5538);function f(e,t,r,n,a,s,l){try{var i=e[s](l),o=i.value}catch(c){return void r(c)}i.done?t(o):Promise.resolve(o).then(n,a)}var x=function(){var e,t=(0,a.useContext)(i._).state.user,r=(0,a.useState)({}),s=r[0],x=r[1];return(0,a.useEffect)((e=l().mark((function e(){var r;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=12;break}return e.prev=1,e.next=4,o.Z.userInfo(t);case 4:r=e.sent,x(r.data.user),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0),d.Am.error((0,n.jsxs)("div",{children:["Something goes wrong!",(0,n.jsx)("br",{}),"Please try again later!"]}));case 12:case"end":return e.stop()}}),e,null,[[1,8]])})),function(){var t=this,r=arguments;return new Promise((function(n,a){var s=e.apply(t,r);function l(e){f(s,n,a,l,i,"next",e)}function i(e){f(s,n,a,l,i,"throw",e)}l(void 0)}))}),[]),(0,n.jsxs)("div",{className:"relative z-10 dark:bg-black bg-[#fff] border-1 rounded-3xl rounded-tl-none dark:border-white flex flex-col lg:flex-row h-full items-center p-4 justify-between shadow-xl",children:[s&&(0,n.jsx)(c,{userInfo:s}),s&&(0,n.jsx)(u,{userInfo:s})]})},h=r(9633);function b(e,t,r,n,a,s,l){try{var i=e[s](l),o=i.value}catch(c){return void r(c)}i.done?t(o):Promise.resolve(o).then(n,a)}var v=function(){var e,t=(0,a.useContext)(i._).state.user,r=(0,a.useState)(1),s=r[0];r[1];return(0,a.useEffect)((e=l().mark((function e(){var r,a,i,c,u;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.getTasks(t,s);case 2:r=e.sent;try{for(a=r.data.tasks,i=[],c=0;c<7;c++)i.push(a[c]);(u=h.Ys("svg.graph")).selectAll("rect").data(i).enter().append("rect").attr("width","10%").attr("x",(function(e,t){return 15*t+"%"})).attr("y",(function(e){return 30+256*(10-e.length)/10})).attr("height",(function(e){return e.length/10*256})).attr("class",(function(e){return e.length>=3?"fill-green":e.length>=2?"fill-orange-500":"fill-red-600"})),u.selectAll("text").data(i).enter().append("text").text((function(e,t){return 6==t?"Ing":0===e.length?"-":e.length})).attr("text-anchor","middle").attr("fill",(function(e){return 1==e.length?"red":e.length>=3?"green":"orange"})).attr("x",(function(e,t){return 5+15*t+"%"})).attr("y",30).attr("font-size","24px").attr("font-family","Noto Sans TC"),u.selectAll("text.time").data(i).enter().append("text").text((function(e,t){return 6==t?"-":e.length?e.map((function(e){return e.time})).reduce((function(e,t){return e+t}))+"m":"-"})).attr("text-anchor","middle").attr("fill",(function(e){return 1==e.length?"red":e.length>=3?"green":"orange"})).attr("x",(function(e,t){return 5+15*t+"%"})).attr("y",48).attr("font-size","16px").attr("font-family","Noto Sans TC")}catch(l){console.log(l),d.Am.error((0,n.jsxs)("div",{children:["Something happened!",(0,n.jsx)("br",{}),"Please try again later"]}))}case 4:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(n,a){var s=e.apply(t,r);function l(e){b(s,n,a,l,i,"next",e)}function i(e){b(s,n,a,l,i,"throw",e)}l(void 0)}))})),(0,n.jsxs)("div",{className:" dark:bg-black bg-[#fff] border-1 rounded-3xl rounded-tl-none dark:border-white h-full items-center p-2 lg:p-5 justify-between shadow-xl",children:[(0,n.jsx)("h1",{className:"display-6 text-center dark:text-white mb-3",children:"Week Complete Task"}),(0,n.jsx)("svg",{className:"graph w-full lg:w-4/5 h-72 mx-auto "})]})},m=function(){var e=(0,a.useState)("user"),t=e[0],r=e[1];return(0,n.jsxs)("div",{className:"w-full lg:w-2/3 mx-auto mt-5 ",children:[(0,n.jsx)("nav",{children:(0,n.jsxs)("div",{className:"nav nav-tabs !border-b-0 ",id:"nav-tab",role:"tablist",children:[(0,n.jsx)("button",{className:"nav-link  "+("user"===t?"active dark:!bg-black  dark:border-b-0  ":""),id:"nav-user-tab","data-bs-toggle":"tab","data-bs-target":"#nav-user",type:"button",role:"tab","aria-controls":"nav-user","aria-selected":"true",onClick:function(){return r("user")},children:(0,n.jsx)("i",{className:"bi bi-person-circle text-3xl "})}),(0,n.jsx)("button",{className:"nav-link  "+("task"===t?"active dark:!bg-black dark:border-b-0 ":""),id:"nav-task-tab","data-bs-toggle":"tab","data-bs-target":"#nav-task",type:"button",role:"tab","aria-controls":"nav-task","aria-selected":"false",onClick:function(){return r("task")},children:(0,n.jsx)("i",{className:"bi bi-clipboard-data text-3xl"})})]})}),(0,n.jsxs)("div",{className:"tab-content h-full",id:"nav-tabContent",children:[(0,n.jsx)("div",{className:"tab-pane fade h-full "+("user"===t?"show active":""),id:"nav-user",role:"tabpanel","aria-labelledby":"nav-home-tab",children:(0,n.jsx)(x,{})}),(0,n.jsx)("div",{className:"tab-pane fade h-full "+("task"===t?"show active":""),id:"nav-task",role:"tabpanel","aria-labelledby":"nav-task-tab",children:(0,n.jsx)(v,{})})]})]})},g=function(){var e=(0,a.useContext)(i._).authHandler;return(0,a.useEffect)(e,[]),(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(m,{})})}}},function(e){e.O(0,[633,774,888,179],(function(){return t=12,e(e.s=t);var t}));var t=e.O();_N_E=t}]);