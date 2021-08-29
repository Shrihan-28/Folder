class Player {
  constructor() {
    this.name = null;
    this.index = null;
    this.positionX = 0;
    this.positionY = 0;
  }

  addPlayer(){
    var playerIndex = "allPlayers/player" + this.index;

    if(this.index === 1){
      this.positionX = width/2 - 100;
    }
    else{
      this.positionX = width/2 + 100;
    }

    database.ref(playerIndex).set({
      name:this.name, 
      positionX: this.positionX, 
      positionY: this.positionY
    })
  }

  getCount(){
    var playerCountRef = database.ref("playerCount");
    playerCountRef.on("value", function(data) {
      playerCount = data.val();
    });
  }

  updateCount(count){
    database.ref("/").update({
      //exact name of the value in database: parameter variable
      playerCount: count
    })
  }

  static getPlayersInfo(){
    var playerInfoRef = database.ref("allPlayers");
    playerInfoRef.on("value",function(data){
      allPlayers = data.val();
    })
  }
}
