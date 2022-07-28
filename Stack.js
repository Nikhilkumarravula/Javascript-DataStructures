class node{
    constructor(data){
        this.data=data
        this.next=null
    }
}

class stack{
    constructor(){
        this.first=null
        this.last=null
        this.size=0
    }
    
    push(val){
        let newnode=new node(val)
        if(!this.first){
            this.first=newnode
            this.last=newnode
        }else{
            let temp=this.last
            this.last=newnode
            this.last.next=temp
            }
            this.size++
        }
        
    pop(){this.last
        if(!this.last) return null
        this.last=this.last.next
        this.size--
    }    
    search(val){
           
           function traverse(this.last,data){
               if(this.last.data===val) return true
               if(!this.last.next){
                 return traverse(this.last.next,data)   
                } else{
                    return false
                }
           }
           return traverse(this.last,data)

    }
    
    }
    
    let mystack = new stack()
    mystack.push(25)
    mystack.push(33)
    mystack.push(65)
    console.log(mystack)
      console.log(mystack.search(33))
