const dsteem = require('dsteem')
const client = new dsteem.Client('https://api.steememory.com');

findRCAccounts = async (username) => {
    return new Promise((resolve, reject) => {
		(async() => {
            client.call('rc_api','find_rc_accounts', {"accounts":[username]} ).then(
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
module.exports.findRCAccounts

// Sync sample
mainSync = async (acount_name) => { 
    try {
        const ret = await getFollowers(acount_name)
        console.log("★★★ ok", JSON.stringify(ret))
    } catch (e) {
        console.log("★★★ error",JSON.stringify(e))
    }
 }

// Async sample
mainAsync = async (acount_name) => { 
    getFollowers(acount_name).then(
        (data) => {
          console.log("☆☆☆ ok", JSON.stringify(data));
        },
        (e) => {
          console.log("☆☆☆ error", e);
        }
    )
 }
 
// 呼び出し方法
mainAsync("yasu")
mainSync("yasu.witness")
 