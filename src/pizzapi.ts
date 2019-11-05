import api from 'dominos';
import { PriceResponse } from '../types/PriceResponse';
import { SuccessfulValidationResponse } from '../types/SuccessfulValidationResponse';
const { Address, Item, Customer, Order, Coupon } = api;

export const standardOrder = (
  address: string,
  email: string,
  phone: string,
  firstName: string,
  lastName: string
) => {
  const store72ndMilitary = 6111;

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

  // const largeHawaiian = new Item({
  //   code: '14SCREEN',
  //   options: ['N', 'H'],
  //   quantity: 1
  // });

  // order.addItem(largeHawaiian);
  //   order.addItem(coke());

  // Large pizza and brownie
  order.addCoupon(discount(5908));
  // Large ham
  order.addItem(
    new Item({
      code: '14SCREEN',
      options: ['H'],
      quantity: 1
    })
  );
  // Brownie
  order.addItem(
    new Item({
      code: 'MARBRWNE',
      options: [],
      quantity: 1
    })
  );
  return order;
};
const discount = (code: number) => {
  return new Coupon({ code });
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

export const place = (
  order: any,
  ccNumber: string,
  expiration: string,
  cvvCode: string,
  zip: string,
  active = false
) => {
  const payment = new order.PaymentObject();
  const cardNumber = ccNumber;
  payment.Amount = order.Amounts.Customer;
  payment.Number = cardNumber;
  payment.CardType = order.validateCC(cardNumber);
  payment.Expiration = expiration;
  payment.SecurityCode = cvvCode;
  payment.PostalCode = zip;
  order.Payments.push(payment);

  if (!active) {
    console.log('not active');
    return Promise.resolve(order);
  }
  return new Promise(res => {
    order.place(response => {
      res(response);
    });
  });
};
