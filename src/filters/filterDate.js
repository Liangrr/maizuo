export default {
	install(Vue){
		Vue.filter('format-date',function(value,time='day'){
			let mydate = new Date(value);
//          	过滤出来月日
			if (time == 'day') {
				let month = mydate.getMonth()+1;
            	let day = mydate.getDate();
            	return month+'月'+day+'日上映';
//          	过滤出来星期
			}else if(time == 'week'){
				let arr = ['日','一','二','三','四','五','六'];
				let week = mydate.getDay();
				return '星期'+arr[week]+'上映';
			}
		})
	}
}
