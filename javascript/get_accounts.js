const dsteem = require('dsteem')
const client = new dsteem.Client('https://api.steememory.com');

// アカウント情報を取得する。（非同期）
module.exports.getAccounts = async (username) => {
    client.database.call('get_accounts', [[username]]).then(
        function(result) {
            console.log('condenser_api','get_accounts')
            console.log(JSON.stringify(result))
        },
        function(error) {
            console.log(error)
        }
    )
};


// 呼び出し方法
//this.getAccountAsync("yasu")
