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
    const balance = _accounts[0].balance.split(' ')[0]; // STEEMを除く
    console.log(`balance ${balance} STEEM`);
    if(parseFloat(balance) > 0){   // 0STEEMより多いなら
        await powerup(username, username, `${balance} STEEM`, key)
    }
}


// 呼び出し方法
//this.powerup_all("yasu.pal", "<active_key>")
