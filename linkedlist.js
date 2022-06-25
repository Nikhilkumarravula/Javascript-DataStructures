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
        
       while(currentnode){
            if(currentnode.data===val){
                return true
            }
            currentnode=currentnode.next
        }return false
    }
    
    remove(val){
        let currentnode =this.head
        if(currentnode.data===val){
            this.head=currentnode.next
            return
        }else{
         while(currentnode){
            if(currentnode.next.data===val){
                let temp =currentnode.next
                currentnode.next=temp.next
                return 
            }
            currentnode=currentnode.next
         }
        }
    }
    
    
} 
    
    branch=new linklist()
    branch.add(5)
    branch.add(7)
 branch.add(9)
 branch.add(20)
 branch.add(25)
  branch.add(45)
   branch.add(12)
   console.log( branch.find(9))
   console.log(branch.head)
   branch.remove(5)
   branch.remove(20) 
   console.log(branch.head)
