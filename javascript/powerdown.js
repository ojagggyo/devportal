const dsteem = require('dsteem')
const client = new dsteem.Client('https://api.steememory.com');

powerdown = async (account, vesting_shares, key) => {

    const op = [
        'withdraw_vesting',
        {
            account: account,
            vesting_shares: (vesting_shares).toFixed(6) + ' VESTS',
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


module.exports.powerdownTest = async (username, key) => {

    const privateKey = dsteem.PrivateKey.fromString(key);

    const _accounts = await client.database.call('get_accounts', [[username]]);
    console.log(_accounts);


    if(_accounts[0].to_withdraw == 0){
        console.log("_accounts[0].to_withdraw == 0");
        return;
        
    }  else{
        console.log("_accounts[0].to_withdraw > 0");
    }

    const name = _accounts[0].name;
    const avail = parseFloat(
            _accounts[0].vesting_shares) 
            - (parseFloat(_accounts[0].to_withdraw) - parseFloat(_accounts[0].withdrawn)) 
            / 1e6 
            - parseFloat(_accounts[0].delegated_vesting_shares
        );
    const props = await client.database.getDynamicGlobalProperties();
    const vestSteem = parseFloat(
            parseFloat(props.total_vesting_fund_steem) * 
            (parseFloat(avail) / parseFloat(props.total_vesting_shares))
        ,6);

    const balanceText = `Available Vests for ${name}: ${avail} VESTS ~ ${vestSteem} STEEM POWER<br/><br/>`;
    console.log(balanceText);

    if(parseFloat(vestSteem) > 400){   
        powerdownVesting_shares = avail / (vestSteem / 400);
        await powerdown(username,  powerdownVesting_shares , privateKey)
    }
}


// 呼び出し方法
this.powerdownTest("usay", "5KK2P4LJavbSJq7XKDymoYG5ER56aYqKMeEUjct4SEx9VJUWGKY")
