import React from 'react';
import FoodMenu from './FoodMenu'; // Use FoodMenu for drinks

/**
 * Drinks page to display the list of drinks.
 * @param {Object} props - The component props.
 * @param {Array} props.drinks - The list of drinks to display.
 */
const Drinks = ({ drinks }) => {
    return <FoodMenu snacks={drinks} />; // Reuse FoodMenu for drinks
};

export default Drinks;
