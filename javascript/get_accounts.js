const dsteem = require('dsteem')
const client = new dsteem.Client('https://api.steememory.com');

// アカウント情報を取得する。
module.exports.getAccount = async (username) => {
    
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



this.getAccountAsync("yasu")
this.getAccount("yasu")