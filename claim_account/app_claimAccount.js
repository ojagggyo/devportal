const dsteem = require('dsteem')
const client = new dsteem.Client('https://api.steememory.com');

module.exports.claimAccount = async (username, privateKey) => {
    
await client.database.call('get_accounts', [[username]]);

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
 