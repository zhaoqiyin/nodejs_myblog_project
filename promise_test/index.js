const fs = require('fs')
const path = require('path')

// // callback 方式获取一个文件的内容
// function getFileContent(fileNmae, callback) {
//     const fullFileName = path.resolve(__dirname, 'files', fileNmae)
//     fs.readFile(fullFileName, (err, data) => {
//         if (err) {
//             console.error(err)
//             return
//         }
//         callback(
//             JSON.parse(data.toString())
//         )
//     })
// }

// // 测试 callback-hell
// getFileContent('a.json', aData => {
//     console.log('a Data', aData)
//     getFileContent(aData.next, bData => {
//         console.log('b data', bData)
//         getFileContent(bData.next, cData => {
//             console.log('c Data', cData)
//         })
//     })
// })

// 用 promise 获取文件内容
function getFileContent(fileNmae) {
    const promise = new Promise((resolve, reject) => {
        const fullFileName = path.resolve(__dirname, 'files', fileNmae)
        fs.readFile(fullFileName, (err, data) => {
            if (err) {
                reject(err)
                return
            }
            resolve(
                JSON.parse(data.toString())
            )
        })
    })
    return promise
}

getFileContent('a.json').then(aData => {
    console.log('a data', aData)
    return getFileContent(aData.next)
}).then(bData => {
    console.log('b data', bData)
    return getFileContent(bData.next)
}).then(cData => {
    console.log('c data', cData)
})

// async await
// koa2