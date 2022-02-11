




function createRandomarr(len, from, to){
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











