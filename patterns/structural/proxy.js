function networkFetch(url) {
    return `${url} - ответ с сервера`;
}
const cache = new Set();
const proxiedFetch = new Proxy(networkFetch, {
    apply(target, thisArg, args) {
        const url = args[0];
        if (cache.has(url)) {
            return `${url} - answer from cache`
        } else {
            cache.add(url);
            return Reflect.apply(target, thisArg, args);
        }
    }
});

console.log(proxiedFetch('angular.io'));
console.log(proxiedFetch('angular.io'));