webpackJsonp([0],{"/iUD":function(t,i,s){"use strict";var a=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("transition",{attrs:{name:"move"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.showContent,expression:"showContent"}],ref:"wrapper",staticClass:"atlist"},[s("div",{staticClass:"atlistContent"},[s("div",{staticClass:"content-list"},t._l(t.navigationContent,function(i){return s("div",{staticClass:"content-item"},[s("div",{staticClass:"pic"},[s("img",{attrs:{src:t.whitchPic(i),alt:""}})]),t._v(" "),s("div",{staticClass:"words"},[s("div",{staticClass:"title"},[t._v(t._s(t.whitchTitle(i)))]),t._v(" "),s("div",{staticClass:"desc"},[t._v(t._s(t.whitchDesc(i)))])])])}))]),t._v(" "),s("div",{staticClass:"vheader"}),t._v(" "),s("month",{on:{change:t.change}}),t._v(" "),s("div",{staticClass:"back",on:{click:t.hide}},[s("i",{staticClass:"fa fa-angle-left"})])],1)])},e=[],n={render:a,staticRenderFns:e};i.a=n},0:function(t,i){},"00Jg":function(t,i,s){t.exports=s.p+"static/img/5.aa734a7.jpg"},"1Ggk":function(t,i,s){"use strict";i.a={name:"swiper-slide",data:function(){return{slideClass:"swiper-slide"}},ready:function(){this.update()},mounted:function(){this.update(),this.$parent.options.slideClass&&(this.slideClass=this.$parent.options.slideClass)},updated:function(){this.update()},attached:function(){this.update()},methods:{update:function(){this.$parent&&this.$parent.swiper&&this.$parent.swiper.update&&(this.$parent.swiper.update(!0),this.$parent.options.loop&&this.$parent.swiper.reLoop())}}}},"2MqK":function(t,i,s){t.exports=s.p+"static/img/3.649834a.jpg"},"337c":function(t,i){},"54qX":function(t,i,s){"use strict";i.a={data:function(){return{whitchMounth:0}},methods:{choose:function(t){console.log(t),this.whitchMounth=t},showFirstContent:function(t){var i=this;this.$http.get("http://v3.wufazhuce.com:8000/api/hp/bymonth/2017-11").then(function(s){var a=s.body.data,e=t.target.id;i.$emit("navigationClick",a,e)})},showSecondContent:function(t){var i=this;this.$http.get("http://v3.wufazhuce.com:8000/api/question/bymonth/2017-11").then(function(s){var a=s.body.data,e=t.target.id;i.$emit("navigationClick",a,e)})},showThirdContent:function(t){var i=this;this.$http.get("http://v3.wufazhuce.com:8000/api/music/bymonth/2017-11").then(function(s){var a=s.body.data,e=t.target.id;i.$emit("navigationClick",a,e)})},showFourthContent:function(t){var i=this;this.$http.get("http://v3.wufazhuce.com:8000/api/hp/bymonth/2017-11").then(function(s){var a=s.body.data,e=t.target.id;i.$emit("navigationClick",a,e)})},showFifthContent:function(t){var i=this;this.$http.get("http://v3.wufazhuce.com:8000/api/essay/bymonth/2017-11").then(function(s){var a=s.body.data,e=t.target.id;i.$emit("navigationClick",a,e)})},showSevenContent:function(t){var i=this;this.$http.get("http://v3.wufazhuce.com:8000/api/essay/bymonth/2017-11").then(function(s){var a=s.body.data,e=t.target.id;i.$emit("navigationClick",a,e)})}}}},"6cji":function(t,i,s){"use strict";var a=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"swiper",on:{click:function(i){t.show(i)}}},[s("swiper",{staticClass:"swiper-box",attrs:{options:t.swiperOption}},[s("swiper-slide",{staticClass:"swiper-item"},[s("img",{attrs:{src:"//upload.jianshu.io/admin_banners/web_images/3780/45a4ba215a108dade733475225c19ecfb0b2336a.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"}})]),t._v(" "),s("swiper-slide",{staticClass:"swiper-item"},[s("img",{attrs:{src:"//upload.jianshu.io/admin_banners/web_images/3781/72a1084547a464f3a9f9fe620705179f9007d870.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"}})]),t._v(" "),s("swiper-slide",{staticClass:"swiper-item"},[s("img",{attrs:{src:"//upload.jianshu.io/admin_banners/web_images/3783/88ed9fc1f2a1b134eabc6c625ce7429139370a06.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"}})]),t._v(" "),s("swiper-slide",{staticClass:"swiper-item"},[s("img",{attrs:{src:"//upload.jianshu.io/admin_banners/web_images/3679/595da283c527291bf78adae750cb429bf2a1c22d.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"}})]),t._v(" "),s("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],1)],1)},e=[],n={render:a,staticRenderFns:e};i.a=n},"8sLT":function(t,i,s){"use strict";var a=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"vfooter",on:{click:function(i){t.choose(i)}}},[s("router-link",{staticClass:"one",class:{add:t.isoneActive},attrs:{to:"/onelist"}},[s("i",{staticClass:"fa fa-circle-o icon"})]),t._v(" "),s("router-link",{staticClass:"all",class:{add:t.isallActive},attrs:{to:"/all"}},[s("i",{staticClass:"fa fa-th-large icon"})]),t._v(" "),s("router-link",{staticClass:"me",class:{add:t.ismeActive},attrs:{to:"/login"}},[s("i",{staticClass:"fa fa-user-o icon"})])],1)},e=[],n={render:a,staticRenderFns:e};i.a=n},"9+NA":function(t,i,s){"use strict";var a=s("xMqN"),e=s("o+Xt");i.a={data:function(){return{show:!1}},components:{navigation:a.a,atlist:e.a},methods:{showSearch:function(){this.show=!0},dismis:function(){this.show=!1},one:function(){this.$refs.nav.showFirstContent()}}}},"9Tvx":function(t,i){},"9d9X":function(t,i,s){"use strict";i.a={data:function(){return{onelist:{}}},created:function(){var t=this;this.$http.get("http://v3.wufazhuce.com:8000/api/onelist/idlist/?channel=wdj&version=4.0.2&uuid=ffffffff-a90e-706a-63f7-ccf973aae5ee&platform=android").then(function(t){return t.body.data[0]}).then(function(i){var s="http://v3.wufazhuce.com:8000/api/onelist/"+i+"/0?cchannel=wdj&version=4.0.2&uuid=ffffffff-a90e-706a-63f7-ccf973aae5ee&platform=ios";t.$http.get(s).then(function(i){t.onelist=i.body.data,console.log(t.onelist)})})}}},"9zCi":function(t,i,s){"use strict";var a=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("transition",{attrs:{name:"show-search"}},[t.show?s("div",{staticClass:"search"},[s("div",{staticClass:"title"},[s("input",{attrs:{type:"text"}}),s("span",{on:{click:t.dismis}},[t._v("取消")])]),t._v(" "),s("div",{staticClass:"main"},[s("ul",[s("li",{on:{click:t.one}},[t._v("图文")]),t._v(" "),s("li",[t._v("问答")]),t._v(" "),s("li",[t._v("阅读")]),t._v(" "),s("li",[t._v("连载")]),t._v(" "),s("li",[t._v("影视")]),t._v(" "),s("li",[t._v("音乐")]),t._v(" "),s("li",[t._v("电台")])])]),t._v(" "),t._e()],1):t._e()])},e=[],n={render:a,staticRenderFns:e};i.a=n},AVwT:function(t,i,s){"use strict";var a=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{attrs:{id:"app"}},[s("router-view"),t._v(" "),s("vfooter")],1)},e=[],n={render:a,staticRenderFns:e};i.a=n},Aiyq:function(t,i,s){"use strict";var a=s("gS97"),e=s.n(a);i.a={data:function(){return{showContent:!1,category1:""}},props:{content:{type:Object},category:{type:String}},computed:{whitchTitle:function(){return"1"===this.category||"2"===this.category?this.content.hp_title:"3"===this.category?this.content.question_content:"4"===this.category?this.content.story_title:"5"===this.category?this.content.data[0].title:void 0},whitchDesc:function(){return"1"===this.category||"2"===this.category?this.content.author[0].user_name:"3"===this.category?this.content.asker.user_name:"4"===this.category?this.content.story_author.user_name:"5"===this.category?this.content.data[0].user.user_name:void 0},whitchText:function(){return"1"===this.category||"2"===this.category?this.content.hp_content:"3"===this.category?this.content.answer_content:"4"===this.category?this.content.story:"5"===this.category?this.content.data[0].content:void 0}},methods:{show:function(){var t=this;this.showContent=!0,this.$nextTick(function(){t.scroll=new e.a(t.$refs.pro,{click:!0})})},hide:function(){this.showContent=!1}}}},"BdR+":function(t,i,s){t.exports=s.p+"static/img/4.08fa7af.jpg"},COV9:function(t,i,s){"use strict";var a=s("fBNM"),e=(s("YOyO"),s("gS97")),n=s.n(e);i.a={data:function(){return{content:{},onelist:{},category:"",show:!1}},components:{detial:a.a},created:function(){var t=this;this.$http.get("http://v3.wufazhuce.com:8000/api/onelist/idlist/?channel=wdj&version=4.0.2&uuid=ffffffff-a90e-706a-63f7-ccf973aae5ee&platform=android").then(function(t){return t.body.data[0]}).then(function(i){var s="http://v3.wufazhuce.com:8000/api/onelist/"+i+"/0?cchannel=wdj&version=4.0.2&uuid=ffffffff-a90e-706a-63f7-ccf973aae5ee&platform=ios";t.$http.get(s).then(function(i){t.onelist=i.body.data,console.log(t.onelist),t.$nextTick(function(){t.initScroll()})})})},methods:{showText:function(t){var i=this,s=t.item_id,a="";"1"===t.category?(this.category="1",a="http://v3.wufazhuce.com:8000/api/essay/"+s+"?channel=wdj&source=summary&source_id=9261&version=4.0.2&uuid=ffffffff-a90e-706a-63f7-ccf973aae5ee&platform=ios"):"2"===t.category?(this.category="2",a="http://v3.wufazhuce.com:8000/api/essay/"+s+"?channel=wdj&source=summary&source_id=9245&version=4.0.2&uuid=ffffffff-a90e-706a-63f7-ccf973aae5ee&platform=ios"):"3"===t.category?(this.category="3",a="http://v3.wufazhuce.com:8000/api/question/"+s+"?channel=wdj&source=channel_reading&source_id=9254&version=4.0.2&uuid=ffffffff-a90e-706a-63f7-ccf973aae5ee&platform=ios"):"4"===t.category?(this.category="4",a="http://v3.wufazhuce.com:8000/api/music/detail/"+s+"?channel=wdj&version=4.0.2&uuid=ffffffff-a90e-706a-63f7-ccf973aae5ee&platform=ios"):"5"===t.category?(this.category="5",a="http://v3.wufazhuce.com:8000/api/movie/"+s+"/story/1/0?channel=wdj&version=4.0.2&uuid=ffffffff-a90e-706a-63f7-ccf973aae5ee&platform=ios"):(this.category="1",a="http://v3.wufazhuce.com:8000/api/essay/"+s+"?channel=wdj&source=summary&source_id=9261&version=4.0.2&uuid=ffffffff-a90e-706a-63f7-ccf973aae5ee&platform=ios"),this.$http.get(a).then(function(t){i.content=t.body.data,console.log(i.content),i.$refs.content.show()})},initScroll:function(){this.scroll=new n.a(this.$refs.BS,{click:!0})}}}},DICR:function(t,i,s){"use strict";var a=(s("OMzK"),s("IBMi"));i.a={name:"app",data:function(){return{onelist:{}}},components:{vfooter:a.a}}},"DN7+":function(t,i,s){"use strict";var a=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"alllist"},[s("div",{staticClass:"content-list"},t._l(t.alllist,function(i){return s("div",{staticClass:"list-item"},[s("div",{staticClass:"list-header"},[t._v(t._s(i.title))]),t._v(" "),s("div",{staticClass:"img-header"},[s("img",{attrs:{src:i.img_url,alt:""}})]),t._v(" "),s("div",{staticClass:"list-forward"},[t._v(t._s(i.forward))])])}))])},e=[],n={render:a,staticRenderFns:e};i.a=n},EV1k:function(t,i,s){"use strict";function a(t){s("EsP/")}var e=s("RGIX"),n=s("xyC/"),c=s("46Yf"),o=a,r=c(e.a,n.a,!1,o,"data-v-359b76c0",null);i.a=r.exports},"EsP/":function(t,i){},"H+TC":function(t,i,s){"use strict";i.a={props:{alllist:{type:Array}}}},IBMi:function(t,i,s){"use strict";function a(t){s("nu1a")}var e=s("JZ95"),n=s("8sLT"),c=s("46Yf"),o=a,r=c(e.a,n.a,!1,o,"data-v-1f07ca10",null);i.a=r.exports},Icp7:function(t,i,s){"use strict";var a=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("transition",{attrs:{name:"move"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.showContent,expression:"showContent"}],staticClass:"detial"},[s("div",{staticClass:"back",on:{click:t.hide}},[s("i",{staticClass:"fa fa-angle-left"})]),t._v(" "),s("div",{staticClass:"head"},[t._v("ONE STORY")]),t._v(" "),s("div",{ref:"pro",staticClass:"detial-wrapper"},[s("div",{staticClass:"detial-content"},[s("div",{staticClass:"content"},[t.content?s("p",{staticClass:"title"},[t._v(t._s(t.whitchTitle))]):t._e(),t._v(" "),s("p",{staticClass:"desc"},[t._v("文 / "),t.content.author||t.content.asker||t.content.story_author||t.content.count?s("span",[t._v(t._s(t.whitchDesc))]):t._e()]),t._v(" "),s("div",{ref:"text",attrs:{id:"text"},domProps:{innerHTML:t._s(t.whitchText)}})])])]),t._v(" "),s("div",{staticClass:"footer"},[s("input",{attrs:{type:"text",placeholder:"写一个评论.."}}),t._v(" "),s("div",{staticClass:"fa fa-comment-o comment"},[s("span",[t._v(t._s(t.content.commentnum))])]),t._v(" "),s("div",{staticClass:"fa fa-share sha"})])])])},e=[],n={render:a,staticRenderFns:e};i.a=n},JZ95:function(t,i,s){"use strict";i.a={data:function(){return{isoneActive:!1,isallActive:!1,ismeActive:!1}},methods:{choose:function(t){this.isoneActive=!1,this.isallActive=!1,this.ismeActive=!1,"fa fa-circle-o"===t.target.className&&(this.isoneActive=!0,console.log(this.isoneActive))}}}},KULw:function(t,i,s){t.exports=s.p+"static/img/7.e1728e8.jpg"},L7BK:function(t,i,s){"use strict";function a(t){s("V+W/")}var e=s("H+TC"),n=s("DN7+"),c=s("46Yf"),o=a,r=c(e.a,n.a,!1,o,"data-v-0020066c",null);i.a=r.exports},LPiI:function(t,i){},M93x:function(t,i,s){"use strict";function a(t){s("oz6D")}var e=s("DICR"),n=s("AVwT"),c=s("46Yf"),o=a,r=c(e.a,n.a,!1,o,null,null);i.a=r.exports},MtKc:function(t,i){},NHnr:function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var a=s("MVSX"),e=s("M93x"),n=s("YaEn"),c=s("y0Fx"),o=s("MtKc"),r=(s.n(o),s("41jX")),l=s.n(r),u=s("qBmJ");s.n(u);a.a.config.productionTip=!1,a.a.use(c.a),a.a.use(l.a),new a.a({el:"#app",router:n.a,template:"<App/>",components:{App:e.a}})},OMzK:function(t,i,s){"use strict";function a(t){s("9Tvx")}var e=s("9d9X"),n=s("t1ey"),c=s("46Yf"),o=a,r=c(e.a,n.a,!1,o,"data-v-a1eb0018",null);r.exports},PSof:function(t,i){},QHs1:function(t,i){},RGIX:function(t,i,s){"use strict";i.a={}},SU7a:function(t,i){},SxnY:function(t,i){},TuUp:function(t,i,s){t.exports=s.p+"static/img/6.baf4c7d.jpg"},UGy7:function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var a=s("1Ggk"),e=s("fryw"),n=s("46Yf"),c=n(a.a,e.a,!1,null,null,null);i.default=c.exports},"V+W/":function(t,i){},VMJg:function(t,i){},Xg53:function(t,i,s){"use strict";i.a={data:function(){return{current:!1,text:"11",opposite:!0}},methods:{change:function(t){this.current=!this.current,this.opposite=!this.opposite,this.$emit("change",t.target.id),this.text=t.target.id}}}},YOyO:function(t,i,s){"use strict";function a(t){s("wTmp")}var e=s("9+NA"),n=s("9zCi"),c=s("46Yf"),o=a,r=c(e.a,n.a,!1,o,"data-v-0a58be2c",null);i.a=r.exports},YaEn:function(t,i,s){"use strict";var a=s("MVSX"),e=s("zO6J"),n=s("bDBh"),c=s("fMAl"),o=s("EV1k");a.a.use(e.a),i.a=new e.a({routes:[{path:"/onelist",name:"onelist",component:n.a},{path:"/all",name:"all",component:c.a},{path:"/login",name:"login",component:o.a}]})},acoM:function(t,i,s){"use strict";var a=s("gS97"),e=s.n(a),n=s("sGbO");i.a={data:function(){return{showContent:!1,whitchMounth:0,newData:[]}},components:{month:n.a},props:{navigationContent:{type:Array},id:{type:String}},methods:{change:function(t){var i=this;if(t){switch(this.id){case"one":var s="http://v3.wufazhuce.com:8000/api/hp/bymonth/2017-";s+=t;break;case"two":var s="http://v3.wufazhuce.com:8000/api/question/bymonth/2017-";s+=t;break;case"three":var s="http://v3.wufazhuce.com:8000/api/music/bymonth/2017-";s+=t;break;case"four":var s="http://v3.wufazhuce.com:8000/api/hp/bymonth/2017-";s+=t;break;case"five":var s="http://v3.wufazhuce.com:8000/api/essay/bymonth/2017-";s+=t;break;case"six":var s="http://v3.wufazhuce.com:8000/api/music/bymonth/2017-";s+=t;break;case"seven":var s="http://v3.wufazhuce.com:8000/api/essay/bymonth/2017-";s+=t}this.$http.get(s).then(function(t){i.navigationContent=t.body.data})}},whitchPic:function(t){return"one"===this.id?t.hp_img_original_url:"two"===this.id?t.author_list[0].web_url:"three"===this.id?t.cover:"four"===this.id?t.hp_img_original_url:"five"===this.id?t.author[0].web_url:"six"===this.id?t.cover:"seven"===this.id?t.author[0].web_url:void 0},whitchTitle:function(t){return"one"===this.id?t.hp_content:"two"===this.id?t.question_title:"three"===this.id?t.story_title:"four"===this.id?t.hp_content:"five"===this.id?t.hp_title:"six"===this.id?t.story_title:"seven"===this.id?t.hp_title:void 0},whitchDesc:function(t){return"one"===this.id?t.hp_title:"two"===this.id?t.answer_content:"three"===this.id?t.author.user_name:"four"===this.id?t.hp_title:"five"===this.id?"文 / "+t.author_list[0].user_name:"six"===this.id?t.title:"seven"===this.id?"文 / "+t.author_list[0].user_name:void 0},initScroll:function(){this.scroll||(this.scroll=new e.a(this.$refs.wrapper,{click:!0}))},show:function(){var t=this;this.showContent=!0,this.$nextTick(function(){t.initScroll()})},hide:function(){this.showContent=!1}}}},bDBh:function(t,i,s){"use strict";function a(t){s("337c")}var e=s("COV9"),n=s("p7j0"),c=s("46Yf"),o=a,r=c(e.a,n.a,!1,o,"data-v-d9b49e14",null);i.a=r.exports},dSw6:function(t,i,s){"use strict";var a=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"slide"},[s("div",{staticClass:"title"},[t._v("所有人问所有人")]),t._v(" "),s("div",{ref:"BS",staticClass:"content"},[t._m(0)])])},e=[function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"items"},[a("div",{staticClass:"item1"},[a("span",{staticClass:"image"},[a("img",{attrs:{src:s("jLg2"),alt:""}})]),a("span",{staticClass:"desc"},[t._v("梦想也会长大，不过是朝着童年的方向")])]),t._v(" "),a("div",{staticClass:"item2"},[a("span",{staticClass:"image"},[a("img",{attrs:{src:s("qRWM"),alt:""}})]),a("span",{staticClass:"desc"},[t._v("男女搭配，真的很累")])]),t._v(" "),a("div",{staticClass:"item3"},[a("span",{staticClass:"image"},[a("img",{attrs:{src:s("fgOe"),alt:""}})]),a("span",{staticClass:"desc"},[t._v("孤独万岁，失恋无罪")])])])}],n={render:a,staticRenderFns:e};i.a=n},dn3c:function(t,i,s){"use strict";var a=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"month",on:{click:function(i){t.change(i)}}},[s("transition",{attrs:{name:"move"}},[t.opposite?s("div",[t._v("2017年"+t._s(t.text)+"月")]):t._e(),t._v(" "),t.current?s("ul",[s("li",{attrs:{id:"1"}},[t._v("1月")]),t._v(" "),s("li",{attrs:{id:"2"}},[t._v("2月")]),t._v(" "),s("li",{attrs:{id:"3"}},[t._v("3月")]),t._v(" "),s("li",{attrs:{id:"4"}},[t._v("4月")]),t._v(" "),s("li",{attrs:{id:"5"}},[t._v("5月")]),t._v(" "),s("li",{attrs:{id:"6"}},[t._v("6月")]),t._v(" "),s("li",{attrs:{id:"7"}},[t._v("7月")]),t._v(" "),s("li",{attrs:{id:"8"}},[t._v("8月")]),t._v(" "),s("li",{attrs:{id:"9"}},[t._v("9月")]),t._v(" "),s("li",{attrs:{id:"10"}},[t._v("10月")]),t._v(" "),s("li",{attrs:{id:"11"}},[t._v("11月")])]):t._e()])],1)},e=[],n={render:a,staticRenderFns:e};i.a=n},eawn:function(t,i,s){"use strict";var a=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"all"},[s("div",{staticClass:"vheader",on:{click:t.showText}},[s("span",[t._v("创作你的创作")]),t._v(" "),s("div",{staticClass:"search",on:{click:t.showSearch}},[s("span",{staticClass:"fa fa-search"})])]),t._v(" "),s("transition",{attrs:{name:"show"}},[t.situation?s("div",{ref:"bgd",staticClass:"blackmap",on:{click:t.dispear}}):t._e()]),t._v(" "),s("transition",{attrs:{name:"showPic"}},[t.situation?s("div",{staticClass:"blackmapPic"},[s("img",{attrs:{src:t.blackmapSrc}})]):t._e()]),t._v(" "),s("div",{ref:"content",staticClass:"all-main"},[s("div",{staticClass:"all-content"},[s("div",{staticClass:"swiperWrapper"},[s("swiper",{on:{show:t.blackmap}})],1),t._v(" "),s("navigation",{ref:"nav",attrs:{tail:t.tail},on:{navigationClick:t.showNavigation}}),t._v(" "),s("slide"),t._v(" "),s("alllist",{attrs:{alllist:t.alllist}})],1)]),t._v(" "),s("search",{ref:"showSearch2"}),t._v(" "),s("atlist",{ref:"list",attrs:{navigationContent:t.navigationContent,id:t.id},on:{change:t.change}})],1)},e=[],n={render:a,staticRenderFns:e};i.a=n},fBNM:function(t,i,s){"use strict";function a(t){s("mABH")}var e=s("Aiyq"),n=s("Icp7"),c=s("46Yf"),o=a,r=c(e.a,n.a,!1,o,"data-v-5a7d47e8",null);i.a=r.exports},fMAl:function(t,i,s){"use strict";function a(t){s("PSof")}var e=s("rawn"),n=s("eawn"),c=s("46Yf"),o=a,r=c(e.a,n.a,!1,o,"data-v-6cef3fa0",null);i.a=r.exports},fgOe:function(t,i,s){t.exports=s.p+"static/img/3.384ee2a.jpg"},fryw:function(t,i,s){"use strict";var a=function(){var t=this,i=t.$createElement;return(t._self._c||i)("div",{class:t.slideClass},[t._t("default")],2)},e=[],n={render:a,staticRenderFns:e};i.a=n},gFnw:function(t,i,s){"use strict";var a=s("gS97"),e=s.n(a);i.a={created:function(){var t=this;this.$nextTick(function(){t.initScroll()})},methods:{initScroll:function(){this.scroll=new e.a(this.$refs.BS,{click:!0,scrollX:!0,scrollY:!1})}}}},hbWp:function(t,i,s){t.exports=s.p+"static/img/2.2e88c8a.jpg"},jLg2:function(t,i,s){t.exports=s.p+"static/img/1.930eb84.jpg"},jtHp:function(t,i,s){"use strict";var a=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"swiper-container"},[t._t("parallax-bg"),t._v(" "),s("div",{class:t.defaultSwiperClasses.wrapperClass},[t._t("default")],2),t._v(" "),t._t("pagination"),t._v(" "),t._t("button-prev"),t._v(" "),t._t("button-next"),t._v(" "),t._t("scrollbar")],2)},e=[],n={render:a,staticRenderFns:e};i.a=n},"lU/Z":function(t,i,s){"use strict";var a="undefined"!=typeof window;a&&(window.Swiper=s("Bnvi")),i.a={name:"swiper",props:{options:{type:Object,default:function(){return{autoplay:3500}}},notNextTick:{type:Boolean,default:function(){return!1}}},data:function(){return{defaultSwiperClasses:{wrapperClass:"swiper-wrapper"}}},ready:function(){!this.swiper&&a&&(this.swiper=new Swiper(this.$el,this.options))},mounted:function(){var t=this,i=function(){if(!t.swiper&&a){delete t.options.notNextTick;var i=!1;for(var s in t.defaultSwiperClasses)t.defaultSwiperClasses.hasOwnProperty(s)&&t.options[s]&&(i=!0,t.defaultSwiperClasses[s]=t.options[s]);var e=function(){t.swiper=new Swiper(t.$el,t.options)};i?t.$nextTick(e):e()}}(this.options.notNextTick||this.notNextTick)?i():this.$nextTick(i)},updated:function(){this.swiper&&this.swiper.update()},beforeDestroy:function(){this.swiper&&(this.swiper.destroy(),delete this.swiper)}}},mABH:function(t,i){},nu1a:function(t,i){},"o+Xt":function(t,i,s){"use strict";function a(t){s("VMJg")}var e=s("acoM"),n=s("/iUD"),c=s("46Yf"),o=a,r=c(e.a,n.a,!1,o,"data-v-010663e8",null);i.a=r.exports},oz6D:function(t,i){},p7j0:function(t,i,s){"use strict";var a=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"onelist"},[s("div",{staticClass:"vheader"},[t.onelist.weather?s("div",{staticClass:"date"},[t._v(t._s(t.onelist.weather.date))]):t._e(),t._v(" "),t.onelist.weather?s("div",{staticClass:"detial"},[s("span",{staticClass:"city"},[t._v(t._s(t.onelist.weather.city_name))]),t._v(" "),s("span",{staticClass:"weather"},[t._v(t._s(t.onelist.weather.climate))]),t._v(" "),s("span",{staticClass:"temp"},[t._v(t._s(t.onelist.weather.wind_direction))])]):t._e()]),t._v(" "),s("div",{ref:"BS",staticClass:"onelist-wrapper"},[s("div",{staticClass:"list-main"},[t.onelist.content_list?s("div",{staticClass:"list-firse"},[s("div",{staticClass:"listfirse-img"},[s("img",{attrs:{src:t.onelist.content_list[0].img_url,alt:""}})]),t._v(" "),s("div",{staticClass:"listfirse-line"},[t._v(t._s(t.onelist.content_list[0].title)+" | "+t._s(t.onelist.content_list[0].pic_info))]),t._v(" "),s("div",{staticClass:"forward"},[s("span",[t._v(t._s(t.onelist.content_list[0].forward))])]),t._v(" "),s("div",{staticClass:"icon"},[s("div",[t._v("今天")]),t._v(" "),s("div",{staticClass:"fa fa-heart-o heart"},[s("span",{staticClass:"like-count"},[t._v(t._s(t.onelist.content_list[0].like_count))])]),t._v(" "),s("div",{staticClass:"fa fa-share sha"})])]):t._e(),t._v(" "),s("div",{staticClass:"img-list"},t._l(t.onelist.content_list,function(i){return s("div",{staticClass:"list-item",on:{click:function(s){t.showText(i)}}},[i.tag_list[0]?s("div",{staticClass:"list-type"},[t._v("- "+t._s(i.tag_list[0].title)+" -")]):t._e(),t._v(" "),s("div",{staticClass:"list-header"},[t._v(t._s(i.title))]),t._v(" "),s("div",{staticClass:"list-desc"},[t._v("文/"+t._s(i.author.user_name))]),t._v(" "),s("div",{staticClass:"img-header"},[s("img",{attrs:{src:i.img_url,alt:""}})]),t._v(" "),s("div",{staticClass:"list-forward"},[t._v(t._s(i.forward))]),t._v(" "),s("div",{staticClass:"icon"},[s("div",[t._v("今天")]),t._v(" "),s("div",{staticClass:"fa fa-heart-o heart"},[s("span",{staticClass:"like-count"},[t._v(t._s(i.like_count))])]),t._v(" "),s("div",{staticClass:"fa fa-share sha"})])])}))])]),t._v(" "),s("detial",{ref:"content",attrs:{content:t.content,category:t.category}})],1)},e=[],n={render:a,staticRenderFns:e};i.a=n},qBmJ:function(t,i){},qRWM:function(t,i,s){t.exports=s.p+"static/img/2.48b80b8.jpg"},rawn:function(t,i,s){"use strict";var a=s("gS97"),e=s.n(a),n=s("rguH"),c=s("xMqN"),o=s("L7BK"),r=s("o+Xt"),l=s("vJ9C"),u=s("YOyO");i.a={data:function(){return{alllist:[],navigationContent:[],id:"",tail:11,situation:!1,blackmapSrc:""}},components:{swiper:n.a,navigation:c.a,alllist:o.a,atlist:r.a,slide:l.a,search:u.a},created:function(){var t=this;this.$http.get("http://v3.wufazhuce.com:8000/api/channel/reading/more/0?channel=wdj&version=4.0.2&uuid=ffffffff-a90e-706a-63f7-ccf973aae5ee&platform=ios").then(function(i){t.alllist=i.body.data,console.log(t.alllist),t.$nextTick(function(){t.initScroll()})})},methods:{showSearch:function(){this.$refs.showSearch2.showSearch()},dispear:function(){this.situation=!1},blackmap:function(t){var i=this;this.situation=!0;var s=document.documentElement.clientWidth,a=document.documentElement.clientHeight;this.$nextTick(function(){var e=i.$refs.bgd,n="width:"+s+"px;height:"+a+"px";e.setAttribute("style",n),i.blackmapSrc=t})},change:function(t){this.tail=t},initScroll:function(){this.scroll||(this.scroll=new e.a(this.$refs.content,{click:!0}))},showText:function(){this.$http.get("http://v3.wufazhuce.com:8000/api/hp/bymonth/2017-10").then(function(t){})},showNavigation:function(t,i){this.navigationContent=t,this.id=i,this.$refs.list.show()}}}},rguH:function(t,i,s){"use strict";function a(t){s("SU7a")}var e=s("tTti"),n=s("6cji"),c=s("46Yf"),o=a,r=c(e.a,n.a,!1,o,"data-v-61b3f42c",null);i.a=r.exports},sGbO:function(t,i,s){"use strict";function a(t){s("SxnY")}var e=s("Xg53"),n=s("dn3c"),c=s("46Yf"),o=a,r=c(e.a,n.a,!1,o,"data-v-0552c8ae",null);i.a=r.exports},syvT:function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var a=s("lU/Z"),e=s("jtHp"),n=s("46Yf"),c=n(a.a,e.a,!1,null,null,null);i.default=c.exports},t1ey:function(t,i,s){"use strict";var a=function(){var t=this,i=t.$createElement,s=t._self._c||i;return t.onelist?s("div",{staticClass:"header"},[t.onelist.weather?s("div",{staticClass:"date"},[t._v(t._s(t.onelist.weather.date))]):t._e(),t._v(" "),t.onelist.weather?s("div",{staticClass:"detial"},[s("span",{staticClass:"city"},[t._v(t._s(t.onelist.weather.city_name))]),t._v(" "),s("span",{staticClass:"weather"},[t._v(t._s(t.onelist.weather.climate))]),t._v(" "),s("span",{staticClass:"temp"},[t._v(t._s(t.onelist.weather.wind_direction))])]):t._e()]):t._e()},e=[],n={render:a,staticRenderFns:e};i.a=n},tTti:function(t,i,s){"use strict";i.a={data:function(){return{swiperOption:{pagination:".swiper-pagination",direction:"horizontal",mousewheelControl:!0,spaceBetween:0,autoplay:2e3,autoplayDisableOnInteraction:!1,loop:!0}}},methods:{show:function(t){var i=t.target.getAttribute("src");this.$emit("show",i)}}}},vJ9C:function(t,i,s){"use strict";function a(t){s("LPiI")}var e=s("gFnw"),n=s("dSw6"),c=s("46Yf"),o=a,r=c(e.a,n.a,!1,o,"data-v-92f31560",null);i.a=r.exports},wTmp:function(t,i){},wwm7:function(t,i,s){t.exports=s.p+"static/img/1.38be0e7.jpg"},xMqN:function(t,i,s){"use strict";function a(t){s("QHs1")}var e=s("54qX"),n=s("xn6T"),c=s("46Yf"),o=a,r=c(e.a,n.a,!1,o,"data-v-b023dba8",null);i.a=r.exports},xn6T:function(t,i,s){"use strict";var a=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"navigation"},[a("div",{staticClass:"title"},[t._v("分类导航")]),t._v(" "),a("div",{staticClass:"content"},[a("ul",{staticClass:"entry_list"},[a("li",{staticClass:"entry_item",on:{click:function(i){t.showFirstContent(i)}}},[a("img",{attrs:{id:"one",src:s("wwm7"),alt:""}}),a("span",[t._v("图文")])]),t._v(" "),a("li",{staticClass:"entry_item",on:{click:function(i){t.showSecondContent(i)}}},[a("img",{attrs:{id:"two",src:s("hbWp"),alt:""}}),a("span",[t._v("问答")])]),t._v(" "),a("li",{staticClass:"entry_item_3 entry_item",on:{click:function(i){t.showThirdContent(i)}}},[a("img",{attrs:{id:"three",src:s("2MqK"),alt:""}}),a("span",[t._v("电台")])])]),t._v(" "),a("ul",{staticClass:"entry_list"},[a("li",{staticClass:"entry_item",on:{click:function(i){t.showFourthContent(i)}}},[a("img",{attrs:{id:"four",src:s("BdR+"),alt:""}}),a("span",[t._v("连载")])]),t._v(" "),a("li",{staticClass:"entry_item",on:{click:function(i){t.showFifthContent(i)}}},[a("img",{attrs:{id:"five",src:s("00Jg"),alt:""}}),a("span",[t._v("影视")])]),t._v(" "),a("li",{staticClass:"entry_item",on:{click:function(i){t.showThirdContent(i)}}},[a("img",{attrs:{id:"six",src:s("TuUp"),alt:""}}),a("span",[t._v("音乐")])]),t._v(" "),a("li",{staticClass:"entry_item",on:{click:function(i){t.showSevenContent(i)}}},[a("img",{attrs:{id:"seven",src:s("KULw"),alt:""}}),a("span",[t._v("阅读")])])])])])},e=[],n={render:a,staticRenderFns:e};i.a=n},"xyC/":function(t,i,s){"use strict";var a=function(){var t=this,i=t.$createElement;t._self._c;return t._m(0)},e=[function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"login"},[s("div",{staticClass:"main"},[s("div",{staticClass:"icon"},[s("i",{staticClass:"fa fa-sign-in"})]),t._v(" "),s("div",{staticClass:"button"},[t._v("点击登录")])]),t._v(" "),s("div",{staticClass:"cog"},[s("i",{staticClass:"fa fa-cog"})])])}],n={render:a,staticRenderFns:e};i.a=n}},["NHnr"]);
//# sourceMappingURL=app.99c1e852beb3492e5a60.js.map