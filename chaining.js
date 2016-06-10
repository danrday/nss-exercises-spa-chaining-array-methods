var integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];


function weirdMath (numberInput) {
  for (var i=0; i < numberInput.length; i++) {
    console.log("i", i);
    console.log("weirdmath", numberInput[i]);
    numberInput[i] = (numberInput[i]*1.5)-1;
    return numberInput;
  }
};


weirdMath(integers);


function removeNums (somethingElse) {
  console.log(somethingElse)
  var lessThan19 = new Array();
  var arrayCounter = 0;
  for (var i = 0; i< somethingElse.length; i++) {
    if (somethingElse[i] <= 19) {
      lessThan19[arrayCounter] = somethingElse[i];
      arrayCounter ++;
      // console.log(lessThan19);
      // console.log(typeof(lessThan19));
};
    }
    return lessThan19;
}



function sortNumber(a,b) {
    return a - b;
}

integers.sort(sortNumber);
console.log(integers.join(", "));


console.log("sort, reverse, math, remove numbers:", removeNums(weirdMath(integers.sort(sortNumber).reverse())));

var newNumArray = removeNums(weirdMath(integers.sort(sortNumber).reverse()));



var sumOfNums = document.getElementById("sumOfNums");

sumOfNums.innerHTML =  `<p>Sum of manipulated numbers: ${newNumArray}</p>`;


// console.log("removeNums", removeNums(integers));

var poi = removeNums(integers);

console.log(poi);
