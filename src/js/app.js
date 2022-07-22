
class Character{
    constructor(name,type){
        this.name = name;
        this.type = type;
    }
    levelUp(){
        if(this.health > 0){this.level +=1;
        this.attack = this.attack * 1.2;
        this.defence = ths.defence * 1.2;
        this.health = 100;}
    }
    demage(points){
        if(this.health > 0){
            this.health -= points * (1 - defence / 100);
        }
    }
}