import type {Order} from "../interface/Order";
import axios from "axios";
import {BE} from "../CommonStrings";
export async function createOrder( menuItem : string ) {
  try {
    const response = await axios.post(BE+"new/"+menuItem );
    if (response.status===200){
      return response.data;
    } else {
      throw new Error("BAD REQUEST");
    }
  } catch {
    return "BAD REQUEST";
  }
}
export async function payOrder() {
  try {
    const response = await axios.put(BE+"current/pay");
    if (response.status===200){
      return response.data;
    } else {
      throw new Error("BAD REQUEST");
    }
  } catch {
    return "BAD REQUEST";
  }
}
export async function deliverOrder() {
  try {
    const response = await axios.put(BE+"current/deliver");
    if (response.status===200){
      return response.data;
    } else {
      throw new Error("BAD REQUEST");
    }
  } catch {
    return "BAD REQUEST";
  }
}