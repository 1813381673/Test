function insert(username0){
	console.log(username0);
	var peoples=[
		{username:username0,connectpeople:'张三',head:'Images/img01.png',group:'家人'},
		{username:username0,connectpeople:'小红',head:'Images/img02.png',group:'家人'},
		{username:username0,connectpeople:'妮妮',head:'Images/img03.png',group:'家人'},
		{username:username0,connectpeople:'小明',head:'Images/img04.png',group:'家人'},
		{username:username0,connectpeople:'赵飞燕',head:'Images/img05.png',group:'朋友'},
		{username:username0,connectpeople:'李飞',head:'Images/img06.png',group:'朋友'},
		{username:username0,connectpeople:'杨玉环',head:'Images/img06.png',group:'朋友'},
		{username:username0,connectpeople:'贾员外',head:'Images/img06.png',group:'朋友'},
		{username:username0,connectpeople:'李氏',head:'Images/img06.png',group:'同学'},
		{username:username0,connectpeople:'杨四',head:'Images/img06.png',group:'同学'},
		{username:username0,connectpeople:'李四',head:'Images/img06.png',group:'同学'},
		
	]
	var request = window.indexedDB.open("User");
	request.onerror = function (e) {
		console.log('数据库打开报错');
	};
	var db;
	request.onsuccess = function(e){				
		db = request.result;
		console.log('数据库打开成功');
		var tx = db.transaction(['ConnectPeople'], 'readwrite');
		var eq;
		for(var i=0;i<peoples.length;i++){
			var store = tx.objectStore('ConnectPeople');
			eq=store.add(peoples[i]);													
		}
		eq.onsuccess = function(){
			console.log(peoples[i]+'添加成功!');	
		}
		
	};
	// request.onupgradeneeded = function(e){
	// 	db = e.target.result;
	// 	//删除数据库
	// 	//db.deleteObjectStore('ConnectPeople');
	// 	if(!db.objectStoreNames.contains('ConnectPeople')){
	// 		var objectStore = db.createObjectStore('ConnectPeople', { keyPath: 'connectpeople' });
	// 		objectStore.createIndex('username','username',{unique:false});
	// 	}
	// 	 // 创建索引
	// 	/* objectstore.createIndex('ageIndex','age',{unique:false});
	// 	objectstore.createIndex('nameIndex','name',{unique:true});
	// 	objectstore.createIndex('hobbyIndex','hobby',{unique:false});
	// 	objectstore.createIndex('sexIndex','sex',{unique:false}); */
	// };	
}
