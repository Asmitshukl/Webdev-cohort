class todo{
    constructor(){
        this.item=[];
    }
    add(str){
        this.item.push(str);
    }
    getall(){
        console.log(this.item);
    }
    toremove(i){
        this.item.splice(i,1)
    }
    tochange(i,str){
        this.item[i]=str;
    }
}
const t=new todo();
t.add("working");
t.add("eating");
t.add("walking");
t.add("talking");
t.getall();
t.toremove(2);
t.getall();
t.tochange(1,"chewing");
t.getall();
