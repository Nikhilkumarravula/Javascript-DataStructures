const grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]

let visited=new Set()
let row=grid[0].length,count=0
let column=grid.length
for(let c=0;c<column;c++){
    for(let r=0;r<grid[c].length;r++){

        //console.log(c,r)

       if(islandcheck(grid,c,r)==true){
           count++
       }
    }


}
function islandcheck(grid,c,r){
    if(c>=0&&r>=0&&r<grid[0].length&&c<grid.length){
        let pos=c+','+r
        if(grid[c][r]==1&&!visited.has(pos)) {
            console.log(c,r)
            visited.add(pos)
        islandcheck(grid,c,r+1)
        islandcheck(grid,c-1,r)
        islandcheck(grid,c,r-1)
        islandcheck(grid,c+1,r)

        return true
    }else{
        return
    }
    }else {
        return
    }

}
