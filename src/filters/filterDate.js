export default {
	install(Vue){
		Vue.filter('format-date',function(value){
            let mydate = new Date(value);
            let month = mydate.getMonth()+1;
            let day = mydate.getDate();
			return month+'月'+day+'日上映';
		})
	}
}
