const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine, world,brain_img,brain,bubble_img,bubble1,bubble_img,bubble,buuble2,bubble2_img,bubble1_img,bubble3_img;
var bubble3,bubble4_img,bubble4,bubble5_img,bubble5,button1,page2,text1,button2,button3,button4,button5,bubble5;
var bubble6_img,button6,button7,button8,white,back;
let mysound,text2,text3,text4,text5,text6,text7,form,background_img,button9,button10,button11,button12,button13;
let mysound1;
var score=0;
var database,score1,congo1,button45,button46,button47,button49,button50,button51,button52;
var button14,button15,button16,text8,p1,p_img,alunom,alunom2,text9,bg1,text10,text21,button17,d,d1,text100,congo2_img,congo3_img,congo4_img,button44;
var text11,text12,text13,text14,text15,text16,text17,text18,text19,text20,pinkb,pink1,think1,think2,brain1,button20,button21,button23,button99,button24,text22,button25,button26,button27,button28,button29,button30;
var button31,button32,button33,button34,button35,button36,text101,congo2,button37,button38,button39,button40,text102,congo3,button41,button42,button43,congo4,text103,text102
function preload(){
  p_img=loadImage("piano.png")
    d=loadImage("dc.png");
   
    pinkb=loadImage("bg2.jpg")
   alunom=loadImage("alom.jpg");
   congo_img=loadImage("congo.png");
   congo2_img=loadImage("congo2.png");
   congo3_img=loadImage("congo3.png");
   congo4_img=loadImage("congo4.png");

soundFormats("mp3","ogg");
mysound=loadSound("music2.mp3");
soundFormats("mp3","ogg");
mysound1=loadSound("music.mp3");
}
function setup(){
    engine = Engine.create();
    world = engine.world;
    
   
   
   
     createCanvas(displayWidth,displayHeight)
     button1=createButton("Next");
    d1=createSprite(displayWidth/2,displayHeight/2);
    d1.addImage(d)
    text1=createElement("h2");
    //text2=createElement("h2");
    text3=createElement("h2");
    text4=createElement("h2");
    text5=createElement("h2");
    text6=createElement("h2");
    text7=createElement("h2");
    text8=createElement("h2");
    text9=createElement("h2");
    text10=createElement("h2");
    text11=createElement("h2");
    text12=createElement("h2");
    text13=createElement("h2");
    text14=createElement("h2");
    text15=createElement("h2");
    text16=createElement("h2");
    text17=createElement("h2");
    text18=createElement("h2");
    text19=createElement("h2");
    text20=createElement("h2");
    text21=createElement("h2");
    text22=createElement("h1");
   this.Visibility=255;
}
function draw(){
    Engine.update(engine);
    background(255);
    imageMode(CENTER) ;
page100();
   drawSprites()
}
function page100() {  
button1.position(displayWidth/2-10,displayHeight/2+450);
text22.html("Depression Cycle");
text22.position(displayWidth/2-80,displayHeight/2)
button1.mousePressed(()=>{
    button1.hide();
    text22.hide();
    background("white")
    page1();
    console.log(page1);   
})
}

//after next
function page1(){
    pink1=createSprite(displayWidth/2,displayHeight/2);
   pink1.addImage(pinkb);
   pink1.scale=4;
    button2=createButton("Read");
    button3=createButton("Listen and meditate");
    button4=createButton("Write");
    button8=createButton("Your Planner");
//read
button2.position(displayWidth/2-450,displayHeight/3);
button2.size(displayWidth/2,100)
//listen
button3.position(displayWidth/2-450,displayHeight/6);
button3.size(displayWidth/2,100)
//write
button4.position(displayWidth/2-450,displayHeight/2);
button4.size(displayWidth/2,100)
//what to dozxdr
button8.position(displayWidth/2-450,displayHeight/1.5);
button8.size(displayWidth/2,100);
//button24=createButton("Back");
//button24.position(displayWidth/4+1000,displayHeight/4+600);
 // button24.mousePressed(()=>{
      //button24.hide();
     // button2.hide();
     // button3.hide();
     // button4.hide();
      //button8.hide();
     //page100();
     // text22.hide();
  //})
   
    //read
    button2.mousePressed(()=>{
        button2.hide();
        button3.hide();
        button4.hide();
        button8.hide();
        page6();
    })
    //listen
    button3.mousePressed(()=>{
        button2.hide();
        button3.hide();
        button4.hide();
        button8.hide();
        page2();
    });
    //write
    button4.mousePressed(()=>{
        button2.hide();
        button3.hide();
        button4.hide();
        button8.hide();
        page7();
    })
    //what to do
    button8.mousePressed(()=>{
        button2.hide();
        button3.hide();
        button4.hide();
        button8.hide();
        page5();
       })
    }
    function page2(){
        background("#fae");
        button6=createButton("Soothing Relaxation");
    button7=createButton("piano");
       //soothing relaxation inside lisen
        button6.position(displayWidth/2-350,displayHeight/2-120);
        button6.size(displayWidth/2,100);
//piano inside listen
        button7.position(displayWidth/2-350,displayHeight/2-10);
        button7.size(displayWidth/2,100);
        button13=createButton("Back");
        button13.position(displayWidth/4+1000,displayHeight/4+600);
        button13.mousePressed(()=>{
            button13.hide();
            button6.hide();
            button7.hide();
          button49.hide();
          button50.hide();
         
          
            text2.hide();
            text3.hide();
            text9.hide();
            page1();
        })
        //hiding sr
       button6.mousePressed(()=>{
           button6.hide();
           button7.hide();
           page3();
       })
       //hiding piano
       button7.mousePressed(()=>{
        button6.hide();
        button7.hide();
        page4();
       })
    }
    //listen==soothing relaxation
    function page3(){
       
       button49=createButton("Play Sound");
       button49.position(displayWidth/2-100,displayHeight/2+300);
       button50=createButton("Stop Sound");
       button50.position(displayWidth/2-200,displayHeight/2+300);
       button49.mousePressed(()=>{
           mysound.play();
          
       })
       button50.mousePressed(()=>{
           mysound.stop();
       })
      text2=new Text2();
      text2.display();

alunom2=createSprite(displayWidth/2,displayHeight/2);
alunom2.addImage(alunom);
alunom2.scale=1;

    }
    //music for soothing relaxataion
   
    //for piano
   function page4(){
    button99=createButton("Back");
    button99.position(displayWidth/4+1000,displayHeight/4+600)
     button51=createButton("Play Sound")
     button51.position(displayWidth/2-100,displayHeight/2+300);
     button52=createButton("Stop Sound");
     button52.position(displayWidth/2-200,displayHeight/2+300);
     button51.mousePressed(()=>{
         mysound1.play();
        
     })
     button52.mousePressed(()=>{
         mysound1.stop();
     })
       p1=createSprite(displayWidth/2,displayHeight/2);
       p1.addImage(p_img);
       text9=new Text3();
       text9.display();
       button99.mousePressed(()=>{
           button99.hide();
           text9.hide();
           button13.hide();
          button51.hide();
          button52.hide();
           page1();

       })
    }
    //for piano
   
    //for what to do
    function page5(){
       button20=createButton("Week 2");
       button20.position(displayWidth/2-450,displayHeight/3);
       button20.size(displayWidth/2,100)
    button21=createButton("Week 1");
    button21.position(displayWidth/2-450,displayHeight/6);
button21.size(displayWidth/2,100)
    button23=createButton("Week 3")
    button23.position(displayWidth/2-450,displayHeight/2);
    button23.size(displayWidth/2,100);
    button24=createButton("Week 4");
    button24.position(displayWidth/2-450,displayHeight/1.5);
button24.size(displayWidth/2,100);
button26=createButton("Back");
button26.position(displayWidth/4+1000,displayHeight/4+600);
button26.mousePressed(()=>{
    button26.hide();
    button20.hide();
    button21.hide();
    button23.hide();
    button24.hide();
  

    page1();
})
//week2
    button20.mousePressed(()=>{
        button20.hide();
        button21.hide();
        button23.hide();
        button24.hide();
        page8();
    })
    button21.mousePressed(()=>{
        button20.hide();
        button21.hide();
        button23.hide();
        button24.hide();
        page9();
    })
    button23.mousePressed(()=>{
        button20.hide();
        button21.hide();
        button23.hide();
        button24.hide();
        page10()
    })
    button24.mousePressed(()=>{
        button20.hide();
        button21.hide();
        button23.hide();
        button24.hide();
        page11();
    })

    }
    //week2
   function page8(){
      button26.hide();
text100=new Text();
text100.display();
button30=createButton("Done");
button30.position(displayWidth/2-100,displayHeight/6+5);
button28=createButton("Done");
button28.position(displayWidth/2-100,displayHeight/3);
button27=createButton("Done");
button27.position(displayWidth/2-100,displayHeight/1.5);
button29=createButton("Done");
button29.position(displayWidth/2-100,displayHeight/2);
button44=createButton("Back");
button44.position(displayWidth/4+1000,displayHeight/4+600);
button44.mousePressed(()=>{
    button44.hide();
    button27.hide();
button28.hide();
button29.hide();
button30.hide();
text100.hide();
page1();
})
button27.mousePressed(()=>{
button27.hide();
button28.hide();
button29.hide();
button30.hide();
text100.hide();

congo1=createSprite(displayWidth/2,displayHeight/2);
congo1.addImage(congo_img);

})
button28.mousePressed(()=>{
    button28.hide();
})
button30.mousePressed(()=>{
    button30.hide();
})
button29.mousePressed(()=>{
    button29.hide();
})

//done button

   }
   //week1
   function page9(){
      button26.hide();
    text101=new Text4();
    text101.display();
    button31=createButton("Done");
    button31.position(displayWidth/2-100,displayHeight/6+5);
    button32=createButton("Done");
    button32.position(displayWidth/2-100,displayHeight/3);
    button33=createButton("Done");
    button33.position(displayWidth/2-100,displayHeight/1.5);
    button34=createButton("Done");
    button34.position(displayWidth/2-100,displayHeight/2);
    button45=createButton("Back");
    button45.position(displayWidth/4+1000,displayHeight/4+600);
    button45.mousePressed(()=>{
        button45.hide();
        button33.hide();
    button32.hide();
    button31.hide();
    button34.hide();
    text101.hide();
    page1();
    
    })
    button33.mousePressed(()=>{
    button33.hide();
    button32.hide();
    button31.hide();
    button34.hide();
    text101.hide();
    
    congo2=createSprite(displayWidth/2,displayHeight/2);
    congo2.addImage(congo2_img);
    
    })
    button31.mousePressed(()=>{
        button31.hide();
    })
    button32.mousePressed(()=>{
        button32.hide();
    })
    button34.mousePressed(()=>{
        button34.hide();
    })
}
   function page10(){
       button26.hide();
    text102=new Text5();
    text102.display();
    button35=createButton("Done");
    button35.position(displayWidth/2-100,displayHeight/6+5);
    button36=createButton("Done");
    button36.position(displayWidth/2-100,displayHeight/3);
    button37=createButton("Done");
    button37.position(displayWidth/2-100,displayHeight/1.5);
    button38=createButton("Done");
    button38.position(displayWidth/2-100,displayHeight/2);
    button46=createButton("Back");
    button46.position(displayWidth/4+1000,displayHeight/4+600)
    button46.mousePressed(()=>{
        button37.hide();
        button36.hide();
        button35.hide();
        button38.hide();
        text102.hide()
        page1();
    })
    button37.mousePressed(()=>{
    button37.hide();
    button36.hide();
    button35.hide();
    button38.hide();
    text102.hide();
    
    congo3=createSprite(displayWidth/2,displayHeight/2);
    congo3.addImage(congo3_img);
    
    })
    button35.mousePressed(()=>{
        button35.hide();
    })
    button36.mousePressed(()=>{
        button36.hide();
    })
    button38.mousePressed(()=>{
        button38.hide();
    })
   }
   function page11(){
       button26.hide();
    text103=new Text6();
    text103.display();
    button39=createButton("Done");
    button39.position(displayWidth/2-100,displayHeight/6+5);
    button40=createButton("Done");
    button40.position(displayWidth/2-100,displayHeight/3);
    button41=createButton("Done");
    button41.position(displayWidth/2-100,displayHeight/1.5);
    button42=createButton("Done");
    button42.position(displayWidth/2-100,displayHeight/2)
    button47=createButton("Back");
    button47.position(displayWidth/4+1000,displayHeight/4+600);
    button47.mousePressed(()=>{
        button47.hide();
        button41.hide();
        button42.hide();
        button40.hide();
        button39.hide();
        text103.hide()
        page1();
    })
    button41.mousePressed(()=>{
    button41.hide();
    button42.hide();
    button40.hide();
    button39.hide();
    text103.hide();
    text103.hide();
    congo4=createSprite(displayWidth/2,displayHeight/2);
    congo4.addImage(congo4_img);
    
    })
    button39.mousePressed(()=>{
        button39.hide();
    })
    button40.mousePressed(()=>{
        button40.hide();
    })
    button42.mousePressed(()=>{
        button42.hide();
    })
   }
    //write
    function page7(){
        form=new Form();
        form.display();
       
     
     button10=createButton("Back");
     button10.position(displayWidth/4+950,displayHeight/4+550);
     button10.mousePressed(()=>{
         button10.hide();
        form.hide();
          page1();
     })
        

    }
    //read
    function page6(){
        button9=createElement("button");
    button9.value="The Happiness Trap"
button9.position(displayWidth/2,displayHeight/2);
if(button9.onclick=true){
    window.location.href="http://www.goyourownway.org/GOYOUROWNWAY/DOCUMENTS/VETERANS/PENDING/Happiness%20Trap,%20The%20-%20Harris,%20Russ.pdf"
}
    }