function login(username0,psw0){
	var request = window.indexedDB.open("User");
	request.onerror = function (e) {
		console.log('数据库打开报错');
	};
	var db;
	request.onsuccess = function(e){
		db = request.result;
		console.log('数据库打开成功');
		var tx = db.transaction(['User'], 'readwrite');
		var store = tx.objectStore('User');
		var eq = store.get(username0);
		console.log(eq);
		eq.onsuccess = function(){
			console.log('查询成功!');	
			try{
				if(eq.result.password==psw0){
					location.href="#page2";	
				}else{
					alert("密码错误!");
					$("#psw").focus();
					return false;
				}
			}catch(e){
				console.log('查询失败!');
				alert("账号不存在！");
				$("#name").focus();
				return false;
			}
													
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
