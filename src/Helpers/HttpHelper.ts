export const GetParams = (value: any, link: any = window.location.search) => {
    const params = new URLSearchParams(link);
    return params.get(value);
};


export const GetURL = () => {
    let parser = document.createElement('a');
    parser.href = window.location.href;
    return parser.pathname;
};

let timeout;

export const debounce = (callback, delay = 1000) => {
    return (...args) => {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            callback(...args)
        }, delay)
    }
}