import axios from "axios";

import config from "./endpoint";
import { useAsyncAwait } from "../hooks/asyncAwaitHook";

const instance = axios.create({
  baseURL: config.baseUrl,
});

const generateSubPath = (path: string, key: string, val: string) => {
  return path.replace(key, val);
};

export const GetDetailsById = async (id: string) =>
  useAsyncAwait(
    instance.get(generateSubPath(config.api.getDetails, "{id}", id))
  );

export const GetSearchItems = async (keyVal: string) =>
  useAsyncAwait(instance.get(`${config.api.getSearchValue}?q=${keyVal}`));
