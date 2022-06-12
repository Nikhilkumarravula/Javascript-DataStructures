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

    
    
}


function ulfa(root) {
 
    
       let a=[]
        k=intra(root)
        function intra(node){
            
            if(node.left){
                intra(node.left)
            }
             a.push(node.data)
            if(node.right){
                intra(node.right)
            }
            return a
        }
        console.log(a)
    let newnode=new Node(0)
    function maketree(index, node) {
    if (index === k.length) {
      return;
    }
    node.right = new Node(k[index])
    maketree(index + 1, node.right)
    return node.right
  }
   return maketree(0,newnode)
        
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
console.log(ulfa(tree.root))
