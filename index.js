/*findMatching(): returns all drivers that match the passed in name.*/
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby'];
function findMatching(array, driver){
  const matchers = [];
  for (let i=0; i<array.length; i++){
    if (array[i].toLowerCase() === driver.toLowerCase()){
        matchers.push(array[i]);
    }
  }
  return matchers;
}
//fuzzyMatch(): returns a driver if beginning provided letters match, & does not return drivers if only middle or ending letters match.

  function fuzzyMatch(drivers, nameQuery ){
    return drivers.filter(function(driver){
      return driver.indexOf(nameQuery) === 0
    })
  }
  //or 
  /*function fuzzyMatch(drivers, nameQuery ){
    return drivers.filter(function(driver){
      return driver.startsWith(nameQuery)
    })
  }*/

  /*`matchName` - `
  as arguments.The function should return each element whose `name` property matches the
  provided `string` argument.*/
  const drivers1 = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];
  function matchName(drivers1, driverName){
    return drivers1.filter(function(driver){
      return driver.name === driverName;
    })
  }
  