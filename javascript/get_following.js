const dsteem = require('dsteem')
const client = new dsteem.Client('https://api.steememory.com');

getFollowing = async (username) => {
    return new Promise((resolve, reject) => {
		(async() => {
            client.call('follow_api','get_following',[username,"","blog",10]).then(
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
module.exports.getFollowing

// Sync sample
mainSync = async (acount_name) => { 
    try {
        const ret = await getFollowing(acount_name)
        console.log("★★★ ok", JSON.stringify(ret))
    } catch (e) {
        console.log("★★★ error",JSON.stringify(e))
    }
 }

// Async sample
mainAsync = async (acount_name) => { 
    getFollowing(acount_name).then(
        (data) => {
          console.log("☆☆☆ ok", JSON.stringify(data));
        },
        (e) => {
          console.log("☆☆☆ error", e);
        }
    )
 }
 
mainAsync("yasu")
mainSync("yasu.witness")
