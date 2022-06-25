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
        let currentnode =this.head
        console.log(currentnode.data)
       while(currentnode){
            if(currentnode.data===val){
                return true
            }
            currentnode=currentnode.next
        }return false
    }
    
    
}
    
    branch=new linklist()
    branch.add(5)
    branch.add(7)
 branch.add(9)
 branch.add(20)
    console.log(branch)
   console.log( branch.find(20))
