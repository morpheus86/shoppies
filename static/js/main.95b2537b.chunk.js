(this.webpackJsonpshoppies=this.webpackJsonpshoppies||[]).push([[0],{17:function(e,t,n){},19:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n(1),a=n.n(i),s=n(9),r=n.n(s),o=(n(17),n(6)),l=n.n(o),d=n(10),j=n(11),b=n(7),u=n(8),h=n(4),v=(n(19),function(e){var t=e.movies,n=e.search,i=e.addMovie;e.disable_button;return Object(c.jsx)("div",{children:Object(c.jsxs)("article",{className:"card",children:[Object(c.jsxs)("h3",{children:["Result for ",n]}),t.map((function(e,t){return Object(c.jsxs)("div",{className:"movie",children:[Object(c.jsx)("div",{className:"movie_title",children:e.Title?e.Title+" "+e.Year:e.Error}),Object(c.jsx)("button",{onClick:i.bind(undefined,e),className:!e.Title||e.isDisabled?"not_valid":"valid",children:"Nominate"})]},t)}))]})})}),m=function(e){var t=e.onDelete,n=e.moviesNominated;return Object(c.jsx)("div",{children:Object(c.jsxs)("article",{className:"card",children:[Object(c.jsx)("h3",{children:"Nominated Movies Result"}),n&&n.length>=1?n.map((function(e,n){return Object(c.jsxs)("div",{className:"movie",children:[Object(c.jsx)("div",{className:"movie_title",children:e.Title?e.Title+" "+e.Year:e.Error}),Object(c.jsx)("button",{onClick:t.bind(undefined,e),children:"Remove"})]},n)})):Object(c.jsx)("div",{children:"No movies nominated yet"})]})})};var O=function(){var e=Object(i.useState)(""),t=Object(h.a)(e,2),n=t[0],a=t[1],s=Object(i.useState)([]),r=Object(h.a)(s,2),o=r[0],O=r[1],f=Object(i.useState)([]),x=Object(h.a)(f,2),p=x[0],N=x[1];return Object(i.useEffect)((function(){(function(){var e=Object(d.a)(l.a.mark((function e(){var t,c,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(n.length>0)){e.next=12;break}return e.next=3,fetch("http://www.omdbapi.com/?t=".concat(n,"&apikey=9352fafd"));case 3:return c=e.sent,e.next=6,c.json();case 6:t=e.sent,a=t,i=Object(u.a)(Object(u.a)({},a),{},{isDisabled:!1}),p.filter((function(e){return e.Title+e.Year===i.Title+i.Year&&(i.isDisabled=!0),i})),O([].concat(Object(b.a)(o),[i])),e.next=13;break;case 12:O([]);case 13:case"end":return e.stop()}var a}),e)})));return function(){return e.apply(this,arguments)}})()()}),[n]),Object(c.jsx)("div",{children:Object(c.jsx)("section",{id:"home_container",children:p.length<5?Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)("header",{className:"header",children:"Welcome To The Shoppies"}),Object(c.jsx)("form",{}),Object(c.jsxs)("div",{className:"search_box",children:[Object(c.jsx)("label",{htmlFor:"Movie Title",children:"Movie Title"}),Object(c.jsx)("input",{type:"search",placeholder:"Search Movies",onChange:function(e){a(e.target.value)}})]}),Object(c.jsxs)("div",{className:"movies py-2",children:[Object(c.jsx)(v,{movies:o,search:n,addMovie:function(e){e.isDisabled=!0,N((function(t){var n,c=[].concat(Object(b.a)(t),[e]),i={},a=Object(j.a)(c);try{for(a.s();!(n=a.n()).done;){var s=n.value;i[s.Title+s.Year]||(i[s.Title+s.Year]=s)}}catch(r){a.e(r)}finally{a.f()}return c=Object.values(i)}))}}),Object(c.jsx)(m,{moviesNominated:p,onDelete:function(e){e.isDisabled=!1,N((function(t){return t.filter((function(t){return t.Title!==e.Title}))})),alert("are you certain you want to remove your nomination?")}})]})]}):Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)("header",{className:"header",children:"Welcome To The Shoppies"}),Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:"Congratulation on all your Nominee"}),Object(c.jsx)("div",{className:"img"})]})]})})})},f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,21)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),i(e),a(e),s(e)}))};r.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(O,{})}),document.getElementById("root")),f()}},[[20,1,2]]]);
//# sourceMappingURL=main.95b2537b.chunk.js.map