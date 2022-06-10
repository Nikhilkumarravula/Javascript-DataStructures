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
        newnode= new Node(data)
        if(!this.root){
            this.root=newnode
        }else{
            insertnode(this.root , newnode)
        }
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
