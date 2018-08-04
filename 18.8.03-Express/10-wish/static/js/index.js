(
	function($){
		function getRandom(min,max){
			return Math.round(min + (max - min) * Math.random());
		}
		let $wall = $('.wall');
		let $wish = $('.wish');
		let $wallWidth = parseInt($wall.css('width'));
		let $wallHeight = parseInt($wall.css('height'));
		let $wishWidth = parseInt($wish.css('width'));
		let $wishHeight = parseInt($wish.css('height'));

		let handlepep = ($elem) =>{
			$(document).ready(function(){
				$('.wish').pep({constrainTo: '.wall'});
			})
			$elem.each(function(){
				$(this).css({
					'transform': 'matrix(1,0,0,1,'+getRandom(0,(300))+','+getRandom(0,(200))+')'
				})
			})
			$elem.hover(function(){
				$(this).css({
					'zIndex':1
				})
			},function(){
				$(this).css({
					'zIndex':0
				})
			});
		}
		handlepep($wish);
		

		$wall.on('click','.close',function(){
			console.log($(this).data('id'));
			var $this = $(this);
			var self = this;
			$.ajax({
				url:'/Wish/del/' + $this.data('id'),
				// data: 'id=' + $this.data('id'),
				dataType:'json',
				type:"delete"
			})
			.done(function(data){
				if (data.status == 0) {
					$(self.parentNode).remove();
				}
			})
		})
		// 1.增加许愿卡
		$('.btn').on('click',function(){
			let val = $('#content').val();
			$.ajax({
				url:'/Wish/add',
				data:{content:val},
				dataType:'json',
				type:'POST'
			})
			.done(function(data){
				//填充数据到dom节点并且插入
				// console.log('data:::',data);
				if (status == 0) {
					let $dom = $(`<div class="wish" style="background: ${data.data.color}">
									<a href="#" class="close fr" data-id="${data.data._id}">X</a>
									${data.data.content}
								</div>`);
					$wall.append($dom);
					handlepep($dom);
					$('#content').val('');
				}else{
					alert('failed...');
				}
			})
		})
	}

)(jQuery)
