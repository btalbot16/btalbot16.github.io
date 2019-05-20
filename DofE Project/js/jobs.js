//Farmer Job
get("farmerPlus").onclick=function(){
	if(jobs.available>0){
		jobs.farmer+=1;
		jobs.assigned+=1;
		upd()
	}
}
get("farmerMinus").onclick=function(){
	if(jobs.farmer>0){
		jobs.farmer-=1;
		jobs.assigned-=1;
	}
}
//Miner Job
get("minerPlus").onclick=function(){
	if(jobs.available>0){
		jobs.miner+=1;
		jobs.assigned+=1;
		upd()
	}
}
get("minerMinus").onclick=function(){
	if(jobs.miner>0){
		jobs.miner-=1;
		jobs.assigned-=1;
	}
}
//Lumber Job
get("lumberPlus").onclick=function(){
	if(jobs.available>0){
		jobs.lumber+=1;
		jobs.assigned+=1;
		upd()
	}
}
get("lumberMinus").onclick=function(){
	if(jobs.lumber>0){
		jobs.lumber-=1;
		jobs.assigned-=1;
	}
}
//Trader Job
get("traderPlus").onclick=function(){
	if(jobs.available>0){
		jobs.trader+=1;
		jobs.assigned+=1;
		upd()
	}
}
get("traderMinus").onclick=function(){
	if(jobs.trader>0){
		jobs.trader-=1;
		jobs.assigned-=1;
	}
}

//Job Loop / Every Second
function updJ(){
	if(jobs.farmer>0){
		player.resources.food+=(jobs.farmer*3)
	}
	if(jobs.lumber>0){
		player.resources.wood+=(jobs.lumber*4)
	}
	if(jobs.miner>0){
		player.resources.stone+=(jobs.miner*2)
	}
	if(jobs.trader>0){
		player.government.money+=jobs.trader
	}
}




