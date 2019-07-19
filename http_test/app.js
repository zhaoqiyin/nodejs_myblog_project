const http = require('http')
const querystring = require('querystring')

// 以下为get请求
// const server = http.createServer((req, res) => {
//     console.log('method: ', req.method)
//     const url = req.url
//     console.log('url: ', url)
//     req.query = querystring.parse(url.split('?')[1])
//     console.log('query: ', req.query)
//     res.end(
//         JSON.stringify(req.query)
//     )
// })

// 以下为post请求
const server = http.createServer((req, res) => {
    if (req.method == 'POST') {
        // req 的数据格式
        console.log('req content-type: ', req.headers['content-type'])
        // 接收数据
        let postData = ''
        req.on('data', chunk => {
            // chunk是二进制格式
            postData += chunk.toString()
        })
        req.on('end', () => {
            console.log('postData: ', postData)
            res.end('hello world !')
        })
    }
})

server.listen(8000)
console.log('ok')