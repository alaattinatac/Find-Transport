const londonLocations = [
  ["Angel", "tube", "bus"],
  ["Greenwich", "bus", "river boat", "dlr", "air line", "tube"],
  ["London Bridge", "tube", "river boat"],
  ["Tower Bridge", "tube", "bus"],
]

function getTransport(arr, value) {
  let result = [];
  for (i = 0; i < arr.length; i++) {
    if (arr[i].includes(value)) {
      result.push(arr[i][0]);
    };
  }
  return result;
}

console.log(getTransport(londonLocations, "river boat"));
console.log(getTransport(londonLocations, "bus"));

function giveMessage(arr, value) {
  getTransport(arr, value).forEach(item => (
    console.log(`You can use "${value}" to go to the ${item}!`)
  ))
}

function giveMessage2(arr, value) {
  console.log(`You can use "${value}" to go to the ${getTransport(arr, value)}!`)
}

giveMessage(londonLocations, "river boat");
giveMessage2(londonLocations, "river boat");