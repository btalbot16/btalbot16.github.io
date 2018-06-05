function a(id){return document.getElementById(id)};
var game = {
	replicanti: {
		display: a("replicanti"),
		amount: new Decimal(1),
		chance: new Decimal(10)
	},
	updateHTML: function(){
		game.replicanti.display.innerHTML = game.replicanti.amount.floor();
	},
	replicantiUpdate: function(){
		window.setInterval(function(){
			console.log(10^game.replicanti.amount.logarithm)
		},1000)
	}	
}

game.replicantiUpdate()

console.log(game.replicanti.amount)
