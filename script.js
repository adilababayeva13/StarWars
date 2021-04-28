//Animation for the intro quote
const text=document.querySelector(".quotes");
const content=text.textContent;
const splitText=content.split("");
text.textContent="";

for(let i=0; i<splitText.length;i++){
    text.innerHTML+="<span>"+splitText[i]+"</span>";
}
let char=0;
let timer=setInterval(onTick,50);

function onTick(){
    const span =text.querySelectorAll('span')[char];
    span.classList.add('fade');
    char++
    if(char ===splitText.length){
        complete();
        return;
    }
}
function complete(){
    clearInterval(timer);
    timer=null;
}

// Vanish the intro
$("#introBTN").click(function(){
    $(".intro").css("opacity","0");
    $(".intro").css("pointer-events","none");
    $(".ChooseEnemyPage").css("opacity","1");
    $(".ChooseEnemyPage").css("pointer-events","all");
  });  

// second page elements
var IMG1=$("#1");
var IMG2=$("#2");
var IMG3=$("#3");
var IMG4=$("#4");
var counter=0;
var player=[];
var enemy=[];
var a1=0;
var a2=0;
var a3=0;
var a4=0;
IMG1.on("click",function(){
a1=1;
$("#secondText").css("color","yellow");
$("#secondText").html("PLEASE CHOOSE YOUR ENEMY");
counter++;
if(counter==1){
 
   player.push("1");
   console.log(player[0]);
   IMG1.remove();

}
if(counter==2){
  
    $("#secondText").html("");
    $(".box-2").css("pointer-events","all");  
    $(".box-2").css("opacity","1");  
    enemy.push("1");
    console.log(enemy[0]);
    IMG2.css("pointer-events","none");
    IMG3.css("pointer-events","none");
    IMG4.css("pointer-events","none");
    IMG1.remove();
}
});

IMG2.on("click",function(){
    a2=1;
    $("#secondText").css("color","yellow");
    $("#secondText").html("PLEASE CHOOSE YOUR ENEMY");
    counter++;
    if(counter==1){
 
        player.push("2");
        console.log(player[0]);
        IMG2.remove();
     }
    if(counter==2){
        $("#secondText").html("");
        $(".box-2").css("pointer-events","all");  
        $(".box-2").css("opacity","1");  
        enemy.push("2");
    console.log(enemy[0]);
    IMG1.css("pointer-events","none");
    IMG3.css("pointer-events","none");
    IMG4.css("pointer-events","none");
    IMG2.remove();
    }
    });

    IMG3.on("click",function(){
        a3=1;
        $("#secondText").css("color","yellow");
        $("#secondText").html("PLEASE CHOOSE YOUR ENEMY");
        counter++;
        if(counter==1){
 
            player.push("3");
            console.log(player[0]);
            IMG3.remove();
         }
        if(counter==2){
            $("#secondText").html("");
            $(".box-2").css("pointer-events","all");  
            $(".box-2").css("opacity","1");  
            enemy.push("3");
    console.log(enemy[0]);
    IMG2.css("pointer-events","none");
    IMG1.css("pointer-events","none");
    IMG4.css("pointer-events","none");
    IMG3.remove();
        }
        });

        IMG4.on("click",function(){
            a4=1;
            $("#secondText").css("color","yellow");
            $("#secondText").html("PLEASE CHOOSE YOUR ENEMY");
            counter++;
            if(counter==1){
 
                player.push("4");
                console.log(player[0]);
                IMG4.remove();
             }
            if(counter==2){
                $("#secondText").html("");
                $(".box-2").css("pointer-events","all");  
    $(".box-2").css("opacity","1");  
    enemy.push("4");
    console.log(enemy[0]);
    IMG2.css("pointer-events","none");
    IMG3.css("pointer-events","none");
    IMG1.css("pointer-events","none");
    IMG4.remove();
            }

            
            });

// click the play button to go the next page , third page 
$(".box-2").on("click", function(){
    $(".ChooseEnemyPage").css("opacity","0");
    $(".ChooseEnemyPage").css("pointer-events","none");
    $(".Fight").css("opacity","1");
    $(".Fight").css("pointer-events","all");
    var x = document.getElementById("myAudio"); 
     x.play(); 
   if(player[0] == 1){
    $(".scor1").html("120"); 
    $(".img1").css("opacity","0.5");
   }
   if(player[0] == 2){
    $(".scor1").html("180"); 
    $(".img2").css("opacity","0.6");
   }
   if(player[0] == 3){
    $(".scor1").html("150"); 
    $(".img3").css("opacity","0.7");
   }
   if(player[0] == 4){
    $(".scor1").html("100");
    $(".img4").css("opacity","0.6"); 
   }


   if(enemy[0] == 1){
    $(".scor2").html("120"); 
    $(".left1").css("opacity","0.5");
   }
   if(enemy[0] == 2){
    $(".scor2").html("180"); 
    $(".left2").css("opacity","0.6");
   }
   if(enemy[0] == 3){
    $(".scor2").html("150"); 
    $(".left3").css("opacity","0.7");
   }
   if(enemy[0] == 4){
    $(".scor2").html("100"); 
    $(".left4").css("opacity","0.6");
   }
});  


//third part buttons' events

// 1.
$(".health").on("click", function(){
    var newScore= $(".scor1").text();
    newScore=parseInt(newScore)+100;
    $(".scor1").html(newScore); 
    $(".health").css("pointer-events","none");
    $(".health").css("opacity","0.5");
});

// 2.
$("#saber").on("click", function(){
    var randomAttack=Math.floor(Math.random()*50)+1
    var newScore2= $(".scor2").text();
    newScore2=parseInt(newScore2) - randomAttack;
    $(".scor2").html(newScore2); 
    $(".crossed").css("opacity","0.5");
    var sound = document.getElementById("clash"); 
    sound.play(); 

    if(enemy[0] == 1){
        var newScore1= $(".scor1").text();
        newScore1=parseInt(newScore1) - 15;
        $(".scor1").html(newScore1); 
       }
       if(enemy[0] == 2){
        var newScore1= $(".scor1").text();
        newScore1=parseInt(newScore1) - 25;
        $(".scor1").html(newScore1); 
       }
       if(enemy[0] == 3){
        var newScore1= $(".scor1").text();
        newScore1=parseInt(newScore1) - 20;
        $(".scor1").html(newScore1); 
       }
       if(enemy[0] == 4){
        var newScore1= $(".scor1").text();
        newScore1=parseInt(newScore1) - 5;
        $(".scor1").html(newScore1); 
       }

       var newScore1= $(".scor1").text();
       newScore1=parseInt(newScore1);
       var newScore2= $(".scor2").text();
       newScore2=parseInt(newScore2);

       if( newScore1 <= 0){
           console.log("sifiran kicik olanda alinir");
           var x = document.getElementById("myAudio"); 
           x.pause();
           var y = document.getElementById("clash"); 
           y.pause();
           var z = document.getElementById("over"); 
           z.play();
           $(".Fight").css("opacity","0");
           $(".Fight").css("pointer-events","none");
           $(".ChooseEnemyPage").css("opacity","0");
           $(".ChooseEnemyPage").css("pointer-events","none");
           $(".intro").css("opacity","1");
           $(".intro").css("pointer-events","all");
           $("#introBTN").css("opacity","0");
           $("#introBTN").css("pointer-events","none");
           $(".quotes").html("YOU LOST ,GAME OVER!!!");
         

       }

       if( newScore2 <= 0){
           if(a1 ==1 && a2 ==1 && a3 ==1 && a4 ==1 ){
          
            var x = document.getElementById("myAudio"); 
            x.pause();
            var y = document.getElementById("clash"); 
            y.pause();
            var z = document.getElementById("winner"); 
            z.play();
            $(".Fight").css("opacity","0");
            $(".Fight").css("pointer-events","none");
            $(".ChooseEnemyPage").css("opacity","0");
            $(".ChooseEnemyPage").css("pointer-events","none");
            $(".intro").css("opacity","1");
            $(".intro").css("pointer-events","all");
            $("#introBTN").css("opacity","0");
            $("#introBTN").css("pointer-events","none");
            $(".quotes").html("CONGRATILATIONS!!!");
         
           }

           else{
      
    alert("YOU WON , GO TO THE CHOOSE YOUR NEW ENEMY !!!");
    $(".Fight").css("opacity","0");
    $(".Fight").css("pointer-events","none");
    $(".ChooseEnemyPage").css("opacity","1");
    $(".ChooseEnemyPage").css("pointer-events","all");
    $(".left4").css("opacity","0"); 
    $(".left1").css("opacity","0"); 
    $(".left2").css("opacity","0"); 
    $(".left3").css("opacity","0"); 
    IMG1.css("pointer-events","all");
    IMG2.css("pointer-events","all");
    IMG3.css("pointer-events","all");
    IMG4.css("pointer-events","all");
    $("#secondText").css("color","white");
    $("#secondText").html("YOUR NEXT ENEMY...");

    enemy.pop();
    player.pop();
    var enemy2=[];

    $(".box-2").css("pointer-events","none");  
    $(".box-2").css("opacity","0");  
   
    
    IMG1.on("click",function(){
        $("#secondText").html("");
        $(".scor2").html("120"); 
        $(".left1").css("opacity","0.5"); 
        enemy2.push("1");
         IMG2.css("pointer-events","none");
         IMG3.css("pointer-events","none");
         IMG4.css("pointer-events","none");
         $(".box-2").css("margin-top","0%");
       $(".box-2").css("pointer-events","all");  
       $(".box-2").css("opacity","1");  
         IMG1.remove();
        });
        
        IMG2.on("click",function(){
            $("#secondText").html("");
            $(".scor2").html("180"); 
            $(".left2").css("opacity","0.6"); 
            enemy2.push("2");
            IMG1.css("pointer-events","none");
         IMG3.css("pointer-events","none");
         IMG4.css("pointer-events","none");
            $(".box-2").css("pointer-events","all");  
            $(".box-2").css("opacity","1");  
            IMG2.remove();
            });
        
            IMG3.on("click",function(){
                $("#secondText").html("");
                $(".scor2").html("150"); 
                $(".left3").css("opacity","0.7"); 
                enemy2.push("3");
                IMG2.css("pointer-events","none");
         IMG1.css("pointer-events","none");
         IMG4.css("pointer-events","none");
         $(".box-2").css("margin-top","0%");
                $(".box-2").css("pointer-events","all");  
                $(".box-2").css("opacity","1");  
                IMG3.remove();
                });
        
                IMG4.on("click",function(){
                    $("#secondText").html("");
                    $(".scor2").html("100"); 
                    $(".left4").css("opacity","0.6"); 
                    enemy2.push("4");
                    IMG2.css("pointer-events","none");
                    IMG3.css("pointer-events","none");
                    IMG1.css("pointer-events","none");
                    $(".box-2").css("pointer-events","all");  
                    $(".box-2").css("opacity","1");  
                    IMG4.remove();
                });
    
                document.getElementById("saber").id = "saber2";

                $("#saber2").on("click", function(){
                    var randomAttack=Math.floor(Math.random()*50)+1
                    var newScore2= $(".scor2").text();
                    newScore2=parseInt(newScore2) - randomAttack;
                    $(".scor2").html(newScore2); 
                    $(".crossed").css("opacity","0.5");
                    var sound = document.getElementById("clash"); 
                    sound.play(); 

    if(enemy2[0] == 1){
        var newScore1= $(".scor1").text();
        newScore1=parseInt(newScore1) - 15;
        $(".scor1").html(newScore1); 
       
       }
       if(enemy2[0] == 2){
        var newScore1= $(".scor1").text();
        newScore1=parseInt(newScore1) - 25;
        $(".scor1").html(newScore1); 
        
       }
       if(enemy2[0] == 3){
        var newScore1= $(".scor1").text();
        newScore1=parseInt(newScore1) - 20;
        $(".scor1").html(newScore1); 
       
       }
       if(enemy2[0] == 4){
        var newScore1= $(".scor1").text();
        newScore1=parseInt(newScore1) - 5;
        $(".scor1").html(newScore1); 
       
       }

       if( newScore1 <= 0){
        console.log("sifiran kicik olanda alinir");
        var x = document.getElementById("myAudio"); 
        x.pause();
        var y = document.getElementById("clash"); 
        y.pause();
        var z = document.getElementById("over"); 
        z.play();
        $(".Fight").css("opacity","0");
        $(".Fight").css("pointer-events","none");
        $(".ChooseEnemyPage").css("opacity","0");
        $(".ChooseEnemyPage").css("pointer-events","none");
        $(".intro").css("opacity","1");
        $(".intro").css("pointer-events","all");
        $("#introBTN").css("opacity","0");
        $("#introBTN").css("pointer-events","none");
        $(".quotes").html("YOU LOST ,GAME OVER!!!");
      

    }

    if( newScore2 <= 0){
        if(a1 ==1 && a2 ==1 && a3 ==1 && a4 ==1 ){
            var x = document.getElementById("myAudio"); 
            x.pause();
            var y = document.getElementById("clash"); 
            y.pause();
            var z = document.getElementById("winner"); 
            z.play();
            $(".Fight").css("opacity","0");
            $(".Fight").css("pointer-events","none");
            $(".ChooseEnemyPage").css("opacity","0");
            $(".ChooseEnemyPage").css("pointer-events","none");
            $(".intro").css("opacity","1");
            $(".intro").css("pointer-events","all");
            $("#introBTN").css("opacity","0");
            $("#introBTN").css("pointer-events","none");
            $(".quotes").html("CONGRATILATIONS!!!");
          
           }

           else{
     
 alert("YOU WON , GO TO THE CHOOSE YOUR NEW ENEMY !!!");
 $(".Fight").css("opacity","0");
 $(".Fight").css("pointer-events","none");
 $(".ChooseEnemyPage").css("opacity","1");
 $(".ChooseEnemyPage").css("pointer-events","all");
 $(".left4").css("opacity","0"); 
 $(".left1").css("opacity","0"); 
 $(".left2").css("opacity","0"); 
 $(".left3").css("opacity","0"); 
 IMG1.css("pointer-events","all");
 IMG2.css("pointer-events","all");
 IMG3.css("pointer-events","all");
 IMG4.css("pointer-events","all");
 $("#secondText").css("color","white");
 $("#secondText").html("YOUR NEXT ENEMY...");


    

    $(".box-2").css("pointer-events","none");  
    $(".box-2").css("opacity","0");  
    enemy2.pop();
   
    var enemy3=[];
    
    IMG1.on("click",function(){
        $("#secondText").html("");
        $(".scor2").html("120"); 
        $(".left1").css("opacity","0.5"); 
        enemy3.push("1");
         IMG2.css("pointer-events","none");
         IMG3.css("pointer-events","none");
         IMG4.css("pointer-events","none");
         $(".box-2").css("margin-top","0%");
       $(".box-2").css("pointer-events","all");  
       $(".box-2").css("opacity","1");  
         IMG1.remove();
        });
        
        IMG2.on("click",function(){
            $("#secondText").html("");
            $(".scor2").html("180"); 
            $(".left2").css("opacity","0.6"); 
            enemy3.push("2");
            IMG1.css("pointer-events","none");
         IMG3.css("pointer-events","none");
         IMG4.css("pointer-events","none");
            $(".box-2").css("pointer-events","all");  
            $(".box-2").css("opacity","1");  
            IMG2.remove();
            });
        
            IMG3.on("click",function(){
                $("#secondText").html("");
                $(".scor2").html("150"); 
                $(".left3").css("opacity","0.7"); 
                enemy3.push("3");
                IMG2.css("pointer-events","none");
         IMG1.css("pointer-events","none");
         IMG4.css("pointer-events","none");
                $(".box-2").css("pointer-events","all");  
                $(".box-2").css("opacity","1");  
                IMG3.remove();
                });
        
                IMG4.on("click",function(){
                    $("#secondText").html("");
                    $(".scor2").html("100"); 
                    $(".left4").css("opacity","0.6"); 
                    enemy3.push("4");
                    IMG2.css("pointer-events","none");
                    IMG3.css("pointer-events","none");
                    IMG1.css("pointer-events","none");
                    $(".box-2").css("pointer-events","all");  
                    $(".box-2").css("opacity","1");  
                    IMG4.remove();
                });


                document.getElementById("saber2").id = "saber3";



                 if(enemy3[0] == 1){
                    var newScore1= $(".scor1").text();
                    newScore1=parseInt(newScore1) - 15;
                    $(".scor1").html(newScore1); 
                   
                   }
                   if(enemy3[0] == 2){
                    var newScore1= $(".scor1").text();
                    newScore1=parseInt(newScore1) - 25;
                    $(".scor1").html(newScore1); 
                    
                   }
                   if(enemy3[0] == 3){
                    var newScore1= $(".scor1").text();
                    newScore1=parseInt(newScore1) - 20;
                    $(".scor1").html(newScore1); 
                   
                   }
                   if(enemy3[0] == 4){
                    var newScore1= $(".scor1").text();
                    newScore1=parseInt(newScore1) - 5;
                    $(".scor1").html(newScore1); 
                   
                   }

                  

                 }} });
    }
}});
