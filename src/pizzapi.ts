import api from 'dominos';
import { PriceResponse } from '../types/PriceResponse';
import { SuccessfulValidationResponse } from '../types/SuccessfulValidationResponse';
const { Address, Item, Coupon, Store, Customer, Order } = api;

export const standardOrder = (
  address: string,
  email: string,
  phone: string,
  firstName: string,
  lastName: string
) => {
  const store72ndMilitary = 6111;

  const store = new Store({
    ID: store72ndMilitary
  });

  const customer = new Customer({
    address: new Address(address),
    firstName,
    lastName,
    email,
    phone
  });

  const order = new Order({
    customer: customer,
    storeID: store72ndMilitary,
    deliveryMethod: 'Delivery'
  });
  // order.customer = customer;
  // order.deliveryMethod = 'Delivery';
  // order.storeID = store.ID;
  // delete order.OrderID; // Maybe need to do this?
  const largeHawaiian = new Item({
    code: '14SCREEN',
    options: ['N', 'H'],
    quantity: 1
  });
  order.addItem(largeHawaiian);
  //   order.addItem(coke());

  // 20% discount
  //   order.addCoupon(discount());
  return order;
};

export const validate = order => {
  return new Promise<SuccessfulValidationResponse>(res => {
    order.validate(response => {
      res(response);
    });
  });
};

export const price = order => {
  return new Promise<PriceResponse>(res => {
    order.price(response => {
      res(response);
    });
  });
};
function discount(): any {
  return new Coupon({
    code: 9214
  });
}

function coke() {
  return new Item({
    code: '2LCOKE',
    options: [],
    quantity: 1
  });
}
