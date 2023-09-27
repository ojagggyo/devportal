// const get_following = require('./get_following.js')
// const get_followers = require('./get_followers.js')
// const get_accounts = require('./get_accounts.js')
// const get_account_reputations = require('./get_account_reputations.js')
// const get_follow_count = require('./get_follow_count.js')
// const find_rc_accounts = require('./find_rc_accounts.js')
// get_following.getFollowing("yasu.witness")
// get_followers.getFollowers("yasu.witness")
// get_accounts.getAccounts("yasu.witness")
// get_account_reputations.getAccountReputations("yasu.witness")
// get_follow_count.getFollowCount("yasu.witness")
// find_rc_accounts.findRCAccounts("yasu.witness")

const xxx = require('./call.js')
// xxx.call('follow_api','get_following',["yasu.witness","","blog",10])
// xxx.call('follow_api','get_followers',["yasu.witness", "", "blog", 10])
// xxx.call('condenser_api','get_accounts',[["yasu.witness"]])
// xxx.call('condenser_api','get_account_reputations',["yasu.witness", 1])
// xxx.call('condenser_api','get_follow_count',["yasu.witness"])
// xxx.call('rc_api','find_rc_accounts',{"accounts":["yasu.witness"]} )

//bridge
//xxx.call('bridge','get_ranked_posts', {"sort":"trending","tag":"","observer":"alice"})

xxx.callAsync("condenser_api","get_witnesses_by_vote", ["",107]).then(
    function(result) {
        //console.log(JSON.stringify(result))

        for (let index = 0; index < result.length; index++) {
            let witness = result[index]
            if (witness.owner != "yasu.witness"){
                continue
            }
            console.log(index+1,witness.owner,witness.votes/10^6)
        }
    },
    function(error) {
        console.log(error)
    }
)