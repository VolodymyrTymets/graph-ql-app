import React from 'react';
import PropTypes from 'prop-types';

const CarList = ({ cars }) =>
  (<div>
    {cars.map(car => (
      <div>
        <h2>{car.title}</h2>
        <hp>{car.description}</hp>
      </div>
    ))}
  </div>);

CarList.propTypes = {
  cars: PropTypes.array.isRequired,
};

export default CarList;
