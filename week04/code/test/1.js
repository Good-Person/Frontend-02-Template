// abcabx

function macth(str) {
    let status = start;
    for (let c of str) {
        status = status(c)
    }
    if (status === end) return true;
    return false
}

function start(c) {
    if (c === 'a') {
        return foundA
    } else {
        return start
    }
} 

function end(c) {
    return end
}

function foundA(c) {
    if (c === 'b') {
        return foundB
    } else {
        return start(c)
    }
}

function foundB(c) {
    if (c === 'c') {
        return foundC
    } else {
        return start(c)
    }
}

function foundC(c) {
    if (c === 'a') {
        return foundA2
    } else {
        return start(c)
    }
}

function foundA2(c) {
    if (c === 'b') {
        return foundB2
    } else {
        return start(c)
    }
}

function foundB2(c) {
    if (c === 'x') {
        return end
    } else {
        return foundB(c)
    }
}

console.log(macth('abcdabccabx'))