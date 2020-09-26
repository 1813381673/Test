function register(username0,psw0,nicheng0){
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
		var eq = store.add({username:username0,password:psw0,name:nicheng0});
		eq.onsuccess = function(){
			alert("注册成功,返回登录!");
			console.log('添加成功');
			location.href="index.html";
		};
	};
	request.onupgradeneeded = function(e){
		db = e.target.result;
		if(!db.objectStoreNames.contains('User')){
			var objectStore = db.createObjectStore('User', { keyPath: 'username' });
		}
		
		if(!db.objectStoreNames.contains('ConnectPeople')){
			var objectStore = db.createObjectStore('ConnectPeople', { autoIncrement: true });
			objectStore.createIndex('username','username',{unique:false});
		}
		 // 创建索引
		/* objectstore.createIndex('ageIndex','age',{unique:false});
		objectstore.createIndex('nameIndex','name',{unique:true});
		objectstore.createIndex('hobbyIndex','hobby',{unique:false});
		objectstore.createIndex('sexIndex','sex',{unique:false}); */
	};	
}