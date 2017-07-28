<section class="list">
	<ul class="types clearfix">
		<li v-for ="item in types" v-on:click = "sortBy(item.key)"  data = "bln">
			<span>{{item.value}}</span>
			<span  class="arrow"></span>
		</li>
	</ul>
	<ul class="list-container">
		<li v-for = "item in dealList">

			<div class= "saled">
				<span class = "productNum">购买数量 ：</span>
				<span v-on:click = "clickDown"> - </span>
				<span class = "num" > {{num}}</span>
				<span  v-on:click = "clickUp"> + </span>
			</div>

			<a v-bind:href="'#detail/' +item.id">
				<img v-bind:src="'img/list/' +item.img" />
				<div class="content">
					<h3>{{item.title}}</h3>
					<p>
						<span class ="price">{{item.price | price}}</span>
						<span class = "orignPrice">
						<strike> {{item.orignPrice | orignPrice}} 
						</strike>
						</span>
						<span class = "evaluate">{{item.evaluate | evaluate}}</span>
						<span class= "sales">{{item.sales | sales}}</span>
					</p>
				</div>
			</a>
		</li>
	</ul>
	<div class="load-more" v-on:click = "loadMore" v-show="others.length">
	<span>查看剩余{{others.length}}条团购</span>
	<span class='arrow'>
		<span class="arrow white"></span>
	</span>
	</div>
</section>