const dsteem = require('dsteem')
const client = new dsteem.Client('https://api.steememory.com');

claimAccount = async (username, privateKey) => {

    const op = [
        'claim_account',
        {
            creator: username,
            fee: '0.000 STEEM',
            extensions: [],
        }
    ];

    client.broadcast.sendOperations([op], privateKey).then(
        function(result) {
            console.log(result);
        },
        function(error){
            console.error(error);
        }
    );

 };
 module.exports.claimAccount

 // 呼び出し方法
const acount_name = process.env.ACCOUNT_NAME;
const active_key = process.env.ACTIVE_KEY;
console.error("acount_name",acount_name);
console.error("active_key",active_key?"***":"---");
if(!active_key) return;
claimAccount(acount_name, dsteem.PrivateKey.fromString(active_key))
