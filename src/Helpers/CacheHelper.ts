import { ApplicationCache } from "../Store/Settings"

export const createCache = () => {
    localStorage.setItem(ApplicationCache, "{}");
}

export const addToCache = (key: string, data: any, time: number = 60) => {
    let json;
    let cache;
    let date = new Date();
    if (localStorage.getItem(ApplicationCache) === null) {
        createCache();
    }

    let expiration = date.setMinutes(date.getMinutes() + time);

    cache = JSON.parse(localStorage.getItem(ApplicationCache)!);
    cache[key] = { ...data, expiration: expiration };
    json = JSON.stringify(cache);
    localStorage.setItem(ApplicationCache, json);
}

export const getFromCache = (key: string) => {
    let data;
    let cache = localStorage.getItem(ApplicationCache)!;
    data = JSON.parse(cache);
    if (data && data[key]) {
        return data[key].expiration > new Date() ? data[key] : undefined;
    }
    return undefined;
}