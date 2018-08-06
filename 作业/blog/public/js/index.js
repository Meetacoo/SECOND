(function($){
	var $login = $('.login');
	var $register = $('.register');
	var $userInfo = $('.user-info');
	// console.log($register);
	$('#register').on('click',()=>{
		$login.hide();
		$register.show();
	})

	$('#login').on('click',()=>{
		$register.hide();
		$login.show();
	})

	/*$('#logout').on('click',()=>{
		$userInfo.hide();
		$login.show();
	})*/
 
	// 验证
	function check(){
		// 验证的正则
		var usernameReg = /^[a-z][a-z|0-9|_]{1,9}$/i;
		var passwordReg = /^\w{6,10}$/;
		// 用户注册
		$('.register-btn').on('click',()=>{
			var username = $('#register-username').val();
			var password = $('#register-password').val();
			var repassword = $('#repassword').val();
			var errmsg = '';
			// console.log(username);
			// 首字母，可有数字下划线，2-10个字符
			if (!usernameReg.test(username)) {
				errmsg = '首字母，可有数字下划线，2-10个字符';
				console.log('首字母，可有数字下划线，2-10个字符');
			}
			// 密码6-10个字符
			else if (!passwordReg.test(password)) {
				errmsg = '6-10个字符';
				console.log('6-10个字符');
			}
			else if (password != repassword) {
				errmsg = '密码不等';
				console.log('密码不等');
			}
			else {
				console.log('right');
			}

			if (errmsg) {
				$register.find('.err').html(errmsg);
				return;
			} else {
				$register.find('.err').html('');
				$.ajax({
					url:'/user/register',
					type:'POST',
					dataType:'json',
					data:{
						username:username,
						password:password
					}
				})
				.done((result)=>{
					if (result.code === 0) {
						$('#login').trigger('click');
					} else {
						$register.find('.err').html(result.message);
					}
				})
				.fail((err)=>{
					console.log(err);
				})
			}
		})

		// 用户登录
		$('.sub-btn').on('click',()=>{
			var username = $('#username').val();
			var password = $('#password').val();
			var errmsg = '';
			// console.log(username);
			// 首字母，可有数字下划线，2-10个字符
			if (!usernameReg.test(username)) {
				errmsg = '首字母，可有数字下划线，2-10个字符';
				console.log('首字母，可有数字下划线，2-10个字符');
			}
			// 密码6-10个字符
			else if (!passwordReg.test(password)) {
				errmsg = '6-10个字符';
				console.log('6-10个字符');
			}
			else {
				console.log('right');
			}

			if (errmsg) {
				$login.find('.err').html(errmsg);
				return;
			} else {
				$login.find('.err').html('');
				$.ajax({
					url:'/user/login',
					type:'POST',
					dataType:'json',
					data:{
						username:username,
						password:password
					}
				})
				.done((result)=>{
					console.log(result)
					if (result.code === 0) {
						/*
						// 有问题
						$login.hide();
						$userInfo.find('span').html(result.data.username);
						$userInfo.show();
						*/
						window.location.reload();
					} else {
						// console.log(result.message);
						$login.find('.err').html(result.message);
					}
				})
				.fail((err)=>{
					console.log(err);
				})
			}
		})
	}

	$('#logout').on('click',()=>{
		$.ajax({
			url:'/user/logout',
			dataType:'json',
			type:'get'
		})
		.done((result)=>{
			if (result.code === 0) {
				window.location.reload();
			}
		})
		.fail((err)=>{
			console.log(err);
		})
		/*$userInfo.hide();
		$login.show();*/
	})

	check();
})(jQuery)