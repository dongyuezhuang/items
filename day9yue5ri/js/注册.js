//--------------------------------创建cookie-------	


//function $cookie(key,value,day){
//	var cookiestr=encodeURIComponent(key)+'='+encodeURIComponent(value)+
//	';path=/';
//	if(typeof day==='number'){
//		var date=new Date();
//		date.setDate(date.getDate()+day);
//		cookiestr+=";expires="+date;
//	}
//	document.cookie=cookiestr;
//}




//----------------------注册-------------------------

			var login=document.getElementById('name');
			var passage=document.getElementsByTagName('p');
			var name;
			function fn1(obj,a){
				var flag=false;
				obj.onfocus=function(){
					if(!flag){
						obj.value='';
					}
				}
				obj.onblur=function(){
//					if(obj.value==''){
//						a[0].innerHTML='请输入想要注册QQ号'
//					}else if(isNaN(obj.value)){
//						a[0].innerHTML='请输入纯数字';
//					}else{
//						if(obj.value.length<=10&&obj.value.length>=7){
//							a[0].innerHTML='输入正确';
//							a[0].style.color='green';
//							name=obj.value;
//							flag=true;
//						}else{
//							a[0].innerHTML='请输入7-10位纯数字';
//						}
//					}
					var re=/^[0-9]{6,10}$/
					var str=obj.value;
					if(obj.value==''){
						a[0].innerHTML='请输入想要注册QQ号'
					}else if(re.test(str)==true){
						a[0].innerHTML='输入正确';
						a[0].style.color='green';
						name=obj.value;
						flag=true;
					}else{
						a[0].innerHTML='请输入6-10位数字';
					}
				}
			
			}
			fn1(login,passage);
//----------------------------密码-----------------------

			var pass1=document.getElementById('password1');
			var pas1;
			function fn2(obj,a){
				var flag=false;
				obj.onfocus=function(){
					if(!flag){
						obj.value='';
					}
				}
				obj.onblur=function(){
//					if(obj.value==''){
//						a[1].innerHTML='请输入想要设置的密码 * 注字母数字下划线组合'
//					}else if(obj.value.length<=16&&obj.value.length>=7){
//						a[1].innerHTML='输入正确';
//						a[1].style.color='green';
//						pas1=obj.value;
//						flag=true;
//					}else{
//						a[1].innerHTML='请输入7-16位密码';
//					}
					var re=/^\w{6,16}$/
					var str=obj.value;
					if(obj.value==''){
						a[1].innerHTML='请输入想要设置的密码 * 注字母数字下划线组合'
					}else if(re.test(str)==true){
						a[1].innerHTML='输入正确';
						a[1].style.color='green';
						pas1=obj.value;
						flag=true;
					}else{
						a[1].innerHTML='请输入6-16位密码';
					}
				}
			
			}
			fn2(pass1,passage);
//----------------------------确认密码-----------------------

			var pass2=document.getElementById('password2');
			var pas2;
			function fn3(obj,a){
				var flag=false;
				obj.onfocus=function(){
					if(!flag){
						obj.value='';
					}
				}
				obj.onblur=function(){
//					if(obj.value==''){
//						a[2].innerHTML='请输入想要设置的密码 * 注任意组合'
//					}else if(obj.value.length<=16&&obj.value.length>=7){
//						if(password1.value==obj.value){
//							a[2].innerHTML='输入正确';
//							a[2].style.color='green';
//							pas2=obj.value;
//							flag=true;
//						}else{
//							a[2].innerHTML='两次密码不相同';
//						}
//					}else{
//						a[2].innerHTML='请输入7-16位密码';
//					}
					var re=/^\w{6,16}$/
					var str=obj.value;
					if(obj.value==''){
						a[2].innerHTML='请输入想要设置的密码 * 注字母数字下划线组合'
					}else if(re.test(str)==true){
						if(password1.value==obj.value){
							a[2].innerHTML='输入正确';
							a[2].style.color='green';
							pas2=obj.value;
							flag=true;
						}else{
							a[2].innerHTML='两次密码不相同';
						}
					}else{
						a[2].innerHTML='请输入6-16位密码';
					}
				}
			
			}
			fn3(pass2,passage);			
//----------------------------手机号-----------------------

			var pho=document.getElementById('phone');
			function fn4(obj,a){
				var flag=false;
				obj.onfocus=function(){
					if(!flag){
						obj.value='';
					}
				}
				obj.onblur=function(){
					if(obj.value==''){
						a[3].innerHTML='请输入您的手机号'
					}else if(isNaN(obj.value)){
						a[3].innerHTML='请输入纯数字';
					}else{
						if(obj.value.length==11){
							a[3].innerHTML='输入正确';
							a[3].style.color='green';
							flag=true;
						}else{
							a[3].innerHTML='请输入正确手机号';
						}
					}
				}
			
			}
			fn4(pho,passage);			
//---------------------------验证码-------------1234---------			
			
			var num=document.getElementById('shu');
			function fn5(obj,a){
				var flag=false;
				obj.onfocus=function(){
					if(!flag){
						obj.value='';
					}
				}
				obj.onblur=function(){
					if(obj.value==''){
						a[4].innerHTML='请输入验证码'
					}else if(isNaN(obj.value)){
						a[4].innerHTML='请输入纯数字';
					}else{
						if(obj.value==1234){
							a[4].innerHTML='输入正确';
							a[4].style.color='green';
							flag=true;
						}else{
							a[4].innerHTML='请输入1234';
						}
					}
				}
			
			}
			fn5(num,passage);
//---------------------------登录---------------------					
			var jin=document.getElementById('join');
			function fn6(obj,b){
				obj.onclick=function(){
					if(b[0].innerHTML=='输入正确'&&
					b[1].innerHTML=='输入正确'&&
					b[2].innerHTML=='输入正确'&&
					b[3].innerHTML=='输入正确'&&
					b[4].innerHTML=='输入正确'){
						location.href="index.html"
						var date=new Date();
						date.setDate(date.getDate()+30);
//						document.cookie="username="+name+";expires="+date+";path=/";
//						document.cookie="password1="+pas1+";expires="+date+";path=/";
//						document.cookie="password2="+pas2+";expires="+date+";path=/";
//'{username:"'+name+'",password1:"'+pas1+'"}'
						document.cookie="key" + '=' + '{username:"'+name+'",password1:"'+pas1+'"}'
						+";expires="+date+";path=/";
					}
					console.log(document.cookie)
				}
			}
			fn6(jin,passage);
			
	
			
			
			
			
			
			
			
			
			
			


