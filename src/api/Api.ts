import type {Order} from "../interface/Order";
import axios from "axios";
export async function postOrder( order : Order ) {
  try {
    const response = await axios.post("URL", order);
    if (response.status===200){
      return response.data;
    } else {
      throw new Error("BAD REQUEST");
    }
  } catch {
    return "BAD REQUEST";
  }
}
export async function getActiveOrder( id: string ) {
  try {
    const response = await axios.get("URL/"+id);
    if (response.status===200){
      return response.data;
    } else {
      throw new Error("BAD REQUEST");
    }
  } catch {
    return "BAD REQUEST";
  }
}