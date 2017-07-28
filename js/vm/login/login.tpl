<section  class = "web_login">
			<div class="content">
				<div class="headerLog">
					<div class="login" id = "header_login" v-on:click = "clickLogin"> <a href="javascript:void(0);">快速登录</a></div>
					<div class="regist" id = "header_regist" v-on:click = "clickRegist"> <a href="javascript:void(0);">快速注册</a></div>
				</div>
				<div class="line" id = "line"></div>
				<div class="web_cont">
					<div class="login_box" id = "login_box">
						<form action="/login" method = "post" class = "login">
							<label v-bind:style="{borderColor: color}" >
								<i>账号：</i>
								<input type="text" id = "login_user" v-model = "login_user" v-on:blur = 'blurEvents' > 
								<p  data = "color"></p>
							</label>
							<label v-bind:style="{borderColor: color}">
								<i>密码：</i>
								<input type="password" id = "login_psd" v-model = "login_psd"> 
								<p v-on:blur = 'blurEvents' data = "color"></p>
							</label>
							<label for="" class = "submit" >
								<a href="index.html"> 
									<input type="submit" value = "登录" id="submit" name = "submit">
								</a>
							</label>
						</form>
					</div>
					<div class="regist_box" id = "regist_box">
						<form action="/regist" method = "post" class="regist"  enctype="multipart/form-data">
							<label v-bind:style="{borderColor: color}">
								<i>用户名：</i><input type="text" id = "regist_user" v-model = "regist_user"> 
								<p v-on:blur = 'blurEvents' data = "color"></p>
							</label>
							
							<label v-bind:style="{borderColor: color}">
								<i>密码：</i><input type="regist_psd" id = "regist_psd" v-model = "regist_psd"> 
								<p v-on:blur = 'blurEvents' data = "color"></p>
							</label>
							<label v-bind:style="{borderColor: color}">
								<i>确认密码：</i><input type="regist_psd1" id = "regist_psd1" v-model = "regist_psd1"> 
								<p v-on:blur = 'blurEvents' data = "color"></p>
							</label>
							<label for="" class= "btn">
								<a href="index.html"> 
									<input type="submit" value = "同意并注册" class = "btn" id = "regist_btn">
								</a>
								<a href="">注册协议</a>
							</label>
						</form>
					</div>
				</div>
			</div>
		</section>