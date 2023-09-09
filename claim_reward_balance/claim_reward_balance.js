const dsteem = require('dsteem')
const client = new dsteem.Client('https://api.steememory.com');

module.exports.claim_reward_balance = async (username, key) => {
    const _accounts = await client.database.call('get_accounts', [[username]]);
    //console.log(`_accounts:`, _accounts);
    const reward_steem = _accounts[0].reward_steem_balance.split(' ')[0];
    const reward_sbd = _accounts[0].reward_sbd_balance.split(' ')[0];
    const reward_sp = _accounts[0].reward_vesting_steem.split(' ')[0];
    const reward_vests = _accounts[0].reward_vesting_balance.split(' ')[0];
    console.log(`reward ${reward_steem} STEEM, ${reward_sbd} SBD, ${reward_sp} SP`);
    if(parseFloat(reward_steem) > 0 || parseFloat(reward_sbd) > 0 || parseFloat(reward_sp) > 2){
        const op = [
            'claim_reward_balance',
            {
                account: username,
                reward_steem: reward_steem + ' STEEM',
                reward_sbd: reward_sbd + ' SBD',
                reward_vests: reward_vests + ' VESTS',
            },
        ];
        let ret = await client.broadcast.sendOperations([op], key);
        console.log(ret);
    }
}