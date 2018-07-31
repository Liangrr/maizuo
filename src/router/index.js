import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'

Vue.use(Router)

import Location from '@/components/Location'
import Cinema from '@/components/Cinema'
import Film from '@/components/Film'
import My from '@/components/My'
import mzCar from '@/components/mzCar'
import Person from '@/components/Person'
import Shop from '@/components/Shop'

const routes = [
	{
	  path: '/home',
	  name: 'home',
	  component: Home,
	  children:[
	  	{
	  		path: '/home/Location',
	  		name:'locat',
	    	component: Location
	  	},
	  	{
	  		path: '/home/Person',
	  		name:'person',
	    	component: Person
	  	},
	  	{
	  		path: '/home/Cinema',
	  		name:'cinema',
	    	component: Cinema
	  	},
	  	{
	  		path: '/home/Film',
	  		name:'film',
	    	component: Film
	  	},
	  	{
	  		path: '/home/My',
	  		name:'my',
	    	component: My
	  	},
	  	{
	  		path: '/home/mzCar',
	  		name:'mzCar',
	    	component: mzCar
	  	},
	  	{
	  		path: '/home/Shop',
	  		name:'shop',
	    	component: Shop
	  	},
	  ]
	},
	{
		path:'**',
		redirect: '/home'
	}
]

export default new Router({
	routes
})
