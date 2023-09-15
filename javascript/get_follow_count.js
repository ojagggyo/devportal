const dsteem = require('dsteem')
const client = new dsteem.Client('https://api.steememory.com');

module.exports.getFollowCount = async (username) => {
    //NG client.call('follow_api','get_follow_count',{"account": username}).then(
    //NG client.database.call('get_follow_count',{"account": username}).then(
    client.database.call('get_follow_count',[username]).then(
        function(result) {
            console.log('condenser_api','get_follow_count')
            console.log(JSON.stringify(result))
        },
        function(error) {
            console.log(error)
        }
    )
}


//mainAsync("yasu")
//mainSync("yasu.witness")
