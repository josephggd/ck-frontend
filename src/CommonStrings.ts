import {OrderState} from "./api/OrderState";

export const BE = "http://localhost:8080/";
export const API = BE+"api/orders/";
export const DRAWIO = "https://drive.google.com/file/d/1YtqF87aVDY4CopVpH5qfJfiiHpHuFt86/view?usp=sharing";
export const GITHUB = "https://github.com/josephggd/cafe-kafka";
export const SWAGGER = BE+"swagger-ui/index.html";

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