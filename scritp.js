function jumpingOnClouds(c) {
    let i = 0
    let countJump = 0
    
    while(i+2 <= c.length){
        if(c[i+2] == 0){
            i++
        }
        
        countJump++
        i++
    }
    
    return countJump
}