(this["webpackJsonpclicky-game"]=this["webpackJsonpclicky-game"]||[]).push([[0],[,,,,,,function(e){e.exports=JSON.parse('[{"id":1,"name":"Grey","clicked":false,"image":"https://upload.wikimedia.org/wikipedia/en/5/53/Greys-Anatomy-Season-7-Promo-9.jpg"},{"id":2,"name":"Alex","clicked":false,"image":"https://upload.wikimedia.org/wikipedia/en/f/f3/Dr._Alex_Karev.jpg"},{"id":3,"name":"Avery","clicked":false,"image":"https://upload.wikimedia.org/wikipedia/en/4/45/Jesse-williams-greys.jpg"},{"id":4,"name":"Bailey","clicked":false,"image":"https://upload.wikimedia.org/wikipedia/en/8/87/Dr._Miranda_Bailey.jpg"},{"id":5,"name":"Mcsteamy","clicked":false,"image":"https://upload.wikimedia.org/wikipedia/en/9/9a/Dr._Mark_Sloan.jpg"},{"id":6,"name":"Hunt","clicked":false,"image":"https://upload.wikimedia.org/wikipedia/en/6/60/Dr._Owen_Hunt.jpg"},{"id":7,"name":"Izzie","clicked":false,"image":"https://upload.wikimedia.org/wikipedia/en/9/94/Dr._Isobel_Stevens.jpg"},{"id":8,"name":"George","clicked":false,"image":"https://upload.wikimedia.org/wikipedia/en/7/7f/T.R._Knight_as_George_O%27Malley.jpg"},{"id":9,"name":"Shepherd2","clicked":false,"image":"https://upload.wikimedia.org/wikipedia/en/e/e9/Amelia_s11.jpg"},{"id":10,"name":"Mcdreamy","clicked":false,"image":"https://upload.wikimedia.org/wikipedia/en/b/b4/Dr._Derek_Shepherd.jpg"},{"id":11,"name":"Pierce","clicked":false,"image":"https://upload.wikimedia.org/wikipedia/en/a/a3/MaggiePierce.jpg"},{"id":12,"name":"Webber","clicked":false,"image":"https://upload.wikimedia.org/wikipedia/en/3/34/Dr._Richard_Webber.jpg"}]')},,,function(e,a,i){e.exports=i(20)},,,,,function(e,a,i){},function(e,a,i){},function(e,a,i){},function(e,a,i){},function(e,a,i){},function(e,a,i){},function(e,a,i){"use strict";i.r(a);var t=i(0),n=i.n(t),c=i(2),r=i.n(c),o=(i(14),i(15),function(){return n.a.createElement("div",{className:"jumbotron jumbotron-fluid"})}),l=i(3),s=i(4),m=i(7),d=i(5),u=i(8),g=(i(16),function(e){return n.a.createElement("div",{className:"allCards col-xs-6 col-sm-6 col-md-4 col-lg-3 col-xl-3",key:e.id,onClick:function(){return e.handleClick(e.id,e.clicked)}},n.a.createElement("img",{id:e.name,src:e.image,alt:e.name}))}),p=i(6),k=(i(17),function(e){function a(){var e,i;Object(l.a)(this,a);for(var t=arguments.length,n=new Array(t),c=0;c<t;c++)n[c]=arguments[c];return(i=Object(m.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(n)))).state={images:p,message:"Click one of the images to begin!",score:0,topScore:0},i.handleClick=function(e,a){var t=i.state.images;if(a)return t.forEach((function(e,a){t[a].clicked=!1})),i.setState({image:t.sort((function(){return Math.random()-.5})),message:"You Guessed Wrong!",score:0});t.forEach((function(a,i){e===a.id&&(t[i].clicked=!0)}));var n=i.state,c=n.topScore,r=n.score+1,o=r>c?r:c;return i.setState({image:t.sort((function(){return Math.random()-.5})),message:"You Guessed Correctly!",score:r,topScore:o})},i}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"container-fluid mainCardContainer"},n.a.createElement("div",{className:"gameMessage text-center"},n.a.createElement("p",null,this.state.message)),n.a.createElement("div",{className:"gameScores text-center"},n.a.createElement("p",null,"Score: ",this.state.score," | Top Score: ",this.state.topScore)),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},this.state.images.map((function(a){return n.a.createElement(g,{key:a.id,id:a.id,name:a.name,clicked:a.clicked,image:a.image,handleClick:e.handleClick})})))))}}]),a}(t.Component));i(18),i(19);var h=function(){return n.a.createElement("h4",{className:"header"},"Clicky Game | Click on any image to earn points, but don't click any image more then once!")},f=function(){return n.a.createElement("div",{className:"container-fluid mainContainer"},n.a.createElement(h,null),n.a.createElement(o,null),n.a.createElement(k,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[9,1,2]]]);
//# sourceMappingURL=main.707da065.chunk.js.map