import {OrderState} from "./api/OrderState";

export const receivedList = [
  OrderState.RECEIVED,
  OrderState.PREPARED,
  OrderState.PAID,
  OrderState.DELIVERED
];
export const preparedList = [
  OrderState.PREPARED,
  OrderState.PAID,
  OrderState.DELIVERED
];
export const paidList = [
  OrderState.PAID,
  OrderState.DELIVERED
];
export const deliveredList = [
  OrderState.DELIVERED
];