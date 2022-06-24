class link{
    constructor(data){
    this.data=data
    this.next=null
    }
}  

class linklist{
    constructor(){
        this.head=null
    }
    
    add(val){
        let node = new link(val)
        if(!this.head){
            this.head=node
        }else{
            let currentnode =this.head
            while(currentnode.next){
                currentnode=currentnode.next
            }
            currentnode.next=node
        }
    }
    find(val){
        console.log(1)
        let currentnode =this.head
        while(currentnode.next){
            if(currentnode.data===val){
                console.log("true")
            }
        }console.log("false")
    }
    
    
}
    
    branch=new linklist()
    branch.add(5)
    branch.add(7)
 //   branch.add(9)
//    branch.add(20)
    console.log(branch)
    branch.find(7)
    
