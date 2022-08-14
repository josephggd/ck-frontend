import axios from "axios";
import type {OrderHistory} from "./OrderHistory";
import {API} from "../CommonStrings";

axios.defaults.withCredentials = true

export async function createOrder( menuItem : string ) : Promise<string>{
  const response = await axios.post(API+menuItem );
  if (response.status===200){
    return response.data;
  } else {
    throw new Error("BAD REQUEST");
  }
}
export async function payOrder() : Promise<string>{
  const response = await axios.put(API+"pay" );
  if (response.status===200){
    return response.data;
  } else {
    throw new Error("BAD REQUEST");
  }
}
export async function deliverOrder() : Promise<string>{
  const response = await axios.put(API+"deliver" );
  if (response.status===200){
    return response.data;
  } else {
    throw new Error("BAD REQUEST");
  }
}

export async function getOrderHistoryAggregate() : Promise<OrderHistory | string>{
  const response = await axios.get(API+"byId" );
  if (response.status===200){
    return response.data;
  } else {
    throw new Error("BAD REQUEST");
  }
}