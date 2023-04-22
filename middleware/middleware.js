// 前端模拟服务
// 安装 npm i express -D
// 启动 node .\middlewre.js
// 如出现require报错信息 删除package.json 文件中"type": "module",；重新运行

let express = require('express')
let app = express()

app.get('/getData',function(req,res){
    const jsonData = [{
        ids:'no1',
        name:'一号',
        img:'',
        desc:'飞毛腿一号',
        key:11
    },{
        ids:'no2',
        name:'二号',
        img:'',
        desc:'飞毛腿二号',
        key:12
    },{
        ids:'no3',
        name:'三号',
        img:'',
        desc:'飞毛腿三号',
        key:13
    }]

    res.send(jsonData)
})

app.listen(5678,()=>{
    console.log("前端服务5678开始执行")
})