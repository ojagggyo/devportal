const dsteem = require('dsteem')
const client = new dsteem.Client('https://api.steememory.com');

module.exports.findRCAccounts = async (username) => {
    
    client.call('rc_api','find_rc_accounts', {"accounts":[username]} ).then(
        function(result) {
            console.log(JSON.stringify(result));
        },
        function(error) {
            console.error(JSON.stringify(error));
        }
    )
};

 // 呼び出し方法
 this.findRCAccounts("yasu")
 