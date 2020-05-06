function clist(...args) {
    return args;
  }
  
  function add(...args) {
    return args.reduce((acc, cur) => acc + cur, 0);
  }
  
  function sub(...args) {
    const values = args;
    const firstValue = values.shift();
    const result = firstValue - add(...values);
    return result;
  }
  
  function double(...args) {
    const sum = add(...args);
    return sum * 2;
  }
  
  const negate = (...args) => {
    const sum = add(...args);
    return sum * (-1);
  };
  
  // COMPOSE
  const reducer = (y, f) => (...args) => f(y(...args));
  const compose = (...fns) => fns.reduceRight(reducer);
  
  // FLAT
  const flat = (arr) => {
    const result = [];
    if (arr.length <= 1) {
      return arr;
    }
  
    for (let i = 0; i < arr.length; i += 1) {
      if (Array.isArray(arr[i])) {
        for (let j = 0; j < arr[i].length; j += 1) {
          result.push(arr[i][j]);
        }
      } else {
        result.push(arr[i]);
      }
    }
    // DOES THE SAME THING WITHOUT NESTED FOR LOOPS
    // arr.map((e) => {
    //   if (Array.isArray(e)) {
    //     e.map((i) => result.push(i));
    //   } else {
    //     result.push(e);
    //   }
    // });
    return result;
  };
  
  // PARTIAL APPPLICATION
  const partial = (fn, ...args) => (...x) => {
    const partialApplication = fn(...args);
    const result = fn(partialApplication, ...x);
    if (Array.isArray(result)) {
      return flat(result);
    }
    return result;
  };
  
  // };
  // RANGE
  const range = (number) => {
    const tempArray = [];
    for (let i = 0; i < number; i += 1) {
      tempArray.push(i);
    }
    return tempArray;
  };
  
  // TAKE
  const take = (number, sequence) => {
    const tempArray = [];
    for (let i = 0; i < sequence.length; i += 1) {
      if (sequence[i] < number) {
        tempArray.push(i);
      }
    }
    return tempArray;
  };
  
  // DROP
  const drop = (number, sequence) => {
    const tempArray = [];
    for (let i = 0; i < sequence.length; i += 1) {
      if (sequence[i] >= number) {
        tempArray.push(i);
      }
    }
    return tempArray;
  };
  
  // FLIPS (REVERSES THE ORDER)
  const flips = (fn) => (...args) => {
    const tempArray = args;
    const reverse = tempArray.reverse();
    const result = fn(...reverse);
    return result;
  };
  
  // FLIP (FIRST AND SECOND ARGS)
  const flip = (fn) => (...args) => {
    if (args.length <= 2) {
      const reverse = args.reverse();
      const result = fn(...reverse);
      return result;
    }
    const reversedArray = args.slice(0, 2).reverse();
    const remainingArray = args.slice(2);
    const resultArray = reversedArray.concat(remainingArray);
    const result = fn(...resultArray);
  
    return result;
  };
  
  // CONS: CONSTRUCTS A PAIR
  const cons = (a, b) => {
    const pair = [];
    pair.push(a, b);
    return pair;
  };
  
  // CAR: FIRST ELEMENT OF A PAIR
  const car = (...args) => {
    const pair = [];
    const temp = args.slice(0, 2);
    for (let i = 0; i < temp.length; i += 1) {
      pair.push(temp[i]);
    }
    return pair[0].shift();
  };
  
  // CDR: SECOND ELEMENT OF A PAIR
  const cdr = (...args) => {
    const pair = [];
    const temp = args.slice(0, 2);
    for (let i = 0; i < temp.length; i += 1) {
      pair.push(temp[i]);
    }
    return pair[0].pop();
  };
  
 
  
  // ZIP
  // [1, 2, 3], [4, 5, 6] ==> [[1, 4], [2, 5], [6, 7]]
  const zip = (...args) => {
    let result = [];
    let a;
    let b;
    let c;
    if (args.length <= 1) {
      return args;
    }
    if (args.length === 2) {
      // save e[0] and e[1]
      args.map(() => {
        const firstArray = args[0];
        const secondArray = args[1];
        result = firstArray.map((i, j) => [i, secondArray[j]]);
      });
    }
    if (args.length === 3) {
      // save e[0], e[1] & e[3]
      args.map(() => {
        const firstArray = args[0];
        const secondArray = args[1];
        const thirdArray = args[2];
        let temp = firstArray.map((i, j) => [i, secondArray[j]]);
        temp = temp.map((i, k) => [i, thirdArray[k]]);
        a = flat(temp[0]);
        b = flat(temp[1]);
        c = flat(temp[2]);
      });
      result.push(a, b, c);
    }
    return result;
    
  };

   // TODO: ZIP,ZIPMAP, ZIPWITH, TRANSPOSE
  
  module.exports = {
    clist,
    add,
    sub,
    double,
    negate,
    compose,
    partial,
    flat,
    take,
    drop,
    range,
    flips,
    flip,
    cons,
    car,
    cdr,
    zip,
    // zipmap,
    // zipwith,
    // transpose,
  };
  
  // console.log(zip([1, 2, 3], [4, 5, 6], [7, 8, 9]));
  
