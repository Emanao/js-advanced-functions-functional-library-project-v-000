const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, cb) {
      const keys = Object.keys(collection);

      for(const key of keys){
        cb(collection[key],key,collection);
      }

      return collection;
    },

    map: function(collection, cb) {
      const keys = Object.keys(collection);
      const collectionCopy = [];

      for(const key of keys){
        collectionCopy.push(cb(collection[key],key,collection));
      }

      return collectionCopy;
    },

    reduce: function(collection, cb, acc) {
      const values = Object.values(collection);
      let accumulator = !!acc? acc : values.shift();

      for(const val of values){
        accumulator = cb(accumulator, val, values);
      }
      return accumulator;
    },

    find: function(collection, findCb) {
      const values = Object.values(collection);

      for(const val of values){
         if (!!findCb(val, values)) return val;
      }
    },

    filter: function(collection, filterCb) {
      const values = Object.values(collection);
      const results = [];

      for(const val of values){
         if (!!filterCb(val, values)) results.push(val);
      }
      return results;
    },

    size: function(collection) {
      return Object.values(collection).length;
    },

    first: function(array, n) {
      const copyOfArray = [...array];
      return (!!n?copyOfArray.slice(0,n):copyOfArray[0]);
    },

    last: function(array, n) {
      const copyOfArray = [...array];
      return !!n?copyOfArray.slice(-n):copyOfArray.slice(-1)[0];

    },

    compact: function(array) {
      return this.filter(array, elem=>!!elem);
    },

    sortBy: function(array, sortingCb) {
      const copyOfArray = [...array]
      return copyOfArray.sort(function(a, b){return sortingCb(a) - sortingCb(b)});
    },

    flatten: function(array, singleLevel) {
      if(!!singleLevel){
        const singleLevelAry = [];
        for (const elem of array){
          Array.isArray(elem)? this.each(elem, nestedElem => singleLevelAry.push(nestedElem)): singleLevelAry.push(elem);
        }
        return singleLevelAry;
      }else{
        return this.map(array.toString().split(","), str=>parseInt(str));
      }
    },

    keys: function(obj) {
      let props = [];
      for(const prop in obj){
        props.push(prop)
      }
      return props;
    },

    values: function(obj) {
      let values = [];
      for(const prop in obj){
        values.push(obj[prop])
      }
      return values;
    },


    functions: function() {

    },


  }
})()

fi.libraryMethod()
