function getCount(objects) {
    let paircount = 0;
    for(let i = 0; i<objects.length; i++){
        if(objects[i].x === objects[i].y){
            paircount++;
        }
    }
    return paircount;
}