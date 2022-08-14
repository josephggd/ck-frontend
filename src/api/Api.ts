import axios from "axios";
import type {OrderHistory} from "./OrderHistory";

const BE:string = import.meta.env.VITE_BACKEND;

export async function createOrder( menuItem : string ) {
  const response = await axios.post(BE+menuItem );
  if (response.status===200){
    return response.data;
  } else {
    throw new Error("BAD REQUEST");
  }
}
export async function payOrder() {
  const response = await axios.put(BE+"pay");
  if (response.status===200){
    return response.data;
  } else {
    throw new Error("BAD REQUEST");
  }
}
export async function deliverOrder() {
  const response = await axios.put(BE+"deliver");
  if (response.status===200){
    return response.data;
  } else {
    throw new Error("BAD REQUEST");
  }
}

export async function getOrderHistoryAggregate() : Promise<OrderHistory | string>{
  const response = await axios.get(BE+"byId");
  if (response.status===200){
    return response.data;
  } else {
    throw new Error("BAD REQUEST");
  }
}