class Form {
  constructor() {
    this.input = createInput("").attribute("placeholder","Name");
    this.button = createButton("Play");
    this.titleImg = createImg("./assets/title.png","game title");
    this.greet = createElement("h4")
  }

  setElementPosition(){
    this.titleImg.position(120,160);
    this.input.position(width/2-100,height/2-80);
    this.button.position(width/2-80,height/2-20);
    this.greet.position(width/2-300,height/2-80);
  }

  setElementStyle(){
    this.titleImg.class("gameTitle");
    this.input.class("customInput");
    this.button.class("customButton");
    this.greet.class("greeting");
  }

  hide(){
    this.greet.hide();
    this.button.hide();
    this.input.hide();
  }

  handleMousePressed(){
    this.button.mousePressed(() => {
      this.input.hide();
      this.button.hide();
      var message = `Hello ${this.input.value()} </br> Wait for another player to join...`;
      this.greet.html(message);
      playerCount += 1;
      player.name = this.input.value();
      player.index = playerCount;
      player.addPlayer();
      player.updateCount(playerCount);
    });
  }

  display(){
    this.setElementPosition();
    this.setElementStyle();
    this.handleMousePressed();
  }
}
