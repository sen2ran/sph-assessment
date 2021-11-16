import axios from "axios";

import config from "./endpoint";
import { useAsyncAwait } from "../hooks/asyncAwaitHook";

const instance = axios.create({
  baseURL: config.baseUrl,
});

export const GetDetailsById = async () =>
  useAsyncAwait(instance.get(config.api.getDetails));

export const GetSearchItems = async () =>
  useAsyncAwait(instance.get(config.api.getSearchValue));
