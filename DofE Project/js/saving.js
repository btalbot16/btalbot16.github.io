function resetPlayer(){
	localStorage.clear()
	
	wu="False"
	su="False"
	
	location.reload()
}

function savePlayer(){
	x = btoa(JSON.stringify(player))
	y = btoa(JSON.stringify(jobs))
	
	localStorage.setItem("savedata",x)
	localStorage.setItem("jobdata",y)
}

window.onload=function(){
	player = JSON.parse(atob(localStorage.getItem("savedata")))
	jobs = JSON.parse(atob(localStorage.getItem("jobdata")))
	upd()
}