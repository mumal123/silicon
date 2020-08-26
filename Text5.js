class Text5{

    constructor(){
        this.greeting=createElement("h2");
        this.greeting2=createElement("h2");
        this.task2=createElement("h2");
        this.task3=createElement("h2");
        this.task4=createElement("h2");
    }
    hide(){
        this.greeting.hide();
        this.greeting2.hide();
        this.task2.hide();
        this.task3.hide();
        this.task4.hide();
    }
    display(){
    this.greeting.html("1)Read a book for 15 minutes ");
    this.greeting.position(displayWidth/2-600,displayHeight/6);
    this.greeting2.position(displayWidth/2-600,displayHeight/3);
    this.greeting2.html("2)Listen music 15 minutes");
    this.task2.html("4)Meditate for 15 minutes");
    this.task2.position(displayWidth/2-600,displayHeight/1.5);
    this.task3.html("3)Talk to your friends for 15 minutes");
    this.task3.position(displayWidth/2-600,displayHeight/2);
    this.task4.html("Click on all the done button to get a reward");
    this.task4.position(displayWidth/20,displayHeight/20);
}
}
