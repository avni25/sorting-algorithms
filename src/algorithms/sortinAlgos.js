// const {performance} = require('perf_hooks');

export function createRandomarr(len, from, to){
    let arr = [];
    for (let i = 0; i < len; i++) {
         let val = Math.floor(Math.random() * (to - from + 1) + from);
        arr.push(val);            
    }
    
    return arr;
}
    
let arr = createRandomarr(100, 10, 500);

const _mergeArrays = (a, b) => {
        const c = []
      
        while (a.length && b.length) {
          c.push(a[0] > b[0] ? b.shift() : a.shift())
        }
      
        while (a.length) {
          c.push(a.shift())
        }
        while (b.length) {
          c.push(b.shift())
        }
      
        return c
}
    
export function mergeSort(arr){
       
    if (arr.length < 2) return arr;
    
    const middle = Math.floor(arr.length / 2);
    const a_l = arr.slice(0, middle);
    const a_r = arr.slice(middle, arr.length);
    const sorted_l = mergeSort(a_l);
    const sorted_r = mergeSort(a_r);
    
    return _mergeArrays(sorted_l, sorted_r);
}

export function quicksort(array) {
  if (array.length <= 1) {
    return array;
  }

  var pivot = array[0];
  
  var left = []; 
  var right = [];

  for (var i = 1; i < array.length; i++) {
    array[i] < pivot ? left.push(array[i]) : right.push(array[i]);
  }

  return quicksort(left).concat(pivot, quicksort(right));
};

// let s = performance.now();
 let ar2 = quicksort(arr);
// let f = performance.now();
// console.log(f-s);
console.log(ar2);



