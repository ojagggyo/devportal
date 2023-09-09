const dsteem = require('dsteem')
const client = new dsteem.Client('https://api.steememory.com');


transfer = async (from, to, amount, memo, key) => {
    const transf = {
        from : from,
        to : to,
        amount : amount,
        memo : memo
    };

    client.broadcast.transfer(transf, key).then(
        function(result) {
            console.log(result);
        },
        function(error) {
            console.error(error);
        }
    )
}

module.exports.transfer_all = async (from, to, key) => {
    const _accounts = await client.database.call('get_accounts', [[from]]);
    //console.log(`_accounts:`, _accounts);
    const balance = _accounts[0].balance.split(' ')[0];
    const sbd_balance = _accounts[0].sbd_balance.split(' ')[0];
    console.log(`balance ${balance} STEEM, ${sbd_balance} SBD`);
    if(parseFloat(balance) > 10){//10STEEM
        await transfer(from, to, `${balance} STEEM`, "", key)
    }
    if(parseFloat(sbd_balance) > 1){//1SBD
        await transfer(from, to, `${sbd_balance} SBD`, "", key)
    }
}


module.exports.transfer_1 = async (from, to, memo, amount, key) => {
    const _accounts = await client.database.call('get_accounts', [[from]]);
    const balance = _accounts[0].balance.split(' ')[0];
    console.log(`balance ${balance} STEEM`);    
    if(parseFloat(balance) > 0.001){//0.001STEEM
        await transfer(from, to, `${amount} STEEM`, memo, key)
    }
}