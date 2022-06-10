class Node{
    constructor(data){
        this.data=data
        this.left=null
        this.right=null
    }
}
class bst{
    constructor(){
        this.root=null
    }
    insert(data){
       let newnode= new Node(data)
        if(!this.root){
            this.root=newnode
        }else{
            insertnode(this.root , newnode)
        }
    function insertnode(root , node){
        if(node.data<root.data){
            if(!root.left){
                root.left=node
            }else{
                insertnode(root.left , node)
            }
        }else if(node.data>root.data){
            if(!root.right){
                root.right=node
            }else{
                insertnode(root.right , node)
            }
        }else{
            console.log("data already exists")
        }
    }
        
    }

    
    
    sumofrange(){
        let sum=0
        let kulfi = this.root
        function sums(kulfi){
            sum+=kulfi.data
            if(kulfi.left){
                sums(kulfi.left)
            }
            if(kulfi.right){
                sums(kulfi.right)
            }
            console.log(sum)
        }
    }
    
}
tree=new bst()
tree.insert(14)
tree.insert(13)
tree.insert(21)
tree.insert(8)
tree.insert(54)
tree.insert(2)
tree.insert(18)
tree.insert(9)
tree.sumofrange()
