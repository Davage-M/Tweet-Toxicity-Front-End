(this.webpackJsonptweet_toxicity_web_front=this.webpackJsonptweet_toxicity_web_front||[]).push([[0],{36:function(e,t,a){},41:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),r=a(22),c=a.n(r),i=a(15),l=a(12),j=a.n(l),o=a(14),h=a(23),d=a(24),b=a(13),x=a(29),u=a(27),O=a(16),p=a(21),g=a(28),f=a(8),v=a(9),w=a(26);function y(e,t){return m.apply(this,arguments)}function m(){return(m=Object(o.a)(j.a.mark((function e(t,a){var n,s,r,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=/^[a-z0-9_]{4,15}$/i,s=new AbortController,e.prev=2,t.match(n)){e.next=5;break}throw new Error("Invalid Username");case 5:return e.next=7,fetch("https://tweet-toxicity-api.herokuapp.com/search_tweets?twitter_handle=".concat(t,"&pagination=").concat(a),{signal:s.signal});case 7:return r=e.sent,e.next=10,r.json();case 10:if(c=e.sent,r.ok){e.next=13;break}throw new Error(c.error);case 13:return e.abrupt("return",c);case 16:return e.prev=16,e.t0=e.catch(2),e.abrupt("return",e.t0.message);case 19:case"end":return e.stop()}}),e,null,[[2,16]])})))).apply(this,arguments)}function T(e){var t=[];console.log(e);var a,n=Object(i.a)(e);try{for(n.s();!(a=n.n()).done;){var s=a.value;for(var r in s.label)if(s.label[r]){t.push(s);break}}}catch(c){n.e(c)}finally{n.f()}try{if(!(t.length>0))throw new Error("User has no flagged tweets");return console.log(t),t}catch(l){return l.message}}var k=a(11),C=a(25),D=a(0),I=a(2);function A(e){return Object(I.jsx)(I.Fragment,{children:Object(I.jsx)(D.b.Provider,{value:{color:e.color,size:20},children:Object(I.jsx)(C.a,{})})})}var S=a(10);function P(e){return e.error?Object(I.jsx)(I.Fragment,{children:Object(I.jsxs)(k.a,{bg:"danger",text:"white",className:"text-center",children:[Object(I.jsx)(k.a.Header,{children:"Error"}),Object(I.jsx)(k.a.Title,{children:e.errorMessage})]})}):Object(I.jsx)(I.Fragment,{children:Object(I.jsxs)(k.a,{className:"text-center",children:[Object(I.jsx)(k.a.Title,{children:"Analysed Tweet"}),Object(I.jsx)(k.a.Title,{children:Object(I.jsx)("span",{id:"tweets",children:e.text+""})}),Object(I.jsxs)(k.a.Body,{children:[Object(I.jsxs)(S.a,{children:[Object(I.jsx)(S.a.Item,{children:Object(I.jsxs)("span",{children:["Identity Attack: ",e.label.identity_attack?Object(I.jsx)(A,{color:"red"}):null]})}),Object(I.jsx)(S.a.Item,{children:Object(I.jsxs)("span",{children:["Insult: ",e.label.insult?Object(I.jsx)(A,{color:"red"}):null]})}),Object(I.jsx)(S.a.Item,{children:Object(I.jsxs)("span",{children:["Obscene: ",e.label.obscene?Object(I.jsx)(A,{color:"red"}):null]})}),Object(I.jsx)(S.a.Item,{children:Object(I.jsxs)("span",{children:["Severe Toxicity: ",e.label.severe_toxicity?Object(I.jsx)(A,{color:"red"}):null]})}),Object(I.jsx)(S.a.Item,{children:Object(I.jsxs)("span",{children:["Sexual Explicit: ",e.label.sexual_explicit?Object(I.jsx)(A,{color:"red"}):null]})}),Object(I.jsx)(S.a.Item,{children:Object(I.jsxs)("span",{children:["Threat: ",e.label.threat?Object(I.jsx)(A,{color:"red"}):null]})}),Object(I.jsx)(S.a.Item,{children:Object(I.jsxs)("span",{children:["Toxicity: ",e.label.toxicity?Object(I.jsx)(A,{color:"red"}):null]})})]}),Object(I.jsx)(O.a,{href:"https://twitter.com/"+e.username+"/status/"+e.id,children:"Link to tweet"})]})]})})}a(36);var _=function(e){Object(x.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).state={analysedData:[],twitterHandleInput:"",isLoading:!1,showAllTweets:!1,pagination:0},n.fetchData=n.fetchData.bind(Object(b.a)(n)),n.onChangeQueryValue=n.onChangeQueryValue.bind(Object(b.a)(n)),n.onChangePaginationValue=n.onChangePaginationValue.bind(Object(b.a)(n)),n}return Object(d.a)(a,[{key:"fetchData",value:function(){var e=Object(o.a)(j.a.mark((function e(t,a,n){var s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,this.setState({isLoading:!0}),e.next=4,y(t,n);case 4:if("string"!==typeof(s=e.sent)){e.next=8;break}throw this.setState({analysedData:s}),new Error(s);case 8:if(a){e.next=13;break}if("string"!==typeof(s=T(s))){e.next=13;break}throw this.setState({analysedData:s}),new Error(s);case 13:this.setState({analysedData:s}),e.next=18;break;case 16:e.prev=16,e.t0=e.catch(0);case 18:this.setState({isLoading:!1});case 19:case"end":return e.stop()}}),e,this,[[0,16]])})));return function(t,a,n){return e.apply(this,arguments)}}()},{key:"onChangeQueryValue",value:function(e){"all"===e.target.value?this.setState({showAllTweets:!0}):this.setState({showAllTweets:!1})}},{key:"onChangePaginationValue",value:function(e){"yesPagination"===e.target.value?this.setState({pagination:1}):this.setState({pagination:0})}},{key:"render",value:function(){var e=this,t=[];if(Array.isArray(this.state.analysedData)&&this.state.analysedData.length>0){t=[];var a,n=Object(i.a)(this.state.analysedData);try{for(n.s();!(a=n.n()).done;){var s=a.value,r=Object(I.jsx)(P,{text:s.text,label:s.label,id:s.id,username:this.state.twitterHandleInput});t.push(r)}}catch(l){n.e(l)}finally{n.f()}}else if("string"===typeof this.state.analysedData){t=[];var c=Object(I.jsx)(P,{error:!0,errorMessage:this.state.analysedData});t.push(c)}return Object(I.jsx)(I.Fragment,{children:Object(I.jsxs)(w.a,{children:[Object(I.jsx)(v.a,{children:Object(I.jsx)("div",{className:"containerDiv",children:Object(I.jsxs)("div",{className:"leftAlign",children:[Object(I.jsx)("div",{children:Object(I.jsxs)("span",{children:["Link to ",Object(I.jsx)("a",{href:"https://www.github.com/Davage-M/Tweet-Toxicity-API",children:"API github repo"})]})}),Object(I.jsx)("div",{children:Object(I.jsxs)("span",{children:["Link to ",Object(I.jsx)("a",{href:"https://www.github.com/Davage-M/Tweet-Toxicity-Front-End",children:"front end github repo"})]})})]})})}),Object(I.jsx)(v.a,{children:Object(I.jsx)("h1",{children:"Tweet Toxicity Analyzer"})}),Object(I.jsxs)(v.a,{children:[Object(I.jsx)("h4",{children:"Enter Twitter Handle"}),Object(I.jsx)(A,{color:"red"})]}),Object(I.jsx)(v.a,{children:Object(I.jsx)(f.a,{children:Object(I.jsx)("div",{onChange:this.onChangeQueryValue,className:"containerDiv",children:Object(I.jsxs)("div",{className:"leftAlign",children:[Object(I.jsxs)("div",{children:[Object(I.jsx)("input",{type:"radio",value:"flagged",name:"displayTweets",defaultChecked:!0})," Only Flagged Tweets"]}),Object(I.jsxs)("div",{children:[Object(I.jsx)("input",{type:"radio",value:"all",name:"displayTweets"})," All Tweets"]})]})})})}),Object(I.jsxs)(v.a,{children:[Object(I.jsx)(f.a,{}),Object(I.jsx)(f.a,{children:Object(I.jsx)("hr",{})}),Object(I.jsx)(f.a,{})]}),Object(I.jsx)(v.a,{children:Object(I.jsx)(f.a,{children:Object(I.jsx)("div",{onChange:this.onChangePaginationValue,className:"containerDiv",children:Object(I.jsxs)("div",{className:"leftAlign",children:[Object(I.jsxs)("div",{children:[Object(I.jsx)("input",{type:"radio",value:"noPagination",name:"pagination",defaultChecked:!0})," Most recent 100 tweets"]}),Object(I.jsxs)("div",{children:[Object(I.jsx)("input",{type:"radio",value:"yesPagination",name:"pagination"})," Most recent 3200 tweets (long)"]})]})})})}),Object(I.jsxs)(v.a,{children:[Object(I.jsx)(f.a,{}),Object(I.jsx)(f.a,{children:Object(I.jsxs)(p.a,{children:[Object(I.jsx)(p.a.Text,{children:"@"}),Object(I.jsx)(g.a,{type:"text",placeholder:"Twitter Handle","aria-label":"Twitter Handle",size:"lg",onChange:function(t){e.setState({twitterHandleInput:t.target.value})}})]})}),Object(I.jsx)(f.a,{})]}),Object(I.jsx)(O.a,{variant:"primary",disabled:this.state.isLoading,value:this.state.twitterHandleInput,onClick:function(t){e.fetchData(t.target.value,e.state.showAllTweets,e.state.pagination)},children:this.state.isLoading?"Searching ".concat(this.state.twitterHandleInput,"'s tweets....."):"Search Tweets"})," ",Object(I.jsxs)(v.a,{children:[Object(I.jsx)(f.a,{xs:4}),Object(I.jsx)(f.a,{xs:4,children:t.map((function(e,t){return Object(I.jsx)("span",{children:e},t)}))}),Object(I.jsx)(f.a,{xs:4})]})]})})}}]),a}(n.Component);a(41);var E=function(){return Object(I.jsx)("div",{className:"App",children:Object(I.jsx)(_,{})})},F=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,45)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,r=t.getLCP,c=t.getTTFB;a(e),n(e),s(e),r(e),c(e)}))};a(42),a(43);c.a.render(Object(I.jsx)(s.a.StrictMode,{children:Object(I.jsx)(E,{})}),document.getElementById("root")),F()}},[[44,1,2]]]);
//# sourceMappingURL=main.f90c0d0c.chunk.js.map