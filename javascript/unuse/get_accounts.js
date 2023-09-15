const dsteem = require('dsteem')
const client = new dsteem.Client('https://api.steememory.com');

// アカウント情報を取得する。
module.exports.getAccountSync = async (username) => {
    
    // 同期
    let account = await client.database.call('get_accounts', [[username]]);
    if(account){
        console.log(account[0]);
    }
    
};

// アカウント情報を取得する。（非同期）
module.exports.getAccountAsync = async (username) => {

    client.database.call('get_accounts', [[username]]).then(
        function(result) {
            console.log(result[0]);
        },
        function(error) {
            console.error(error);
        }
    )
};


// 呼び出し方法
this.getAccountAsync("yasu")
this.getAccountSync("yasu")