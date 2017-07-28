
<section class="product">
	<div class="image-part">
		<img v-if="data.src" v-bind:src="'img/item/' + src" alt="">
		<h1>{{data.title}}</h1>
		<p>{{data.description}}</p>
	</div>
	<div class = "detaiMsg">
		<div class = "color">
			<label >{{data.color}}</label>
			<img v-for = "item in data.picture" v-bind:src = "'img/icon/'+item.src" v-bind:style = "{'border' : color[item.id]}" v-on:click = "clickImg">
		</div>
		<div class = "size">
			<label >{{data.size}}</label>
			<span v-for = "item in data.age" v-bind:style="{'border' : age[item.id]}" v-on:click = "clickAge" >{{item.age}}岁</span>
		</div>
		
		<div class = "saleNum">
				<span class = "productNum">{{data.sales | sales}}</span>
				<span class = "productNum">购买数量 ：</span>
				<span v-on:click = "clickDown"> - </span>
				<span class = "num">{{num}}</span>
				<span  v-on:click = "clickUp"> + </span>
		</div>

	</div>
	<div class="price-part">
		<span class="price">{{data.price}}</span>
		<span class="sign">元</span>
		<span class="origin">
		<strike> {{data.orignPrice | orignPrice}}</strike>
		</span>
		<a href="">
			<span class="buy" v-on:click = "buyClick">立即购买</span>
		</a>
	</div>
	<ul class="sale-part clearfix" >
		<li v-on:click = "clickSalePart1" >简介</li>
		<li v-on:click = "clickSalePart2" >详情</li>
	</ul>

	<div  id = "showDetail">
		<ul>
			<li v-for ="item in data.picture">
				<img v-bind:src="'img/item/' + item.src " alt=""/>
			</li>
		</ul>

	</div>
		
	
	<div id = "showSummary">
		<div class="store-part part">
			<div class="headers">店家信息</div>
			<div class="body">
				<p>{{data.storeName}}</p>
				<p>{{data.storeAddress}}</p>
			</div>
			<div class="footers">查看{{data.storeNum}}家分店</div>
		</div>
		<div class="buy-part part">
			<div class="headers">购买须知</div>
				<div class="body">
					<ul>
						<li>
							<h3>有效期</h3>
							<p>{{data.validateTime}}</p>
						</li>
						<li>
							<h3>使用时间</h3>
							<p>{{data.useTime}}</p>
						</li>
						<li>
							<h3>使用规则</h3>
							<p v-for="item in data.rules">{{item}}</p>
						</li>
					</ul>
				</div>
			</div>
		</div>

</section>