const dsteem = require('dsteem')
const client = new dsteem.Client('https://api.steememory.com');

module.exports.claimAccount = async (username, privateKey) => {
    
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


 // 呼び出し方法
 //this.claimAccount("yasu", dsteem.PrivateKey.fromString("<active_key>"))
 