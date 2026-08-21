function resArray(arr) {
    let arr1 = [];
    let arr2 = [];

    for(let i = 2; i < arr.length; i++) { 
        if(arr1[arr1.length - 1] > arr2[arr2.length - 1]) {
            arr1.push(arr[i]);
        } else {
            arr2.push(arr[i]);
        }
    }
    return arr1.concat(arr2);
}