(this["webpackJsonptv-shows"]=this["webpackJsonptv-shows"]||[]).push([[0],{20:function(t,e,n){t.exports=n(21)},21:function(t,e,n){"use strict";n.r(e);var a=n(4),s=n.n(a),o=n(6),r=n(7),i=n(8),c=n(9),u=n(10),l=n(0),p=n.n(l),m=n(17),h=n.n(m),d=n(19),w=n(1);n(27);function f(t){return v.apply(this,arguments)}function v(){return(v=Object(u.a)(s.a.mark((function t(e){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e);case 2:return t.next=4,t.sent.json();case 4:return t.abrupt("return",t.sent);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function g(){return(g=Object(u.a)(s.a.mark((function t(e){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f("https://www.episodate.com/api/most-popular?page=".concat(e));case 2:return t.abrupt("return",t.sent.tv_shows);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function b(){return(b=Object(u.a)(s.a.mark((function t(e){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f("https://www.episodate.com/api/show-details?q=".concat(e));case 2:return t.abrupt("return",t.sent.tvShow);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var E,y=function(t){Object(c.a)(n,t);var e=Object(i.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return p.a.createElement(d.a,null,p.a.createElement(w.a,{exact:!0,path:"/",component:j}),p.a.createElement(w.a,{exact:!0,path:"/show/:show_link",component:_}))}}]),n}(p.a.Component),k=0,j=function(t){Object(c.a)(n,t);var e=Object(i.a)(n);function n(t){var a;return Object(o.a)(this,n),(a=e.call(this,t)).state={shows:[],page:1,loading:!1},a.appending=!1,a.mounted=!1,a}return Object(r.a)(n,[{key:"render",value:function(){var t=this;return p.a.createElement("div",null,p.a.createElement("div",{className:"title"},"TV Shows"),this.state.shows.map((function(e){return p.a.createElement(O,{history:t.props.history,show_name:e.name,show_img:e.image_thumbnail_path,key:e.id,show_link:e.permalink})})),this.state.loading?p.a.createElement("div",{className:"loader"}):p.a.createElement("div",null))}},{key:"appendShows",value:function(){var t=this;!this.appending&&this.mounted&&(this.appending=!0,this.setState({loading:!0}),function(t){return g.apply(this,arguments)}(this.state.page).then((function(e){t.mounted&&(t.setState({loading:!1,shows:t.state.shows.concat(e),page:t.state.page+1}),t.appending=!1)})))}},{key:"componentDidMount",value:function(){var t=this;this.mounted=!0,window.addEventListener("scroll",(function(){document.documentElement.offsetHeight-Math.round(window.innerHeight+document.documentElement.scrollTop)<500&&t.appendShows()})),null==E?this.appendShows():this.setState(E),setTimeout((function(){return document.documentElement.scrollTop=k}),100)}},{key:"componentWillUnmount",value:function(){this.mounted=!1,E=this.state,k=document.documentElement.scrollTop}}]),n}(p.a.Component),O=function(t){Object(c.a)(n,t);var e=Object(i.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){var t=this;return p.a.createElement("div",{className:"TVShow ripple",onClick:function(){return setTimeout((function(){return t.props.history.push("/show/".concat(t.props.show_link))}),500)}},p.a.createElement("img",{className:"shows-img",src:this.props.show_img,alt:this.props.show_name,title:this.props.show_name}),p.a.createElement("div",{className:"show-name"},this.props.show_name))}}]),n}(p.a.Component),_=function(t){Object(c.a)(n,t);var e=Object(i.a)(n);function n(t){var a;return Object(o.a)(this,n),(a=e.call(this,t)).state={loading:!0,name:null,description:null,img:null},a.mounted=!1,a}return Object(r.a)(n,[{key:"render",value:function(){return this.state.loading?p.a.createElement("div",{className:"loader"}):p.a.createElement("div",null,p.a.createElement("div",{className:"title"},this.state.name),p.a.createElement("div",{style:{margin:"auto",textAlign:"center"}}," ",p.a.createElement("img",{className:"show-details-img",src:this.state.img,alt:this.state.name,title:this.state.name})),p.a.createElement("div",{className:"description"},p.a.createElement("p",{dangerouslySetInnerHTML:{__html:this.state.description}})))}},{key:"componentDidMount",value:function(){var t=this;this.mounted=!0,function(t){return b.apply(this,arguments)}(this.props.match.params.show_link).then((function(e){t.mounted&&t.setState({loading:!1,name:e.name,description:e.description,img:e.image_thumbnail_path})}))}},{key:"componentWillUnmount",value:function(){this.mounted=!1}}]),n}(p.a.Component);h.a.render(p.a.createElement(y,null),document.getElementById("root"))},27:function(t,e,n){}},[[20,1,2]]]);
//# sourceMappingURL=main.57ba8dbc.chunk.js.map