const dsteem = require('dsteem')
const app = require('./app_claimAccount.js')

//コマンドパラメータ取得
let [acount_name, active_key] = process.argv.slice(2)
if (!acount_name || !active_key) {
    process.stderr.write(`Usage: ./app.js <acount_name> <active_key>\n`)
    process.exit(1)
}
console.log(`acount_name=${acount_name}`);
console.log(`active_key=非表示`);

async function main(acount_name, key){ 
   app.claimAccount(acount_name, key)
}

main(acount_name, dsteem.PrivateKey.fromString(active_key))
