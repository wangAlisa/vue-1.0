;/*!js/util/util.js*/
define("js/util/util",function(e,t,n){var a={tpl:function(e){return document.getElementById(e).innerHTML},ajax:function(e,t){var n=new XMLHttpRequest;n.onreadystatechange=function(){4===n.readyState&&200===n.status&&t(JSON.parse(n.responseText))},n.open("GET",e,!0),n.send(null)}};n.exports=a});
;/*!js/filter/filter.js*/
define("js/filter/filter",function(){Vue.filter("price",function(e){return e+" 元"}),Vue.filter("orignPrice",function(e){return"门市价: "+e+"元"}),Vue.filter("sales",function(e){return"销量 "+e}),Vue.filter("evaluate",function(e){return"评分"+e})});
;/*!js/vm/carrousel.js*/
define("js/vm/carrousel",function(){window.onload=function(){var t=document.querySelector(".carousel"),e=t.querySelectorAll("ul"),n=e[0].querySelectorAll("li"),r=e[1].querySelectorAll("li"),l=n.length,s=0,a=0,o=n[0].clientWidth,i=300,c=90,u=null;e[0].addEventListener("touchstart",function(t){u=new Date,this.style.transition="none",s=t.touches[0].clientX},!1),e[0].addEventListener("touchmove",function(t){if(e-s!==0){var e=t.touches[0].clientX;0===a&&e-s>0&&(a=l-1),6===a&&0>e-s&&(a=0),this.style.transform="translateX("+(-a*o+e-s)+"px)"}},!1),e[0].addEventListener("touchend",function(t){if(e-s!==0){var e=t.changedTouches[0].clientX,n=new Date,f=Math.abs(e-s)>c?"y":"n",d=i>n-u?"y":"n";"y"===f&&"y"===d&&(e-s>0?(a--,0>a&&(a=l-2)):0>e-s&&(a++,a>6&&(a=1))),this.style.transition="all 1s ease 0s",this.style.transform="translateX("+-a*o+"px)";for(var y=0;y<r.length;y++)r[y].style.backgroundColor="#fff";a==r.length&&(a=0),r[a].style.backgroundColor="red"}},!1);var f=setInterval(function(){a++,n[a].style.transition="all 1s ease 0s",e[0].style.transform="translateX("+-a*o+"px)";for(var t=0;t<r.length;t++)r[t].style.backgroundColor="#fff";a==r.length&&(a=0,e[0].style.transform="translateX(0px)"),r[a].style.backgroundColor="red"},1e3);e[0].addEventListener("touchstart",function(){clearInterval(f)},!1),e[0].addEventListener("touchend",function(){f=setInterval(function(){a++,n[a].style.transition="all 1s ease 0s",e[0].style.transform="translateX("+-a*o+"px)";for(var t=0;t<r.length;t++)r[t].style.backgroundColor="#fff";a==r.length&&(a=0,e[0].style.transform="translateX(0px)"),r[a].style.backgroundColor="red"},1e3)})}});
;/*!js/vm/home/home.js*/
define("js/vm/home/home",function(n,i,t){var e=n("js/util/util");n("js/filter/filter"),n("js/vm/carrousel");var r=Vue.extend({template:'<section class="home">\r\n\r\n			<div class="carousel" style="display:block;" v-show = "showCarousel">\r\n				<ul class="img">\r\n					<li v-for = "item in imgs">\r\n						<img v-bind:src="\'img/carousel/\' +item.url " alt=""/>\r\n					</li>\r\n				</ul>\r\n				<ul class="dot clearfix">\r\n					<li class = \'cur\'></li>\r\n					<li v-for = "item in imgs" v-if = "item.type"></li>\r\n				</ul>\r\n			</div>\r\n\r\n			<ul class = "navList" v-show = "showList">\r\n				<li v-for = "item in navList">\r\n					<div>\r\n						<p  v-on:click = "navListDataClick">{{item.title}}</p>\r\n						<ul v-bind:style="{\'display\' : changeBlock}">\r\n							<li v-for = "list in navListData">\r\n								{{list.title}}\r\n							</li>\r\n						</ul>\r\n					</div>\r\n				</li>\r\n			</ul>\r\n\r\n\r\n			<ul class="types clearfix">\r\n				<li v-for="item in types">\r\n					<a v-bind:href="\'#list/type/\' +item.id">\r\n						<img v-bind:src="\'img/icon/\' +item.url" alt="">\r\n						<p>{{item.title}}</p>\r\n					</a>\r\n				</li>\r\n			</ul>\r\n\r\n			<div class = "secondKill" v-on:load = "loadTimer">\r\n				<span class = "secondKill_title">抢购</span>\r\n				<span class = "secondKill_time">{{decadeHours}}</span>\r\n				<span class = "secondKill_time">{{unitHours}}</span>\r\n				<span class = "secondKill_dot">&#58;</span>\r\n				<span class = "secondKill_time">{{decadeMints}}</span>\r\n				<span class = "secondKill_time">{{unitMints}}</span>\r\n				<span class = "secondKill_dot">&#58;</span>\r\n				<span class = "secondKill_time">{{decadeSends}}</span>\r\n				<span class = "secondKill_time">{{unitSends}}</span>\r\n				<span class = "gameOver" v-show = "gameOver">抢购结束</span>\r\n			</div>\r\n			<ul class="theme clearfix">\r\n\r\n				<li v-for = "item in list" v-if = "item.id < 4 ">\r\n					<a v-bind:href=" \'#/detail/\'+item.id ">\r\n						<img v-bind:src="\'img/list/\' +item.img" />\r\n					</a>\r\n				</li>\r\n				\r\n			</ul>\r\n\r\n			<ul class="ad clearfix">\r\n				<li v-for="item in ad">\r\n					<a v-bind:href="\'#/detail/\'+item.id">\r\n						<h3>{{item.title}}</h3>\r\n						<p>{{item.description}}</p>\r\n						<img v-bind:src="\'img/ad/\' +item.url" />\r\n					</a>\r\n				</li>\r\n			</ul>\r\n\r\n			<ul class="list-container">\r\n				<li v-for = "item in list">\r\n\r\n					<div class= "saled">\r\n						<span class = "productNum">购买数量 ：</span>\r\n						<span v-on:click = "clickDown"> - </span>\r\n						<span class = "num"> {{num}}</span>\r\n						<span  v-on:click = "clickUp"> + </span>\r\n					</div>\r\n\r\n					<a v-bind:href="\'#detail/\' +item.id">\r\n						<img v-bind:src="\'img/list/\' +item.img" />\r\n						<div class="content">\r\n							<h3>{{item.title}}</h3>\r\n							<p>\r\n								<span class ="price">{{item.price | price}}</span>\r\n								<span class = "orign-price">\r\n									<strike>\r\n										{{item.orignPrice | orignPrice}}\r\n									</strike>\r\n								</span>\r\n								<span class= "sales">{{item.sales | sales}}</span>\r\n							</p>\r\n						</div>\r\n					</a>\r\n				</li>\r\n			</ul>\r\n		</section>',data:function(){return{types:[{id:1,title:"美食",url:"01.png"},{id:2,title:"电影",url:"02.png"},{id:3,title:"酒店",url:"03.png"},{id:4,title:"休闲娱乐",url:"04.png"},{id:5,title:"外卖",url:"05.png"},{id:6,title:"KTV",url:"06.png"},{id:7,title:"周边游",url:"07.png"},{id:8,title:"丽人",url:"08.png"},{id:9,title:"小吃快餐",url:"09.png"},{id:10,title:"火车票",url:"10.png"}],ad:[],list:[],navList:[],navListData:[],imgs:[{url:"1.jpg"},{url:"2.jpg",type:2},{url:"3.jpg",type:3},{url:"4.jpg",type:4},{url:"5.jpg",type:5},{url:"6.jpg",type:6},{url:"7.jpg"}],num:1,decadeMints:0,decadeSends:0,unitMints:0,unitSends:0,decadeHours:0,unitHours:0,cont:0,gameOver:!1,showList:!1,changeBlock:!1,showCarousel:!0}},created:function(){var n=this;this.$parent.showNav=!0,e.ajax("data/home.json",function(i){if(i&&0===i.errno){n.ad=i.data.ad,n.list=i.data.list,n.navList=i.data.navList;for(var t=0;t<i.data.navList.length;t++)n.navListData.push(i.data.navList[t])}});{var i=new Date("2017-07-02 13:34:08");setInterval(function(){var t=new Date,e=i-t,r=e/1e3,s=r/60,l=s/60;n.unitSends=parseInt(r%60)%10,n.unitMints=parseInt(parseInt(r%60)/10),n.decadeSends=parseInt(s%60)%10,n.decadeMints=parseInt(parseInt(s%60)/10),n.unitHours=parseInt(l%24)%10,n.decadeHours=parseInt(parseInt(l%24)/10)},1e3)}},destoryed:function(){clearInterval(timer)},methods:{clickDown:function(n){+n.target.nextSibling.nextSibling.innerHTML<=0||(n.target.nextSibling.nextSibling.innerHTML=+n.target.nextSibling.nextSibling.innerHTML-1)},clickUp:function(n){n.target.previousSibling.previousSibling.innerHTML=+n.target.previousSibling.previousSibling.innerHTML+1},loadTimer:function(){var n=this;setInterval(function(){n.unitSends--})},navListDataClick:function(n){this.changeBlock=!this.changeBlock,n.target.nextSibling.nextSibling.style.display=this.changeBlock?"block":"none"}}});Vue.component("home",r),t.exports=r});
;/*!js/vm/list/list.js*/
define("js/vm/list/list",function(n,i,e){var r=n("js/util/util");n("js/filter/filter");var t=Vue.extend({template:'<section class="list">\r\n	<ul class="types clearfix">\r\n		<li v-for ="item in types" v-on:click = "sortBy(item.key)"  data = "bln">\r\n			<span>{{item.value}}</span>\r\n			<span  class="arrow"></span>\r\n		</li>\r\n	</ul>\r\n	<ul class="list-container">\r\n		<li v-for = "item in dealList">\r\n\r\n			<div class= "saled">\r\n				<span class = "productNum">购买数量 ：</span>\r\n				<span v-on:click = "clickDown"> - </span>\r\n				<span class = "num" > {{num}}</span>\r\n				<span  v-on:click = "clickUp"> + </span>\r\n			</div>\r\n\r\n			<a v-bind:href="\'#detail/\' +item.id">\r\n				<img v-bind:src="\'img/list/\' +item.img" />\r\n				<div class="content">\r\n					<h3>{{item.title}}</h3>\r\n					<p>\r\n						<span class ="price">{{item.price | price}}</span>\r\n						<span class = "orignPrice">\r\n						<strike> {{item.orignPrice | orignPrice}} \r\n						</strike>\r\n						</span>\r\n						<span class = "evaluate">{{item.evaluate | evaluate}}</span>\r\n						<span class= "sales">{{item.sales | sales}}</span>\r\n					</p>\r\n				</div>\r\n			</a>\r\n		</li>\r\n	</ul>\r\n	<div class="load-more" v-on:click = "loadMore" v-show="others.length">\r\n	<span>查看剩余{{others.length}}条团购</span>\r\n	<span class=\'arrow\'>\r\n		<span class="arrow white"></span>\r\n	</span>\r\n	</div>\r\n</section>',props:["searchvalue"],data:function(){return{types:[{value:"价格排序",key:"price"},{value:"销量排序",key:"sales"},{value:"好评排序",key:"evaluate"},{value:"优惠排序",key:"discount"}],list:[],others:[],bln:!0,query:"",num:1}},computed:{dealList:function(){var n=this;return this.list.filter(function(i){return i.title.indexOf(n.searchvalue)>=0})}},created:function(){this.$parent.showTitle=!1,this.$parent.showSearch=!0,this.$parent.showNav=!0,this.$parent.$children[0].showCarousel=!1,console.log(this.$parent.$children[0].showCarousel),this.query=this.$parent.query[1];var n=this,i="data/list.json?"+this.$parent.query[0]+"="+this.$parent.query[1];r.ajax(i,function(i){i&&0===i.errno&&(n.list=i.data.slice(0,3),n.others=i.data.slice(3))})},methods:{sortBy:function(n){this.bln=!this.bln,this.list.sort(this.bln?"discount"===n?function(n,i){return i.orignPrice-i.price-(n.orignPrice-n.price)}:function(i,e){return e[n]-i[n]}:"discount"===n?function(n,i){return n.orignPrice-n.price-(i.orignPrice-i.price)}:function(i,e){return i[n]-e[n]})},loadMore:function(){this.list=this.list.concat(this.others),this.others=[]},clickDown:function(n){+n.target.nextSibling.nextSibling.innerHTML<=0||(n.target.nextSibling.nextSibling.innerHTML=+n.target.nextSibling.nextSibling.innerHTML-1)},clickUp:function(n){n.target.previousSibling.previousSibling.innerHTML=+n.target.previousSibling.previousSibling.innerHTML+1}}});Vue.component("list",t),e.exports=t});
;/*!js/vm/detail/detail.js*/
define("js/vm/detail/detail",function(i){var r=i("js/util/util");i("js/filter/filter");var n=Vue.extend({template:'\r\n<section class="product">\r\n	<div class="image-part">\r\n		<img v-if="data.src" v-bind:src="\'img/item/\' + src" alt="">\r\n		<h1>{{data.title}}</h1>\r\n		<p>{{data.description}}</p>\r\n	</div>\r\n	<div class = "detaiMsg">\r\n		<div class = "color">\r\n			<label >{{data.color}}</label>\r\n			<img v-for = "item in data.picture" v-bind:src = "\'img/icon/\'+item.src" v-bind:style = "{\'border\' : color[item.id]}" v-on:click = "clickImg">\r\n		</div>\r\n		<div class = "size">\r\n			<label >{{data.size}}</label>\r\n			<span v-for = "item in data.age" v-bind:style="{\'border\' : age[item.id]}" v-on:click = "clickAge" >{{item.age}}岁</span>\r\n		</div>\r\n		\r\n		<div class = "saleNum">\r\n				<span class = "productNum">{{data.sales | sales}}</span>\r\n				<span class = "productNum">购买数量 ：</span>\r\n				<span v-on:click = "clickDown"> - </span>\r\n				<span class = "num">{{num}}</span>\r\n				<span  v-on:click = "clickUp"> + </span>\r\n		</div>\r\n\r\n	</div>\r\n	<div class="price-part">\r\n		<span class="price">{{data.price}}</span>\r\n		<span class="sign">元</span>\r\n		<span class="origin">\r\n		<strike> {{data.orignPrice | orignPrice}}</strike>\r\n		</span>\r\n		<a href="">\r\n			<span class="buy" v-on:click = "buyClick">立即购买</span>\r\n		</a>\r\n	</div>\r\n	<ul class="sale-part clearfix" >\r\n		<li v-on:click = "clickSalePart1" >简介</li>\r\n		<li v-on:click = "clickSalePart2" >详情</li>\r\n	</ul>\r\n\r\n	<div  id = "showDetail">\r\n		<ul>\r\n			<li v-for ="item in data.picture">\r\n				<img v-bind:src="\'img/item/\' + item.src " alt=""/>\r\n			</li>\r\n		</ul>\r\n\r\n	</div>\r\n		\r\n	\r\n	<div id = "showSummary">\r\n		<div class="store-part part">\r\n			<div class="headers">店家信息</div>\r\n			<div class="body">\r\n				<p>{{data.storeName}}</p>\r\n				<p>{{data.storeAddress}}</p>\r\n			</div>\r\n			<div class="footers">查看{{data.storeNum}}家分店</div>\r\n		</div>\r\n		<div class="buy-part part">\r\n			<div class="headers">购买须知</div>\r\n				<div class="body">\r\n					<ul>\r\n						<li>\r\n							<h3>有效期</h3>\r\n							<p>{{data.validateTime}}</p>\r\n						</li>\r\n						<li>\r\n							<h3>使用时间</h3>\r\n							<p>{{data.useTime}}</p>\r\n						</li>\r\n						<li>\r\n							<h3>使用规则</h3>\r\n							<p v-for="item in data.rules">{{item}}</p>\r\n						</li>\r\n					</ul>\r\n				</div>\r\n			</div>\r\n		</div>\r\n\r\n</section>',data:function(){return{data:{},age:[],color:[],num:1,src:"01.jpg"}},created:function(){this.$parent.showSearch=!1,this.$parent.showTitle=!0,this.$parent.showNav=!1;var i=this,n=(this.$parent.query[1],"data/product.json");r.ajax(n,function(r){r&&0===r.errno&&(i.data=r.data)})},methods:{buyClick:function(){},clickImg:function(i){var r=[],n=[],e=i.target.src;console.log(e),i.target.src.slice(-5).slice(0,1)-1==0&&(n[i.target.src.slice(-5).slice(0,1)]="1px solid red",this.age=r,this.color=n,this.src=i.target.src.slice(-6)),i.target.src.slice(-5).slice(0,1)-1==1&&(r[2]="1px dashed #666",r[3]="1px dashed #666",n[i.target.src.slice(-5).slice(0,1)]="1px solid red",this.age=r,this.color=n,this.src=i.target.src.slice(-6)),i.target.src.slice(-5).slice(0,1)-1==2&&(r[1]="1px dashed #666",n[i.target.src.slice(-5).slice(0,1)]="1px solid red",this.age=r,this.color=n,this.src=i.target.src.slice(-6))},clickAge:function(i){var r=i.target.innerHTML;console.log(r);var n=[],e=parseInt(i.target.innerHTML.slice(0,1)/2+1);n[e]="1px solid blue",this.age=n},clickDown:function(i){+i.target.nextSibling.nextSibling.innerHTML<=0||(i.target.nextSibling.nextSibling.innerHTML=+i.target.nextSibling.nextSibling.innerHTML-1)},clickUp:function(i){i.target.previousSibling.previousSibling.innerHTML=+i.target.previousSibling.previousSibling.innerHTML+1},clickSalePart1:function(i){var r=document.getElementById("showDetail"),n=document.getElementById("showSummary");r.style.display="block",n.style.display="none",i.target.style.color="red",i.target.nextSibling.nextSibling.style.color="black"},clickSalePart2:function(i){var r=document.getElementById("showDetail"),n=document.getElementById("showSummary");r.style.display="none",n.style.display="block",i.target.style.color="red",i.target.previousSibling.previousSibling.style.color="black"}}});Vue.component("detail",n)});
;/*!js/vm/shop/shop.js*/
define("js/vm/shop/shop",function(e,n,t){var o=Vue.extend({template:"",data:function(){return{}}});Vue.component("shop",o),t.exports=o});
;/*!js/vm/app.js*/
define("js/vm/app",function(s,e,h){var o=(s("js/vm/home/home"),s("js/vm/list/list"),s("js/vm/detail/detail"),s("js/vm/shop/shop"),new Vue({el:"#app",data:{view:"home",query:[],search:"",showSearch:!0,showTitle:!1,showNav:!0,showMsg:!0,isShowAll:!1},methods:{gotoSearch:function(s){this.search=s.target.value,console.log(this),this.$children[0].others.length=0},goBack:function(){history.go(-1)},clickBanner:function(){this.$children[0].showList=!this.$children[0].showList}}}));h.exports=o});
;/*!js/route/router.js*/
define("js/route/router",function(e,i,o){function s(){var e=location.hash,i={home:!0,list:!0,detail:!0,login:!0,shop:!0,showNav:!0};e=e.replace(/^#\/?/,""),e=e.split("/"),i[e[0]]?a.view=e[0]:a.wiew="home",a.query=e.slice(1),a.isShowAll=!0}var a=e("js/vm/app");window.addEventListener("hashchange",s),o.exports=s});
;/*!js/bootstrap.js*/
define("js/bootstrap",function(o){var r=o("js/route/router");r()});
;/*!js/vm/login/login.js*/
define("js/vm/login/login",function(e,n,t){var r=Vue.extend({template:'<section  class = "web_login">\r\n			<div class="content">\r\n				<div class="headerLog">\r\n					<div class="login" id = "header_login" v-on:click = "clickLogin"> <a href="javascript:void(0);">快速登录</a></div>\r\n					<div class="regist" id = "header_regist" v-on:click = "clickRegist"> <a href="javascript:void(0);">快速注册</a></div>\r\n				</div>\r\n				<div class="line" id = "line"></div>\r\n				<div class="web_cont">\r\n					<div class="login_box" id = "login_box">\r\n						<form action="/login" method = "post" class = "login">\r\n							<label v-bind:style="{borderColor: color}" >\r\n								<i>账号：</i>\r\n								<input type="text" id = "login_user" v-model = "login_user" v-on:blur = \'blurEvents\' > \r\n								<p  data = "color"></p>\r\n							</label>\r\n							<label v-bind:style="{borderColor: color}">\r\n								<i>密码：</i>\r\n								<input type="password" id = "login_psd" v-model = "login_psd"> \r\n								<p v-on:blur = \'blurEvents\' data = "color"></p>\r\n							</label>\r\n							<label for="" class = "submit" >\r\n								<a href="index.html"> \r\n									<input type="submit" value = "登录" id="submit" name = "submit">\r\n								</a>\r\n							</label>\r\n						</form>\r\n					</div>\r\n					<div class="regist_box" id = "regist_box">\r\n						<form action="/regist" method = "post" class="regist"  enctype="multipart/form-data">\r\n							<label v-bind:style="{borderColor: color}">\r\n								<i>用户名：</i><input type="text" id = "regist_user" v-model = "regist_user"> \r\n								<p v-on:blur = \'blurEvents\' data = "color"></p>\r\n							</label>\r\n							\r\n							<label v-bind:style="{borderColor: color}">\r\n								<i>密码：</i><input type="regist_psd" id = "regist_psd" v-model = "regist_psd"> \r\n								<p v-on:blur = \'blurEvents\' data = "color"></p>\r\n							</label>\r\n							<label v-bind:style="{borderColor: color}">\r\n								<i>确认密码：</i><input type="regist_psd1" id = "regist_psd1" v-model = "regist_psd1"> \r\n								<p v-on:blur = \'blurEvents\' data = "color"></p>\r\n							</label>\r\n							<label for="" class= "btn">\r\n								<a href="index.html"> \r\n									<input type="submit" value = "同意并注册" class = "btn" id = "regist_btn">\r\n								</a>\r\n								<a href="">注册协议</a>\r\n							</label>\r\n						</form>\r\n					</div>\r\n				</div>\r\n			</div>\r\n		</section>',data:function(){return{login_user:"",color:"#ccc",login_psd:"",regist_user:"",regist_psd:"",regist_psd1:""}},created:function(){this.$parent.showSearch=!1,this.$parent.showTitle=!0,this.$parent.showNav=!1,this.$parent.showMsg=!1},methods:{clickLogin:function(){var e=(document.getElementById("header_login"),document.getElementById("header_regist"),document.getElementById("login_box")),n=document.getElementById("regist_box"),t=document.getElementById("line");e.style.display="block",n.style.display="none",t.style.left="65px"},clickRegist:function(){var e=(document.getElementById("header_login"),document.getElementById("header_regist"),document.getElementById("login_box")),n=document.getElementById("regist_box"),t=document.getElementById("line");e.style.display="none",n.style.display="block",t.style.left="165px"},blurEvents:function(){document.getElementById("login_user"),document.getElementById("login_psd"),document.getElementById("submit");""===this.login_user}}});Vue.component("login",r),t.exports=r});