function showlist(username0){
	var request = window.indexedDB.open("User");
	request.onerror = function (e) {
		console.log('数据库打开报错');
	};
	var db;
	request.onsuccess = function(e){
		db = request.result;
		console.log('数据库打开成功');
		var tx = db.transaction(['ConnectPeople'], 'readwrite');
		var store = tx.objectStore('ConnectPeople');
		var nameindex = store.index('username');
		var eq = nameindex.openCursor(IDBKeyRange.only(username0));
		eq.onsuccess = function(e){
			var cursor = e.target.result;	
			if(cursor){	
				var connectpeople = cursor.value.connectpeople;
				var head = cursor.value.head;
				var group = cursor.value.group;	
				// var liclass = "online ui-li-has-thumb";
				// var aclass = "ui-btn ui-btn-icon-right ui-icon-carat-r";
				var li = $("<li ><p class=ui-li-aside><strong>离线</strong></p></li>");
				var a = $("<a ><img src="+head+">"+connectpeople+"</a>");
				li.attr('class','underline ui-li-has-thumb');
				a.attr('class','ui-btn ui-btn-icon-right ui-icon-carat-r');
				li.prepend(a);
				$(li).bind("taphold",function(){
					console.log("测试长按"); 						
					var se=confirm("确认删除此联系人？");
					if (se==true) {
						$(this).remove();
					 	console.log('确定删除了!');
					}
					
				});	
				var i = 0;
				$(li).on('click', function () {
					i++;
					setTimeout(function () {
						i = 0;
					}, 500);
					if (i > 1) {
						location.href="#page4";
						var name = $(this).children().eq(0).html().split('>')[1];
						console.log(name);
						$("#header4>p").html(name+"(右滑返回)");
						i = 0;
					}
				});
				if(group=='同学'){	
					console.log(li);
					console.log(connectpeople);
					$(".tongxue").append(li);					
					
				}else if(group=='家人'){
					$(".jiaren").append(li);
					
				}else{
					$(".pengyou").append(li);
										
				}
				console.log('下一个');
				
				cursor.continue();
			}else{
				console.log("没有数据了");
			}
			$(".tongxue>li").eq(0).attr('class','online ui-li-has-thumb');
			$(".tongxue>li").eq(0).children().eq(1).children().eq(0).html('在线');
			$(".tongxue>li").eq(1).attr('class','online ui-li-has-thumb');
			$(".tongxue>li").eq(1).children().eq(1).children().eq(0).html('在线');
			$(".pengyou>li").eq(0).attr('class','online ui-li-has-thumb');
			$(".pengyou>li").eq(0).children().eq(1).children().eq(0).html('在线');
			$(".pengyou>li").eq(1).attr('class','online ui-li-has-thumb');
			$(".pengyou>li").eq(1).children().eq(1).children().eq(0).html('在线');
			$(".jiaren>li").eq(0).attr('class','online ui-li-has-thumb');
			$(".jiaren>li").eq(0).children().eq(1).children().eq(0).html('在线');
			$(".jiaren>li").eq(1).attr('class','online ui-li-has-thumb');
			$(".jiaren>li").eq(1).children().eq(1).children().eq(0).html('在线');
		};
	};
	
	// request.onupgradeneeded = function(e){
	// 	db = e.target.result;
	// 	//删除数据库
	// 	//db.deleteObjectStore('ConnectPeople');
	// 	if(!db.objectStoreNames.contains('User')){
	// 		var objectStore = db.createObjectStore('User', { keyPath: 'username' });
	// 	}
	// 	 // 创建索引
	// 	/* objectstore.createIndex('ageIndex','age',{unique:false});
	// 	objectstore.createIndex('nameIndex','name',{unique:true});
	// 	objectstore.createIndex('hobbyIndex','hobby',{unique:false});
	// 	objectstore.createIndex('sexIndex','sex',{unique:false}); */
	// };	
}
				