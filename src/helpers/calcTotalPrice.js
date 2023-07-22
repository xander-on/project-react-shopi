
/**
 * This function calculates total price of a new order
 * @param {Arrays} products cartProduct: Array of objects
 * @returns {number} Total price
 */
export const calcTotalPrice = ( products ) => 
    products.reduce( (sum, product) => sum + product?.price, 0 );