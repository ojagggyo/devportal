const dsteem = require('dsteem')
const client = new dsteem.Client('https://api.steememory.com');

// アカウント情報を取得する。
module.exports.getAccountReputationsSync = async (username) => {
    
    // 同期
    //NG let account = await client.call('follow_api','get_account_reputations', {"account_lower_bound":username, "limit":1});
    //NG let account = await client.database.call('get_account_reputations', {"account_lower_bound":username, "limit":1});
    let account = await client.database.call('get_account_reputations', [username, 1]);
    if(account){
        console.log(account);
    }
    
};

// アカウント情報を取得する。（非同期）
module.exports.getAccountReputationsAsync = async (username) => {

    //NG client.call('follow_api','get_account_reputations', {"account_lower_bound":username, "limit":1}).then(
    //NG client.database.call('get_account_reputations', {"account_lower_bound":username, "limit":1}).then(
    client.database.call('get_account_reputations', [username, 1]).then(
        function(result) {
            console.log(result);
        },
        function(error) {
            console.error(error);
        }
    )
};


// 呼び出し方法
this.getAccountReputationsAsync("yasu.witness")
this.getAccountReputationsSync("yasu")