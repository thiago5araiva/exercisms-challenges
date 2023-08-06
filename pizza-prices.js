const pizzaPrices = {
  Margherita: 7,
  Caprese: 9,
  Formaggio: 10,
};

const extraPrices = {
  ExtraSauce: 1,
  ExtraToppings: 2,
};

export function pizzaPrice(pizza, ...extras) {
  if (extras.length === 0) return pizzaPrices[pizza];
  return extraPrices[extras[0]] + pizzaPrice(pizza, ...extras.slice(1));
}

export function orderPrice(pizzaOrders) {
  return pizzaOrders.reduce(
    (result, order) => result + pizzaPrice(order.pizza, ...order.extras),
    0
  );
}
