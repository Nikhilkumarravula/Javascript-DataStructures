arr=[]
count=0
stack=function(){
    this.push=function(data){
        arr.push(data)
        count++
    }
    this.pop=function(){
        arr.pop()
        count--
    }
    this.peek = function() {
        return console.log(arr[count-1])
    }
    this.size=function(){
        return console.log(count)
    }
}
mystack=new stack()
mystack.push(12)
mystack.push(4)
mystack.push(9)
mystack.size()
mystack.push(120)
mystack.pop()
mystack.size()
mystack.push(145)
mystack.pop()
mystack.pop()
mystack.push("free")
mystack.size()
mystack.peek()
