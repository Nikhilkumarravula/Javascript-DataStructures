const graph={
    a:['e','c','b'],
    b:['e','d'],
    c:['e'],
    d:[],
    e:[],
    f:['c']
    // a:['c','b'],
    // b:['d'],
    // c:['e'],
    // d:['f'],
    // e:[],
    // f:[]

}
const edges=[
    ['p','q'],
    ['p','r'],
    ['p','s'],
    ['r','q'],
    ['s','t'],
    ['u','v']
]

//dfs : abdfce
function dfs(graph,src){
    let stack=[]
    stack.push(src)
    while(stack.length>0){
        let current=stack.pop()
        console.log(current)
        for(node of graph[current]){
            stack.push(node)
        }
    }
}
//acbedf
function bfs(graph,src){
    let stack=[]
    stack.push(src)
    while(stack.length>0){
        let current=stack.shift()
        console.log(current)
        for(node of graph[current]){
            stack.push(node)
        }
    }
}
//dfsrecursion : abdfce
function dfsrecursion(graph,src){
    console.log(src)
    for(nodes of graph[src]){
        dfsrecursion(graph,nodes)
    }

}

function pathofnodes(graph,src,dst){
    // if(src===dst) return true
    // for(nodes of graph[src]){
    //     if(pathofnodes(graph,nodes,dst)) return true

    // }
    let stack=[]
    stack.push(src)
    while(stack.length){
        current=stack.pop()
        if(current===dst) return true
        for(nodes of graph[current]){
            stack.push(nodes)
        }
    }
    return false
}

function pathnodesbfs(graph,src,dst){
    let stack=[]
    stack.push(src)
    while(stack.length){
        current=stack.shift()
        if(current===dst) return true
        for(nodes of graph[current]){
            stack.push(nodes)
        }
    }
    return false
}
const graphs={}

function buildgraph(edges){
    for(nodes of edges){
        [a,b]=nodes
        if(!(a in graphs)) {graphs[a]=[]}
        if(!(b in graphs)) {graphs[b]=[]}
        graphs[a].push(b)
        graphs[b].push(a)
    }
    console.log(graphs)
}

function dfsedge(graphs,src,dst,visited){
    let stack=[src]
    let current=src
    while(stack.length){
        current = stack.pop()
        visited.add(current)
        if(current===dst) return true
        for(node of graphs[current]){

            if( visited.has(node)){
                continue
            }else{
                stack.push(node)
            }

        }

    }

    return false
}

function bfsedge(graphs,src,dst,visited){
    let stack=[src]
    let current=src
    while(stack.length){
        current = stack.shift()
        visited.add(current)
        if(current===dst) return true
        for(node of graphs[current]){

            if( visited.has(node)){
                continue
            }else{
                stack.push(node)
            }

        }

    }

    return false
}

dfs(graph,"a")
console.log('=========')
 bfs(graph,'a')
 console.log('=========')
 dfsrecursion(graph,'a')
console.log('=========')
console.log(pathofnodes(graph,'a','d'))
console.log('=========')
console.log(pathnodesbfs(graph,'a','d'))
console.log('=========')
buildgraph(edges)
let s =new Set()
console.log('=========')
console.log(dfsedge(graphs,'p','r',s))
console.log('=========')
console.log(bfsedge(graphs,'p','r',s))
