webpackJsonp([27],{134:function(t,e,s){s(419);var i=s(6)(s(252),s(568),null,null);t.exports=i.exports},177:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s(0),a=s(5),n=s(3),o=s.n(n),c=s(1),l=s.n(c),r=s(4),p=(s.n(r),s(134)),d=s.n(p),u=s(2);i.default.config.productionTip=!1,i.default.use(a.a),i.default.use(o.a),i.default.use(l.a),i.default.http.options.emulateJSON=!0,new i.default({el:"#app",store:u.a,template:"<App/>",components:{App:d.a}})},252:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s(8),a=s.n(i),n=s(9),o=s.n(n),c=s(7),l=s(1);s.n(l);e.default={data:function(){return{swiperOption:{pagination:".swiper-pagination",spaceBetween:30,paginationClickable:!0,loop:!0,grabCursor:!0,keyboardControl:!0,autoplay:5e3,autoplayDisableOnInteraction:!1,debugger:!0,autoHeight:!0},carousel:{M_Carousel:[],PC_Carousel:[]}}},created:function(){var t=this;c.a.get("/dog/get_banner",{},function(e){t.carousel=e.data})},mounted:function(){document.title="萌宠基因首页"},methods:{href:function(t){t&&(location.href=t)},hre:function(t){location.hostname.indexOf("dev")>-1?location.href="http://dev.www.petgene.com.cn"+t:location.href="http://www.petgene.com.cn"+t},launchFullscreen:function(t){var e=document.getElementById(t);if(e.requestFullscreen)e.requestFullscreen();else if(e.mozRequestFullScreen)e.mozRequestFullScreen();else if(e.msRequestFullscreen)e.msRequestFullscreen();else if(e.oRequestFullscreen)e.oRequestFullscreen();else if(e.webkitRequestFullscreen)e.webkitRequestFullScreen();else{var s=document.documentElement,i=document.body,a=document.getElementById("videobox"),n="width:100%;height:100%;overflow:hidden;display:block";s.style.cssText=n,i.style.cssText=n,a.style.cssText=n+";margin:0px;padding:0px;",document.IsFullScreen=!0}e.play()}},components:{Pethead:a.a,Petfooter:o.a,swiper:l.swiper,swiperSlide:l.swiperSlide,Resource:c.a}}},419:function(t,e){},464:function(t,e,s){t.exports=s.p+"static/img/home-video.da7e79a.png"},568:function(t,e,s){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("pethead",{attrs:{isSpace:!1}}),t._v(" "),i("swiper",{staticClass:"hidden-xs",staticStyle:{height:"auto"},attrs:{options:t.swiperOption}},[t._l(t.carousel.PC_Carousel,function(e){return i("swiper-slide",{on:{click:function(s){t.href(e.button_url)}}},[i("img",{attrs:{src:e.img_url,width:"100%",height:"100%"}}),t._v(" "),i("div",{staticClass:"suspension"},[i("div",{staticClass:"container"},[i("div",{staticClass:"text-right",staticStyle:{position:"absolute",top:"40%",right:"5%"}},[e.title?i("h1",{domProps:{innerHTML:t._s(e.title)}}):t._e(),t._v(" "),e.desc?i("p",{domProps:{innerHTML:t._s(e.desc)}}):t._e(),t._v(" "),e.button_text?i("a",{staticStyle:{"line-height":"0"},attrs:{target:"_blank",href:e.button_url}},[e.button_price?i("span",{staticClass:"money"},[t._v(t._s(e.button_price))]):t._e(),t._v(" "),i("span",{staticClass:"two"},[t._v(t._s(e.button_text))])]):t._e()])])])])}),t._v(" "),i("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2),t._v(" "),i("swiper",{staticClass:"visible-xs",staticStyle:{height:"auto"},attrs:{options:t.swiperOption}},[t._l(t.carousel.M_Carousel,function(e){return i("swiper-slide",{on:{click:function(s){t.href(e.button_url)}}},[e.button_text?i("img",{staticStyle:{"padding-bottom":"80px"},attrs:{src:e.img_url,width:"100%",height:"100%"}}):i("img",{attrs:{src:e.img_url,width:"100%",height:"100%"}}),t._v(" "),i("div",{staticClass:"suspension"},[i("div",{staticClass:"container"},[i("div",{staticClass:"text-right",staticStyle:{position:"relative"}},[i("h1",{domProps:{innerHTML:t._s(e.title)}}),t._v(" "),i("p",{domProps:{innerHTML:t._s(e.desc)}})]),t._v(" "),e.button_text?i("a",{attrs:{target:"_blank",href:"/pet/purchase.html"}},[t._v(t._s(e.button_text))]):t._e()])])])}),t._v(" "),i("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2),t._v(" "),i("el-row",[i("el-col",{attrs:{span:24}},[i("div",{staticClass:"box"},[i("img",{attrs:{src:"http://cdn.genefamily.com.cn/pet-index-bg1.png"}}),t._v(" "),i("div",{staticClass:"suspension"},[i("div",{staticClass:"container"},[i("div",{staticClass:"text-left"},[i("h1",[i("i",{staticClass:"icon icon-dog"}),t._v("基因检测揭示狗狗身世之谜")]),t._v(" "),i("p",{staticClass:"hidden-xs"},[t._v("用科学的方法鉴定狗狗的品种纯度,")]),t._v(" "),i("p",{staticClass:"hidden-xs"},[t._v("探索狗狗的血统和祖源。")]),t._v(" "),i("span",[i("a",{attrs:{href:"/pet/report.html?activeName=breed"}},[t._v("纯度检测")]),t._v("/\n                "),i("a",{attrs:{href:"http://dev.www.petgene.com.cn/pet/report.html?activeName=parentage"}},[t._v("血统祖源\n                  "),i("i",{staticClass:"icon icon-arrow hidden-xs"})])])])])])]),t._v(" "),i("div",{staticClass:"box"},[i("img",{attrs:{src:"http://cdn.genefamily.com.cn/pet-index-bg2.png"}}),t._v(" "),i("div",{staticClass:"suspension"},[i("div",{staticClass:"container"},[i("div",{staticClass:"text-right"},[i("h1",{staticStyle:{color:"#fff"}},[t._v("预知遗传风险"),i("i",{staticClass:"icon icon-home-risk"})]),t._v(" "),i("p",{staticClass:"hidden-xs"},[t._v("帮助狗爸狗妈了解狗狗的健康风险和遗传病风险，")]),t._v(" "),i("p",{staticClass:"hidden-xs"},[t._v("让狗狗更加健康、长久的与您相伴!")]),t._v(" "),i("span",[i("a",{attrs:{href:"/pet/report.html?activeName=health"}},[t._v("健康风险")]),t._v("/\n                "),i("a",{attrs:{href:"/pet/report.html?activeName=hereditaryDisease"}},[t._v("遗传病风险"),i("i",{staticClass:"icon icon-arrow hidden-xs"})])])])])])]),t._v(" "),i("div",{staticClass:"box"},[i("img",{attrs:{src:"http://cdn.genefamily.com.cn/pet-index-bg3.png"}}),t._v(" "),i("div",{staticClass:"suspension"},[i("div",{staticClass:"container"},[i("div",{staticClass:"text-left",staticStyle:{width:"40%"}},[i("h1",[i("i",{staticClass:"icon icon-home-food"}),t._v("精准喂养")]),t._v(" "),i("p",{staticClass:"hidden-xs"},[t._v("对狗狗的外表特征、遗传年龄、健康体重、运动能力、智商、粘人程度、营养代谢能力等遗传性状进行评估，让狗爸狗妈全面深入的了解狗狗的遗传特征和营养代谢能力，进而进行个性化的、有针对性的科学养育。")]),t._v(" "),i("span",[i("a",{attrs:{href:"/pet/report.html?activeName=parentingadvice"}},[t._v("养育建议"),i("i",{staticClass:"icon icon-arrow hidden-xs"})])])])])])]),t._v(" "),i("div",{staticClass:"box"},[i("img",{attrs:{src:"http://cdn.genefamily.com.cn/pet-index-bg4.png"}}),t._v(" "),i("div",{staticClass:"suspension"},[i("div",{staticClass:"container"},[i("div",{staticClass:"text-right"},[i("h1",{staticStyle:{color:"#fff"}},[t._v("为什么要进行宠物基因检测"),i("i",{staticClass:"icon icon-home-gene"})]),t._v(" "),i("p",{staticClass:"video visible-xs",on:{click:function(e){t.launchFullscreen("video")}}},[i("img",{staticStyle:{width:"50%",float:"right"},attrs:{src:s(464)}})]),t._v(" "),i("p",{staticClass:"video hidden-xs"},[i("video",{staticStyle:{width:"100%","border-radius":"4px"},attrs:{controls:"controls",src:"http://cdn.genefamily.com.cn/pet-pc-index.mp4"}})])])])])]),t._v(" "),i("div",{staticClass:"box"},[i("div",{staticClass:"container"},[i("ul",[i("li",[i("span",[t._v("已购买产品?")]),t._v(" "),i("span",{on:{click:function(e){t.href("/pet/purchase.html")}}},[t._v("立即购买")])]),t._v(" "),i("li",[i("span",[i("a",[t._v("绑定基因检测套件")])]),t._v(" "),i("span",{staticClass:"two"},[i("a",{attrs:{target:"_blank",href:"/pet/purchase.html"}},[t._v("购买PetGene检测服务")])])])])])])])],1),t._v(" "),i("petfooter"),t._v(" "),i("video",{staticStyle:{display:"none"},attrs:{id:"video",controls:"controls",src:"http://cdn.genefamily.com.cn/pet-mobile-index.mp4"}})],1)},staticRenderFns:[]}}},[177]);