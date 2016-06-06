'use strict'

module.exports = (callback, delay, n) => {
    let i = 0
    const interval = setInterval(() => {
        callback(i)
        if (++i == n)
            clearInterval(interval)
    }, delay)
    return interval
}
