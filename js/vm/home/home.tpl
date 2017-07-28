<section class="home">

			<div class="carousel" style="display:block;" v-show = "showCarousel">
				<ul class="img">
					<li v-for = "item in imgs">
						<img v-bind:src="'img/carousel/' +item.url " alt=""/>
					</li>
				</ul>
				<ul class="dot clearfix">
					<li class = 'cur'></li>
					<li v-for = "item in imgs" v-if = "item.type"></li>
				</ul>
			</div>

			<ul class = "navList" v-show = "showList">
				<li v-for = "item in navList">
					<div>
						<p  v-on:click = "navListDataClick">{{item.title}}</p>
						<ul v-bind:style="{'display' : changeBlock}">
							<li v-for = "list in navListData">
								{{list.title}}
							</li>
						</ul>
					</div>
				</li>
			</ul>


			<ul class="types clearfix">
				<li v-for="item in types">
					<a v-bind:href="'#list/type/' +item.id">
						<img v-bind:src="'img/icon/' +item.url" alt="">
						<p>{{item.title}}</p>
					</a>
				</li>
			</ul>

			<div class = "secondKill" v-on:load = "loadTimer">
				<span class = "secondKill_title">抢购</span>
				<span class = "secondKill_time">{{decadeHours}}</span>
				<span class = "secondKill_time">{{unitHours}}</span>
				<span class = "secondKill_dot">&#58;</span>
				<span class = "secondKill_time">{{decadeMints}}</span>
				<span class = "secondKill_time">{{unitMints}}</span>
				<span class = "secondKill_dot">&#58;</span>
				<span class = "secondKill_time">{{decadeSends}}</span>
				<span class = "secondKill_time">{{unitSends}}</span>
				<span class = "gameOver" v-show = "gameOver">抢购结束</span>
			</div>
			<ul class="theme clearfix">

				<li v-for = "item in list" v-if = "item.id < 4 ">
					<a v-bind:href=" '#/detail/'+item.id ">
						<img v-bind:src="'img/list/' +item.img" />
					</a>
				</li>
				
			</ul>

			<ul class="ad clearfix">
				<li v-for="item in ad">
					<a v-bind:href="'#/detail/'+item.id">
						<h3>{{item.title}}</h3>
						<p>{{item.description}}</p>
						<img v-bind:src="'img/ad/' +item.url" />
					</a>
				</li>
			</ul>

			<ul class="list-container">
				<li v-for = "item in list">

					<div class= "saled">
						<span class = "productNum">购买数量 ：</span>
						<span v-on:click = "clickDown"> - </span>
						<span class = "num"> {{num}}</span>
						<span  v-on:click = "clickUp"> + </span>
					</div>

					<a v-bind:href="'#detail/' +item.id">
						<img v-bind:src="'img/list/' +item.img" />
						<div class="content">
							<h3>{{item.title}}</h3>
							<p>
								<span class ="price">{{item.price | price}}</span>
								<span class = "orign-price">
									<strike>
										{{item.orignPrice | orignPrice}}
									</strike>
								</span>
								<span class= "sales">{{item.sales | sales}}</span>
							</p>
						</div>
					</a>
				</li>
			</ul>
		</section>