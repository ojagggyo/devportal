const dsteem = require('dsteem')
const client = new dsteem.Client('https://api.steememory.com');


powerup = async (from, to, amount, key) => {

    const op = [
        'transfer_to_vesting',
        {
            from: from,
            to: to,
            amount: amount
        },
    ];
    client.broadcast.sendOperations([op], key).then(
        function(result) {
            console.log(result);
        },
        function(error) {
            console.error(error);
        }
    );
};


module.exports.powerup_all = async (username, key) => {
    const _accounts = await client.database.call('get_accounts', [[username]]);
    const balance = _accounts[0].balance.split(' ')[0];
    console.log(`balance ${balance} STEEM`);
    if(parseFloat(balance) > 10){
        await powerup(username, username, `${balance} STEEM`, key)
    }
}
