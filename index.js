// quickCheck takes an array and and element as arguments.
// quickCheck should use indexOf() so that it returns:
// true of the passed element exist on the array and 
// false if it does not

function quickCheck(arr, elem) {
  let index = arr.indexOf(elem)
  console.log(index)
  if (index === -1) {
    return false
  } else {
    return true
  }
}

console.log(quickCheck(['squash', 'onions', 'shallots'], 'onions'));