class Player {
  constructor(){}

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",function(data){
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){

    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance
    });
  }
static  getPlayerinfo(){

    var Playerinforef=database.ref('players');
Playerinforef.on("value",(data)=>{
allPlayers=data.val();

})

  }

}
