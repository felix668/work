(async(){
	function promisefn(url){
		return new Promise(function(resolve,reject){
			$.ajax({
				url: url,
				success:function(){
					resolve(response);
				},
				error:function(){
					reject("error");
				});
			});
			
		});
	}
	const a1=await promisefn('http://www.xxx.com/a');
	const a2=await promisefn('http://www.xxx.com/p');
	let p=a1+a2;
	console.log(p);
})();