function sales(carsSold) {
  let totals = { Ford: 0, "Land Rover": 0, Toyota: 0, Honda: 0 };
  for (let car of carsSold) {
    if (car.make === "Ford") totals.Ford += car.price;
    else if (car.make === "Land Rover") totals["Land Rover"] += car.price;
    else if (car.make === "Toyota") totals.Toyota += car.price;
    else if (car.make === "Honda") totals.Honda += car.price;
  }
  return totals;
}

module.exports = sales;
