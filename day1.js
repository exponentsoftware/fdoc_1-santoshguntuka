 //2a
let triangle = ""
for (let i = 0; i<7; i++) {
  triangle = triangle + "#"
  console.log(triangle)
} 


//2b

function sevenRandomNumbers() {
    var arr=[];
    while(arr.length <7){
        var r = Math.floor(Math.random() * 10) ;
    if(arr.indexOf(r) === -1) arr.push(r);
}
console.log(arr);
}

sevenRandomNumbers();



//2c

function reverseArray(array){
    var output = [];
    for (var i = array.length - 1; i> -1; i--){
        output.push(array[i]);
    }

    return output;
}

console.log(reverseArray(["A", "B", "C"]));

//2d

const arrOne = [1, 4, 6, 2, 1];
const arrTwo = [1, 4, 6, 2, 3];

function checkUniqueness(array) {
    var valuesSoFar = Object.create(null);
    for (var i = 0; i < array.length; ++i) {
        var value = array[i];
        if (value in valuesSoFar) {
            return false;
        }
        valuesSoFar[value] = false;
    }
    return true;
}

console.log(checkUniqueness(arrOne));
console.log(checkUniqueness(arrTwo));
