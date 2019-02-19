//MERGE SORT

const numArr = [9, 5, 62, 2, 7, 98, 34, 4]

//break array in half, merge, and repeat
let mergeSort = (arr) => {
  //can only proceed if arr has one one or more values
  if(arr.length < 2)
  {
    return arr;
  }
  //responsible for breaking arr in half with no floating point
  let halfLen = Math.floor(arr.length / 2);
  let firstHalf = arr.slice(0, halfLen);
  let secondHalf = arr.slice(halfLen);

  return merge(mergeSort(firstHalf), mergeSort(secondHalf));
}

let merge = (arr1, arr2) => {
  let result = [];
  //will only move forward if there are element(s) is arr1 and arr2
  while(arr1.length && arr2.length)
  {
    let minElem;

    //compares first elements, and puts arr with lowest first element into minElem array
    if(arr1[0] < arr2[0])
    {
      minElem = arr1.shift();
    }
    else
    {
      minElem = arr2.shift();
    }
    //push arr with lowest first element into result
    result.push(minElem);
  }


  if(arr1.length)
  {
    result = result.concat(arr1);
  }
  else
  {
    result = result.concat(arr2);
  }
  return result;
}

console.log(mergeSort(numArr));
