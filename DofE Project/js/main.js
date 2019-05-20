function get(a){return document.getElementById(a)}
function upd(){
	html.population.innerHTML="population: "+player.government.population+" / "+player.government.populationMax;
	html.jobsPopulation.innerHTML="available: "+ga();
	
	html.farmer.innerHTML=jobs.farmer
	html.lumber.innerHTML=jobs.lumber
	html.miner.innerHTML=jobs.miner
	html.trader.innerHTML=jobs.trader
	
	if(jobs.farmer==0){
		html.food.innerHTML="food: "+player.resources.food
	} else if((jobs.farmer*3)-(player.government.population)>0){
		html.food.innerHTML="food: "+player.resources.food+" (+"+((jobs.farmer*3)-(player.government.population)+3)+"/sec)"
	} else {
		html.food.innerHTML="food: "+player.resources.food+" ("+((jobs.farmer*3)-(player.government.population)+3)+"/sec)"
	}
	if(jobs.lumber==0){
		html.wood.innerHTML="wood: "+player.resources.wood
	} else {
		html.wood.innerHTML="wood: "+player.resources.wood+" (+"+ jobs.lumber*4 +"/sec)"
	}
	if(jobs.stone==0){
		html.stone.innerHTML="stone: "+player.resources.stone
	} else {
		html.stone.innerHTML="stone: "+player.resources.stone+" (+"+ jobs.miner*2 +"/sec)"
	}
	if(jobs.trader==0){
		html.money.innerHTML="money: $"+player.government.money
	} else {
		html.money.innerHTML="money: $"+player.government.money+" (+"+ jobs.trader*1 +"$/sec)"
	}
	
	jobs.available=ga()
	
	if(wu==="True"){get("wood").style.display=""}
	if(su==="True"){get("stone").style.display=""}
}

//Options / Header Buttons

//get("headerTitle").onmouseover=function(){get("headerName").style.display=""}
//get("headerTitle").onmouseout=function(){get("headerName").style.display="none"}

wu="False"
su="False"

get("saveBtn").onclick=function(){
	get("savePopup").style.display=""
	savePlayer()
	window.setTimeout(function(){get("savePopup").style.display="none"}, 1000)
}
get("optionsBtn").onclick=function(){
	if(get("buildingBuy").style.display==""){
		return;
	} else {
		get("options").style.display=""
	}
}
get("closeOptions").onclick=function(){
	get("options").style.display="none"
}

get("buyBuilding").onclick=function(){
	if(get("options").style.display==""){
		return;
	} else {
		get("buildingBuy").style.display=""
	}
}
get("closeBuildingBuy").onclick=function(){
	get("buildingBuy").style.display="none"
}
get("resetBtn").onclick=function(){
	if(confirm("Are you sure! This is your only warning.")){
		resetPlayer()
	}
}

//Player Object

player = {
	government: {
		population: 1,
		populationMax: 5,
		money: 10
	},
	resources: {
		food: 0,
		wood: 0,
		stone: 0,
	},
	buildings: {
		huts: 0
	}
};

jobs = {
	assigned: 0,
	available: ga(),
	farmer: 0,
	lumber: 0,
	miner: 0,
	trader: 0
}

html = {
	population: get("population"),
	food: get("food"),
	jobsPopulation: get("populationJob"),
	
	farmer: get("farmer"),
	lumber: get("lumber"),
	miner: get("miner"),
	trader: get("trader"),
	
	wood: get("wood"),
	stone: get("stone"),
	money: get("money")
}

function ga(){return player.government.population-jobs.assigned;}
//Main Timer

window.setInterval(function(){
	player.resources.food++;
	
	player.resources.food-=player.government.population
	
	if(Math.random()<0.05){
		if(player.government.population<player.government.populationMax){
			player.government.population++;
		}
	}
	
	if(player.resources.wood>0){
		wu="True"
	}
	if(player.resources.stone>0){
		su="True"
	}
	
	if(wu==="True"){
		get("wood").style.display=""
	}
	if(su==="True"){
		get("stone").style.display=""
	}
	
	updJ()
},1000)

window.setInterval(upd,10)

window.setInterval(function(){
	savePlayer()
}, 10000)
