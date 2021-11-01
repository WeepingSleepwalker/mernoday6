// given two sorted arrays that may have duplicate values, merge them and remove any duplicates
//                   a
var arr1 = [1, 3, 3, 5, 8, 10,];
//                   b
var arr2 = [1, 3, 3, 5, 8, 10, 10, 10];

var arrA = [1, 3, 4, 5];
var arrB = [1, 3, 3, 5, 8, 10,];

function mergeDedupe(arr1, arr2) {

    let result = [];
    let i = 0; //left index
    let j = 0; //right index

    while(i < arr1.length && j < arr2.length){
        if(arr1[i] > arr2[j]){
            result.push(arr2[j]);
            j++;
        }else if(arr1[i] < arr2[j]){
            result.push(arr1[i]);
            i++;
        }
        else if (arr1[i] == arr2[j]){
            result.push(arr1[i]);
            i++;
            j++;
        }
        else if (arr)
    }
    return result;
}

console.log(mergeDedupe(arrA,arrB))
console.log(mergeDedupe(arr1,arr2))

// try out some other tests
mergeDedupe([1, 3, 3, 5, 8, 10], [1, 3, 4, 5]) // [ 1, 3, 4, 5, 8, 10 ]
mergeDedupe([2,3,3,5,8,10,12], [1,3,4,6]) // [1, 2, 3, 4, 5, 6, 8, 10, 12]

//      a -> 
    [1, 3, 3, 5, 8, 10]
//      b
    [1, 3, 4, 5]