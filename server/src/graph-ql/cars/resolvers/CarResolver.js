const { mongooseModels } = require('../../../models');

class CarResolver {
  constructor(mongooseModels) {
    const { Car } = mongooseModels;
    this.Car = Car;
    this.getCars = this.getCars.bind(this);
    this.getCar = this.getCar.bind(this);
  }

  async getCars() {
    return await this.Car.find({});
  }

  async getCar(prevNode, args) {
    const { _id } = args;
    return await this.Car.findOne({ _id });
  }
}

const carResolver = new CarResolver(mongooseModels);


module.exports = { carResolver };