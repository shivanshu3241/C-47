class Player
 {
    constructor()
    {
     this.player = createSprite(600, 400, 33, 33); 
    }
    

    play()
    {
        if(keyDown(UP_ARROW))
        {
           player.player.y = player.player.y-8;
        }
      
        if(keyDown(DOWN_ARROW))
        {
          player.player.y = player.player.y+8;
        }
      
        if(keyDown(LEFT_ARROW))
        {
          player.player.x = player.player.x-8;
        }
      
        if(keyDown(RIGHT_ARROW))
        {
          player.player.x = player.player.x+8;
        }
        //arrow.x = player.player.x;
        //arrow.y = player.player.y;

        if(player.player.isTouching(arrow)){
          arrow.visible = false;
        }
   }
}