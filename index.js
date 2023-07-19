// Code your solution in this file!
function distanceFromHqInBlocks(street) {
    if(street > 42){
    return street - 42;}
    else if(street < 42){
    return 42 - street;}
}

function distanceFromHqInFeet(street) {
    return distanceFromHqInBlocks(street) * 264;
}

function distanceTravelledInFeet(start, destinantion) {
    if(start < destinantion){
    return (destinantion - start)* 264}
    else if(start > destinantion){
        return (start - destinantion)* 264
    }
}

function calculatesFarePrice(start, destination) {
    let dist = distanceTravelledInFeet(start, destination);
    let price
    if (dist <= 400) {
      price = 0;
      return price;
    } else if (dist <= 2000) {
      price = (dist - 400) * 2 / 100;
      return price;
    } else if (dist <= 2500) {
      price = 25;
      return price;
    }
    else {
      return 'cannot travel that far';
    }
  };
