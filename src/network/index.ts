import axiosInstanceWithAbort from "./src/abortAxios";
import axiosInstance from './src/axios'
import { handleSuccess, handleError, addCustomHeaders } from "./src/interceptors";

axiosInstance.interceptors.request.use(addCustomHeaders);
axiosInstance.interceptors.response.use(handleSuccess, handleError)

export * from 'axios'
export { axiosInstance, axiosInstanceWithAbort };
export type { AbortFn } from './src/abortAxios'