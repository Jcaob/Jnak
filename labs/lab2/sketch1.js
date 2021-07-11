class Instument 
// this is the parent class 
{
    constructor(loudness){
        this.loudness = loudness;
        
    }
// this is what is used for getting the sentances in the consoles
    playI(){
        console.log("this instrumenht from the " + this.family + " sounds like " + this.playverb + " and it is this loud " + this.loudness)
    }
   
}

class String extends Instument{
   // this is one of the child classes with the family and the playverbs associated with them 
    constructor(loudness)
    {
        super(loudness = 10);
        this.family = "String"
        this.playverb = "EEEEEEEEEEEEEEE"
    }
}

class Woodwind extends Instument {
    constructor(loudness)
     // this is one of the child classes with the family and the playverbs associated with them 
    {
        super(loudness = 7);
        this.family = "WoodWind"
        this.playverb = "*flute noise*"
    }
}

class Percussion extends Instument{
    constructor(loudness)
    // this is one of the child classes with the family and the playverbs associated with them 
    {
        super(loudness = 5);
        this.family = "percussion"
        this.playverb = "bonk"
    }
}

let test = []
test[0] = new String()
test[1] = new Woodwind()
test[2] = new Percussion()
// this is making the array for the classes 

for(var i = 0; i< test.length; i++){
    // this is looping through the array and also getting the method from the parent class to play with all the classes
    test[i]
    test[0].playI();
    test[1].playI();
    test[2].playI();
}