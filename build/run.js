const path = require('path')
const filePath = require('./filePath.js')
const runShell = require('./util').runShell
// 启动项目
function runChild () {
  Object.keys(filePath).forEach(item => {
    const childPath = filePath[item]
    console.log(require('./util'));
    runShell(`cd ${childPath} && yarn dev`)
  });
  runShell(`node ${path.join(__dirname, './openBrowser.js')}`)
}

runChild()
