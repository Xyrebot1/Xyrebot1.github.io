// p5js template project - replace with project title
// Dan Schellenberg - replace with your name
// Feb 2, 2018 - replace with the date

// global variables
let someList = [5, 15, 3, 8, 9, 1, 20, 7];

function setup() {
  print(someList);
  someList = selectionSort(someList);
}

function selectionSort(aList) {
  let swapLocation = 0;

  while (swapLocation < aList.length) {
    let smallestLocation = swapLocation;

    for (let i = swapLocation; i < aList.length; i++) {
      if (aList[i] < aList[smallestLocation]) {
        smallestLocation = i;
      }
    }

    let j = aList[swapLocation];
    aList[swapLocation] = aList[smallestLocation];
    aList[smallestLocation] = j;

    swapLocation++;
    print(aList)
  }
  return aList
}

function bubbleSort(aList) {
  let swapRequired = true;

  while (swapRequired) {
    swapRequired = false;

    for (let i = 0; i < aList.length - 1; i++) {
      if (aList[i] > aList[i + 1]) {
        let j = aList[i];
        aList[i] = aList[i + 1];
        aList[i + 1] = j;
        swapRequired = true;
      }
    }
    print(aList)
  }
  return aList;
}
