class heap{
    constructor(){
        this.data=[]
    }
    push(val){
        let i=this.data.length-1
        if(i<=0){
            this.data.push(val)
        }else{
            this.data.push(val)
            let key=this.data.length-1
            while(key>0){
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
        this.data[0]=this.data[i]
        this.data.pop()
        let n =this.data.length
        heapify(this.data,n,0)
    }
    
}
function heapify(arr,n,i){
    while(i>=0){
        
        let largest=i
    let left=(2*i)+1
    let right=(2*i)+2
        if(left<n && arr[largest]<arr[left]){
        largest=left
    }
    if(right<n && arr[largest]<arr[right]){
        largest=right
    }
    if(largest!=i){
        [arr[largest],arr[i]]=[arr[i],arr[largest]]
        heapify(arr,n,largest)
    }else{
        return
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
h.delete()
console.log(h.data)

h.delete()
console.log(h.data)
h.delete()
console.log(h.data)
h.delete()
console.log(h.data)
h.delete()
console.log(h.data)
h.delete()
console.log(h.data)
h.delete()
console.log(h.data)
h.delete()
console.log(h.data)
