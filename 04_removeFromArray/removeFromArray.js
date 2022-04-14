const removeFromArray = function(anArray, ...theRemovers) {
  let theArray = anArray;
  for (const remover in theRemovers) {
    theArray = theArray.filter(value => value !== theRemovers[remover]);
  };
  return theArray;
};

// Do not edit below this line
module.exports = removeFromArray;
