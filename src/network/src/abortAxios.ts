import { AxiosRequestConfig, AxiosResponse } from 'axios';
import axiosInstance from './axios'

export type AbortFn = () => void;

export type AbortAxiosReturnType<R> = {
    axiosPromise: Promise<R>;
    abort: AbortFn
}

class AbortAxios {
    get<D = any, T = any, R = AxiosResponse<T, any>>(url: string, config?: AxiosRequestConfig<D> | undefined): AbortAxiosReturnType<R> {
        const controller = new AbortController()
        return {
            axiosPromise: axiosInstance.get(url, {
                ...config,
                signal: controller.signal
            }),
            abort: () => controller.abort
        }
    }

    post<T = any, R = AxiosResponse<T, any>, D = any>(
        url: string,
        data?: D | undefined,
        config?: AxiosRequestConfig<D> | undefined,
    ): AbortAxiosReturnType<R> {
        const controller = new AbortController();
        return {
            axiosPromise: axiosInstance.post(url, data, {
                ...config,
                signal: controller.signal,
            }),
            abort: () => controller.abort(),
        };
    }

    put<T = any, R = AxiosResponse<T, any>, D = any>(
        url: string,
        data?: D | undefined,
        config?: AxiosRequestConfig<D> | undefined,
    ): AbortAxiosReturnType<R> {
        const controller = new AbortController();
        return {
            axiosPromise: axiosInstance.put(url, data, {
                ...config,
                signal: controller.signal,
            }),
            abort: () => controller.abort(),
        };
    }

    delete<T = any, R = AxiosResponse<T, any>, D = any>(
        url: string,
        config?: AxiosRequestConfig<D> | undefined,
    ): AbortAxiosReturnType<R> {
        const controller = new AbortController();
        return {
            axiosPromise: axiosInstance.delete(url, {
                ...config,
                signal: controller.signal,
            }),
            abort: () => controller.abort(),
        };
    }
}

const axiosInstanceWithAbort = new AbortAxios()
export default axiosInstanceWithAbort