function arr(arg) {
    return arg < 5;
}
function multiply(arg){
    return arg*2;
}
var a = [150, 124, 141, 4, 6];



Array.prototype.myEvery = function(func){
    for(var i=0; i < this.length; i++){
        if(func(this[i]) === false){
            return false;
        }
    }
    return true;
}
console.log(a.myEvery(arr));



Array.prototype.mySome = function(func){
    for(var i=0; i < this.length; i++){
        if(func(this[i]) === true){
            return true;
        }
    }
    return false;
}
console.log(a.mySome(arr));



Array.prototype.myMap = function(func){
    var newArray = [];
    for(var i=0; i < this.length; i++){
         newArray[i] = func(this[i]);
        
    }
    return newArray;
}
console.log(a.myMap(multiply));



Array.prototype.myForEach = function(func){
    for(var i=0; i < this.length; i++){
        console.log(func(this[i]));
    }
}
a.myForEach(multiply);



Array.prototype.myFind = function(func){
    for(var i=0; i < this.length; i++){
        if(func(this[i]) === true){
            return this[i];
        }
    }
    return undefined;
}
console.log(a.myFind(arr));


Array.prototype.myFilter = function(func){
    var newArray = [];
    for(var i=0; i < this.length; i++){
        if(func(this[i]) === true){
           newArray[newArray.length] = this[i];
        }
    }
    return newArray;
}
console.log(a.myFilter(arr));






var arr = [1, 2, [31, 32, [331, 332, [3331, 3332, [515, 5461, [[[]]]]]], 34], 4, , []];


Array.prototype.myFlat = function(depth) {
    if (depth === undefined) {
        depth = 1;
    }
    var newArray = [];
    
    for (var i = 0; i < this.length; i++) {
        
        if (Array.isArray(this[i]) && depth > 0) {
            --depth;
            var helpArr = this[i].myFlat(depth);
            for (var j = 0; j < helpArr.length; j++) {
                if (helpArr[j] !== undefined) {
                    newArray.push(helpArr[j]);
                }
            }

        } else if (this[i] !== undefined) {
            newArray.push(this[i]);
        }
        
    }

    return newArray;
    
}

console.log(arr.myFlat(4));


Array.prototype.myFlatMap = function(depth, func) {
    if (depth === undefined) {
        depth = 1;
    }
    var newArray = [];
    
    for (var i = 0; i < this.length; i++) {
        
        if (Array.isArray(this[i]) && depth > 0) {
            --depth;
            var helpArr = this[i].myFlat(depth);
            for (var j = 0; j < helpArr.length; j++) {
                if (helpArr[j] !== undefined && !Array.isArray(helpArr[j]) ) {
                    newArray.push(func(helpArr[j]));
                }
                else {
                    newArray.push(helpArr[j]);
                }
            }

        } else if (this[i] !== undefined) {
            newArray.push(func(this[i]));
        }
        
    }

    return newArray;
    
}

console.log(arr.myFlatMap(5, multiply));



  
Array.prototype.myReduce = function(func, initialValue){
var acc = initialValue;
for (var i = 0; i < this.length; i++) {
    acc = func(acc, this[i], i, this);
}
return acc;
}
