const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, cb) {
      const entries = Object.entries(collection);

      for(const [key,val] of entries){
        cb(val,key,collection);
      }

      return collection;
    },

    map: function(collection, cb) {
      const entries = Object.entries(collection);
      const collectionCopy = [];

      for(const [key,val] of entries){
        collectionCopy.push(cb(val,key,collection));
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

    flatten: function(array, singleLevel, newAry=[], depth=1) {
      if(!!singleLevel){
        for (const elem of array){
          (Array.isArray(elem) && depth<2)? this.flatten(elem,true,newAry, depth+1):newAry.push(elem);
        }
      }else{
        for (const elem of array){
          (Array.isArray(elem))? this.flatten(elem,false,newAry, depth+1):newAry.push(elem);
        }
      }
      return newAry;
    },

    uniq: function(array, isSorted, cb, uniqValues=[]){
      let newAryOfObjs;
      if(uniqValues.length === 0){
        newAryOfObjs = this.map(array, (elem,id)=>{
          return !!cb?{[elem]:cb(elem)}:{[id]:elem}
        })
      }
      else{
        newAryOfObjs = array;
      }

      uniqValues.push(newAryOfObjs.shift());
      newAryOfObjs = this.filter(newAryOfObjs, elem=>Object.values(this.last(uniqValues))[0] !== Object.values(elem)[0] )

      if(newAryOfObjs.length>0) this.uniq(newAryOfObjs,isSorted, cb, uniqValues);

      return !!cb? this.flatten(this.map(uniqValues, elem=>parseInt(Object.keys(elem)))):this.flatten(this.map(uniqValues, elem=>Object.values(elem)));
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


    functions: function(obj) {
      const fncNames = []
      for (let key in obj) {
        if (typeof obj[key] === "function"){
          fncNames.push(key)
        }
      }
      return fncNames.sort();
    },


  }
})()

fi.libraryMethod()
