(this.webpackJsonpmybankingsystem=this.webpackJsonpmybankingsystem||[]).push([[0],{43:function(t,e,c){},44:function(t,e,c){},51:function(t,e,c){},81:function(t,e,c){},82:function(t,e,c){"use strict";c.r(e);var n=c(0),a=c(18),r=c.n(a),s=(c(43),c(17)),i=c(6),o=c(12),j=[{title:"Home",url:"/"},{title:"CustomerList",url:"/list"},{title:"Transfer",url:"/transfer"},{title:"Transaction History",url:"/transaction-history"}],l=(c(44),c(2)),h=function(){var t=Object(n.useState)(!1),e=Object(o.a)(t,2),c=e[0],a=e[1],r=j.map((function(t,e){var c=t.url,n=t.title;return Object(l.jsx)("li",{children:Object(l.jsx)(s.b,{exact:!0,to:c,activeClassName:"active",children:n})},e)}));return Object(l.jsxs)("nav",{children:[Object(l.jsxs)("div",{className:"logo",children:["MGB",Object(l.jsx)("font",{children:"BANK"})]}),Object(l.jsx)("div",{className:"menu-icon",onClick:function(){a(!c)},children:Object(l.jsx)("i",{className:c?"fas fa-times":"fas fa-bars"})}),Object(l.jsx)("ul",{className:c?"menu-list":"menu-list close",children:r})]})},u=c(84),b=c(85),d=c(86),x=c(90);c(51);var O=function(){var t=Object(i.f)();return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(u.a,{fluid:!0,children:Object(l.jsxs)(b.a,{children:[Object(l.jsxs)("h1",{children:["HELLO!",Object(l.jsx)("br",{}),"WELCOME TO MGB BANK"]}),Object(l.jsx)("p",{children:"FASTER AND EASIER WAY TO TRANSFER MONEY TO YOUR LOVED ONES"})]})}),Object(l.jsxs)(d.a,{children:[Object(l.jsxs)(x.a,{onClick:function(){return t.push("/list")},children:[Object(l.jsx)(x.a.Img,{variant:"top",src:"https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"}),Object(l.jsxs)(x.a.Body,{children:[Object(l.jsx)(x.a.Title,{children:"VIEWCUSTOMER"}),Object(l.jsx)(x.a.Text,{children:"VIEW ALL THE DETAILS !"})]})]}),Object(l.jsxs)(x.a,{onClick:function(){return t.push("/transfer")},children:[Object(l.jsx)(x.a.Img,{variant:"top",src:"https://images.unsplash.com/photo-1550565118-3a14e8d0386f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"}),Object(l.jsxs)(x.a.Body,{children:[Object(l.jsx)(x.a.Title,{children:"TRANSFER"}),Object(l.jsx)(x.a.Text,{children:"TRANSFER YOUR MONEY ANYWHERE!"})]})]}),Object(l.jsxs)(x.a,{onClick:function(){return t.push("/transaction-history")},children:[Object(l.jsx)(x.a.Img,{variant:"top",src:"https://images.unsplash.com/photo-1565514158740-064f34bd6cfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"}),Object(l.jsxs)(x.a.Body,{children:[Object(l.jsx)(x.a.Title,{children:"TRANSACTION HISTORY"}),Object(l.jsx)(x.a.Text,{children:"YOUR VALUABLE TRANSACTIONS!"})]})]})]})]})},f=c(13),p=c.n(f),m=c(15),v=c(16),g=c.n(v),T=c(87),y=c(91),E=function(){var t=Object(n.useState)([]),e=Object(o.a)(t,2),c=e[0],a=e[1],r=Object(i.f)();Object(n.useEffect)((function(){s()}),[]);var s=function(){var t=Object(m.a)(p.a.mark((function t(){var e;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,"http://localhost:4000/customer/get-customers",t.next=4,g.a.get("http://localhost:4000/customer/get-customers");case 4:e=t.sent,console.log(e.data.customers),e&&e.data&&a(e.data.customers),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(){return t.apply(this,arguments)}}(),j=function(t){r.push({pathname:"/transfer",state:{acc_no:t}})};return Object(l.jsx)(b.a,{children:Object(l.jsxs)(T.a,{striped:!0,bordered:!0,hover:!0,children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:"id"}),Object(l.jsx)("th",{children:"fname"}),Object(l.jsx)("th",{children:"lname"}),Object(l.jsx)("th",{children:"emailid"}),Object(l.jsx)("th",{children:"acc_balance"}),Object(l.jsx)("th",{children:"acc_no"}),Object(l.jsx)("th",{children:"Option"})]})}),Object(l.jsx)("tbody",{children:c?c.map((function(t,e){var c=t.fname,n=t.lname,a=t.email,r=t.acc_balance,s=t.acc_no,i=t._id;return Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:e+1}),Object(l.jsx)("td",{children:c}),Object(l.jsx)("td",{children:n}),Object(l.jsx)("td",{children:a}),Object(l.jsx)("td",{children:r}),Object(l.jsx)("td",{children:s}),Object(l.jsx)("td",{children:Object(l.jsx)(y.a,{onClick:j.bind(undefined,s),children:"Transfer"})})]},i)})):null})]})})},A=c(88),w=c(89),N=c(27),S=c(92),k=function(t){var e=Object(n.useState)([]),c=Object(o.a)(e,2),a=c[0],r=c[1],s=Object(n.useState)(),i=Object(o.a)(s,2),j=i[0],h=i[1],u=Object(n.useState)(),d=Object(o.a)(u,2),x=d[0],O=d[1],f=Object(n.useState)(),v=Object(o.a)(f,2),T=v[0],E=v[1];Object(n.useEffect)((function(){(function(){var t=Object(m.a)(p.a.mark((function t(){var e,c;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,"http://localhost:4000/customer/get-customers",t.next=4,g.a.get("http://localhost:4000/customer/get-customers");case 4:e=t.sent,console.log(e.data.customers),c=e.data.customers.map((function(t){return{value:t.acc_no,label:t.acc_no}})),r(c),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(){return t.apply(this,arguments)}})()()}),[]);var k=function(){var t=Object(m.a)(p.a.mark((function t(){var e,c,n,a;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=j.value,c=x.value,n=T,t.prev=3,t.next=6,g.a.post("http://localhost:4000/transactions/transfer",{from_account:e,to_account:c,transaction_amount:n});case 6:a=t.sent,alert(a.data.message),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(3),alert(t.t0);case 13:case"end":return t.stop()}}),t,null,[[3,10]])})));return function(){return t.apply(this,arguments)}}();return Object(l.jsxs)(b.a,{style:{marginTop:"30px"},children:[Object(l.jsxs)(A.a,{children:[Object(l.jsx)(w.a,{children:Object(l.jsx)(N.a,{value:j,onChange:function(t){h(t)},options:a,placeholder:"Transfer Money from User"})}),Object(l.jsx)(w.a,{children:Object(l.jsx)(N.a,{value:x,onChange:function(t){O(t)},options:a,placeholder:"Transfer Money to User"})}),Object(l.jsx)(w.a,{children:Object(l.jsx)(S.a,{onChange:function(t){return E(t.target.value)},placeholder:"Enter Amount"})})]}),Object(l.jsx)(A.a,{style:{marginTop:"30px"},children:Object(l.jsx)(w.a,{className:"d-flex justify-content-center",children:Object(l.jsx)(y.a,{onClick:k,children:"Transfer"})})})]})};c(81);var M=function(){var t=Object(n.useState)([]),e=Object(o.a)(t,2),c=e[0],a=e[1];Object(n.useEffect)((function(){r()}),[]);var r=function(){var t=Object(m.a)(p.a.mark((function t(){var e;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,"http://localhost:4000/transactions/transac-history",t.next=4,g.a.get("http://localhost:4000/transactions/transac-history");case 4:e=t.sent,a(e.data.transactions),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}();return Object(l.jsx)(b.a,{children:Object(l.jsxs)(T.a,{striped:!0,bordered:!0,hover:!0,children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:"id"}),Object(l.jsx)("th",{children:"transaction from User"}),Object(l.jsx)("th",{children:"transaction to User"}),Object(l.jsx)("th",{children:"transaction Amount"}),Object(l.jsx)("th",{children:"transaction Id"})]})}),Object(l.jsx)("tbody",{children:c?c.map((function(t,e){var c=t._id,n=t.transac_from_user,a=t.transac_to_user,r=t.transac_amount;return Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:e+1}),Object(l.jsx)("td",{children:n}),Object(l.jsx)("td",{children:a}),Object(l.jsx)("td",{children:r}),Object(l.jsx)("td",{children:c})]},c)})):null})]})})};var _=function(){return Object(l.jsx)("div",{className:"App",children:Object(l.jsxs)(s.a,{children:[Object(l.jsx)(h,{}),Object(l.jsxs)(i.c,{children:[Object(l.jsx)(i.a,{path:"/",exact:!0,component:O}),Object(l.jsx)(i.a,{path:"/list",exact:!0,component:E}),Object(l.jsx)(i.a,{path:"/transfer",exact:!0,component:k}),Object(l.jsx)(i.a,{path:"/transaction-history",exact:!0,component:M})]})]})})};r.a.render(Object(l.jsx)(_,{}),document.getElementById("root"))}},[[82,1,2]]]);
//# sourceMappingURL=main.c8bc66ea.chunk.js.map