const data = require('./data')
const LATENCY = 16

export function getData (cb) {
    setTimeout(() => {
        cb(data)
    }, LATENCY)
}