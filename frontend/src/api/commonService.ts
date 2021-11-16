import axios from "axios";

import endpoint from "./endpoint"
import { useAsyncAwait } from "../hooks/asyncAwaitHook";

const instance = axios.create({
  baseURL: endpoint.baseUrl,
});

export const GetDetailsById = async () =>
  useAsyncAwait(instance.get(endpoint.api.getDetails));
