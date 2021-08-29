class Game {
  constructor() {}

  getState(){
    var gameStateRef = database.ref("gameState");
    gameStateRef.on("value", function(data){
      gameState = data.val()
    })
  }

  updateState(state) {
    database.ref("/").update({
      gameState: state
    })
  }

  start(){
    
    player = new Player();
    playerCount = player.getCount();
    
    form= new Form();
    form.display();

    c1 = createSprite(width/2 - 100,height-100);
    c1.addImage("car1",c1I);
    c1.scale = 0.07;

    c2 = createSprite(width/2 + 100,height-100);
    c2.addImage("car2",c2I);
    c2.scale = 0.07;

    cars = [c1,c2];
    
  }

  handleElements(){
    form.hide();
    form.titleImg.position(40,50);
    form.titleImg.class("gameTitleAfterEffect");
  }

  play(){
    this.handleElements();
    Player.getPlayersInfo();
    if(allPlayers !== undefined){
      //image(image_variable, x-position, y-position, width_of_the_image, height_of_the_image)
      image(t1I,0,-height*5,width,height*6);
      drawSprites();
    }
  }

}
