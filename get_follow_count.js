const dsteem = require('dsteem')
const client = new dsteem.Client('https://api.steememory.com');

getFollowCount = async (username) => {
    return new Promise((resolve, reject) => {
		(async() => {
            //NG client.call('follow_api','get_follow_count',{"account": username}).then(
            //NG client.database.call('get_follow_count',{"account": username}).then(
            client.database.call('get_follow_count',[username]).then(
                function(result) {
                    resolve(result)
                },
                function(error) {
                    reject(error)
                }
            )
        })();
    });
};
module.exports.getFollowCount

// Sync sample
mainSync = async (acount_name) => { 
    try {
        const ret = await getFollowCount(acount_name)
        console.log("★★★ ok", JSON.stringify(ret))
    } catch (e) {
        console.log("★★★ error",e)
    }
 }

// Async sample
mainAsync = async (acount_name) => { 
    getFollowCount(acount_name).then(
        (data) => {
          console.log("☆☆☆ ok", JSON.stringify(data));
        },
        (e) => {
          console.log("☆☆☆ error", e);
        }
    )
 }
 
//mainAsync("yasu")
mainSync("yasu.witness")
