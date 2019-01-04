(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a(25)},,,,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),s=a(8),i=a.n(s),c=(a(15),a(1)),o=a(2),h=a(5),l=a(3),d=a(4),u=a(6),m=(a(17),function(e){function t(){return Object(c.a)(this,t),Object(h.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"getIconPath",value:function(e){return e.toLowerCase().replace(/^(.)|(?:\.\s)(.)|[\s.-](.)/g,function(e){return e.toUpperCase()}).replace(/[ &.]/g,"")}},{key:"renderSidebarCharacters",value:function(e){return n.a.createElement("div",{className:"sidebar-character"},n.a.createElement("img",{src:"./images/".concat(this.getIconPath(this.props.characters[e]),".png"),alt:this.props.characters[e],height:"156px"}),n.a.createElement("div",{className:"name-block"},n.a.createElement("span",null,this.props.characters[e])))}},{key:"render",value:function(){return n.a.createElement("div",{className:"sidebar-container"},this.renderSidebarCharacters(0),this.renderSidebarCharacters(1),this.renderSidebarCharacters(2),this.renderSidebarCharacters(3),this.renderSidebarCharacters(4))}}]),t}(r.Component)),f=(a(19),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(h.a)(this,Object(l.a)(t).call(this))).iconPath=e.characterName.toLowerCase().replace(/^(.)|(?:\.\s)(.)|[\s.-](.)/g,function(e){return e.toUpperCase()}).replace(/[ &.]/g,""),a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"container"+(this.props.selected?" selected":"")+(this.props.banned?" banned":""),onClick:function(t){return e.props.onClick(t)},onKeyPress:function(t){return"Enter"===t.key&&e.props.onClick(t)},tabIndex:"0"},this.props.banned?n.a.createElement("div",{className:"banned-foreground"},n.a.createElement("div",{className:"left banned-block"}),n.a.createElement("div",{className:"right banned-block"})):"",n.a.createElement("img",{src:"./images/".concat(this.iconPath,".png"),alt:this.props.characterName,height:"65px"}),n.a.createElement("div",{className:"name-block"},n.a.createElement("span",null,this.props.characterName)))}}]),t}(r.Component)),g=(a(21),["MARIO","DONKEY KONG","LINK","SAMUS","DARK SAMUS","YOSHI","KIRBY","FOX","PIKACHU","LUIGI","NESS","CAPTAIN FALCON","JIGGLYPUFF","PEACH","DAISY","BOWSER","ICE CLIMBERS","SHEIK","ZELDA","DR. MARIO","PICHU","FALCO","MARTH","LUCINA","YOUNG LINK","GANONDORF","MEWTWO","ROY","CHROM","MR. GAME & WATCH","META KNIGHT","PIT","DARK PIT","ZERO SUIT SAMUS","WARIO","SNAKE","IKE","POK\xc9MON TRAINER","DIDDY KONG","LUCAS","SONIC","KING DEDEDE","OLIMAR","LUCARIO","R.O.B.","TOON LINK","WOLF","VILLAGER","MEGA MAN","Wii Fit TRAINER","ROSALINA & LUMA","LITTLE MAC","GRENINJA","PALUTENA","PAC-MAN","ROBIN","SHULK","BOWSER JR.","DUCK HUNT","RYU","KEN","CLOUD","CORRIN","BAYONETTA","INKLING","RIDLEY","SIMON","RICHTER","KING K. ROOL","ISABELLE","INCINEROAR","Mii Brawler","Mii Swordfighter","Mii Gunner"]),E=function(e){function t(){var e;Object(c.a)(this,t),e=Object(h.a)(this,Object(l.a)(t).call(this));var a={fighters:{}};return g.forEach(function(e){a.fighters[e]={banned:e.startsWith("Mii"),selected:!1}}),e.state=a,e.randomize=e.randomize.bind(Object(u.a)(Object(u.a)(e))),e}return Object(d.a)(t,e),Object(o.a)(t,[{key:"toggleBan",value:function(e,t){e.preventDefault();var a=this.state.fighters;a[t]={banned:!this.state.fighters[t].banned},this.setState({fighters:a})}},{key:"randomize",value:function(){if(this.state.randomFighters){var e=this.state.fighters;for(var t in this.state.randomFighters)e[this.state.randomFighters[t]]={banned:this.state.fighters[this.state.randomFighters[t]].banned,selected:!1};this.setState({fighters:e})}var a=[];for(var r in this.state.fighters)this.state.fighters[r].banned||a.push(r);if(a.length<5)throw new Error("Too many banned fighters");for(var n=[],s=0;s<5;s++){var i=Math.floor(Math.random()*a.length);n.push(a.splice(i,1)[0])}for(var c=this.state.fighters,o=0;o<n.length;o++)c[n[o]]={banned:!1,selected:!0};this.setState({fighters:c}),this.setState({randomFighters:n})}},{key:"renderGrid",value:function(){var e=this,t=[],a=function(a){t.push(n.a.createElement(f,{characterName:a,banned:e.state.fighters[a].banned,selected:e.state.fighters[a].selected,key:a,onClick:function(t){return e.toggleBan(t,a)}}))};for(var r in this.state.fighters)a(r);return t}},{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("div",{className:"action-bar"},n.a.createElement("button",{className:"generate",type:"button",onClick:this.randomize},"Randomize")),n.a.createElement("div",{className:"main-screen"},this.state.randomFighters&&this.state.randomFighters.length>0&&n.a.createElement(m,{characters:this.state.randomFighters}),n.a.createElement("div",{className:"character-grid"},this.renderGrid()),this.state.randomFighters&&this.state.randomFighters.length>0&&n.a.createElement(m,{characters:this.state.randomFighters})))}}]),t}(r.Component),O=(a(23),function(e){function t(){return Object(c.a)(this,t),Object(h.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement(E,null))}}]),t}(r.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,2,1]]]);
//# sourceMappingURL=main.e06773ec.chunk.js.map