function permutation(num) {

// 60 = 2 * 3 * 2 * 5

}

permutation(2042)


function maxMin(num){
    num = num.toString().split('')
    let max = parseInt(num.sort().reverse().join(''))
    let min = parseInt(num.sort().join(''))

    console.log(`
        Max : ${max}
        Min : ${min}
    `)
}

maxMin(0953198)