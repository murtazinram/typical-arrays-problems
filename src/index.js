exports.min = function min(array) {
    if (array === undefined || array.length === 0) return 0
    let sort = array.sort((a, b) => a - b);
    return sort[0]
}

exports.max = function max(array) {
    if (array === undefined || array.length === 0) return 0
    let sort = array.sort((a, b) => b - a);
    return sort[0]
}

exports.avg = function avg(array) {
    if (array === undefined || array.length === 0) return 0
    let summa = 0
    for (const item of array) summa += item
    return summa / array.length
}
