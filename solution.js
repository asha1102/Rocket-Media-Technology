function sortAndpair(n,arr){
    let sorted = arr.sort();
    let pair =0;
    for(let i=0; i<n-1;i++){
        if(sorted[i] == sorted[i+1]){
            pair++;
            i=i+1;

        }
    }
    return pair;
}
 var apair = sortAndpair(17,[1,1,1,1,2,3,3,3,3,3,3,3,4,4,4,4,4] );