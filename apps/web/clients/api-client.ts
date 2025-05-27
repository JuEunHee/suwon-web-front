import axios from "axios";
import qs from "qs";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const apiClient = axios.create({
  baseURL: API_URL,
  /**
   * @example
   * { a: 1, b: 2 } => a=1&b=2
   * { a: [1, 2, 3] } => a[]=1&a[]=2&a[]=3
   */
  paramsSerializer: (params) => qs.stringify(params, { encode: false }),
});
