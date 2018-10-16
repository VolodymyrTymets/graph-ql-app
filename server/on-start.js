const { Car } = require('./src/models/car')

const addCars = async () => {
  const count = await Car.find({}).countDocuments();
  if (!count) {
    for (let index = 0; index < 100; index ++) {
      const model = new Car({
        title: `car ${index +1}`,
        description: `description ${index +1}`
      });
      await model.save();
    }
  }
};


const onAppStart = async () => {
  try {
    await addCars();
  } catch (error) {
    console.log('---> on start Error: ');
    console.log(error)
  }
};

module.exports = { onAppStart };