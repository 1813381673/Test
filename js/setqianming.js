				//修改签名实现
				
				function resetqianming(){
					var input = $("<input type=text placeholder=修改签名..>");
					$(this).replaceWith(input);
					input.blur(function(){
						console.log('测试事件');
						var text = $(this).val();						
						if(text!=null &&text!=""){
							console.log(text);
							/*
							吐了 必须创建俩span对象才能替换  创建一个替换 总会发生错误
							可能脚本语言就是这样
							*/
							var span1 = $("<span>"+text+"(点击修改)</span>");
							span1.click(resetqianming);
							var span2 = $("<span>"+text+"(点击修改)</span>");
							span1.click(resetqianming);
							$(this).replaceWith(span1);							
							$(".qianming").replaceWith(span2);
						}else{
							var span1 = $("<span>编辑个性签名...</span>");
							var span2 = $("<span>编辑个性签名...</span>");
							span1.click(resetqianming);
							$(this).replaceWith(span1);
							$(".qianming").replaceWith(span2);
						}					
					});
				}