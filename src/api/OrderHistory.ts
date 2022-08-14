import type {MenuItem} from "./MenuItem";
import type {OrderState} from "./OrderState";

export interface OrderHistory {
  number : string;
  menuItem : MenuItem;
  currentState : OrderState;
  receivedDate : string;
  preparedDate : string;
  paidDate : string;
  deliveredDate : string;
}