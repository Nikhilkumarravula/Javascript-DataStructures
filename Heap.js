class heap{
    constructor(){
        this.data=[null]
    }
    push(val){
        let i=this.data.length-1
        if(i<=1){
            this.data.push(val)
        }else{
            this.data.push(val)
            let key=this.data.length-1
            while(key>1){
             // this.checkchild(key,key-1)
              this.checkparent(key,Math.floor(key/2))
              key=Math.floor(key/2)
            }
        }
    }
    
  
    checkparent(l,r){
        if(!this.data[r]){
            return
        }else{
            if(this.data[l]<this.data[r]){
                return
            }else{
                let temp=this.data[r]
                this.data[r]=this.data[l]
                this.data[l]=temp
            }
        }
    }
    
    delete(){
        let i=this.data.length-1
        this.data[1]=this.data[i]
        this.data.pop()
        let j=1
        while(j<i){
            if(2*j<i&&this.data[2*j]>this.data[j]){
                [this.data[2*j],this.data[j]]=[this.data[j],this.data[2*j]]
            }else if(2*j+1<i&&this.data[2*j+1]>this.data[j]){
                [this.data[2*j+1],this.data[j]]=[this.data[j],this.data[2*j+1]]
            }
            j++
        }
        
        
    }
    
}

let h=new heap()
h.push(21)
h.push(12)
h.push(29)
h.push(43)
h.push(58)
h.push(2)
h.push(44)
h.push(22)
h.push(99)
h.push(244)
h.push(15)
h.push(63)
console.log(h.data)
h.delete()
console.log(h.data)
