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

    
    
    sumofrange(l,h){
        let sum=0
        let node = this.root
        sums(node)
        function sums(node){
            if(node.data>l&&node.data<h)sum+=node.data
            if(node.left){
                sums(node.left)
            }
            if(node.right){
                sums(node.right)
            }
            
        }
        console.log(sum) 
    }
    
    inorder(){
        let a=[]
        intra(this.root)
        function intra(node){
            if(node.left){
                intra(node.left)
            }
             a.push(node.data)
            if(node.right){
                intra(node.right)
            }
        }console.log(a)
    }
    
    preorder(){
        let a=[]
        intra(this.root)
        function intra(node){
            a.push(node.data)
            if(node.left){
                intra(node.left)
            }
            if(node.right){
                intra(node.right)
            }
        }console.log(a)
    }
    
    postorder(){
        let a=[]
        intra(this.root)
        function intra(node){
            if(node.left){
                intra(node.left)
            }
            if(node.right){
                intra(node.right)
            }
            a.push(node.data)
        }console.log(a)
    }

    
    increaseinsert(){
        intra(this.root)
        function intra(node){
            if(node.left){
                intra(node.left)
            }
            insert(node.data,newnode)
            //console.log(node)
            if(node.right){
                intra(node.right)
            }
            function insert(value,newnode){
                let newnode=new Node(value)
                if(!this.root){
                    this.root=newnode
                }else{
                    if(!this.root.right){
                        this.root.right=newnode
                    }else{
                        insert(,)
                    }
                    
                }
            }console.log(a)
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
tree.insert(12)
tree.insert(11)
tree.sumofrange(10,30)
tree.inorder()
tree.preorder()
tree.postorder()
tree.increaseinsert()
