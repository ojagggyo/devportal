const dsteem = require('dsteem')
const client = new dsteem.Client('https://api.steememory.com');

getFollowers = async (username) => {
    return new Promise((resolve, reject) => {
		(async() => {
            //NG client.call('follow_api','get_followers',{account:username,start:'',type:'blog',limit:10}).then(
            client.call('follow_api','get_followers',[username, "", "blog", 10]).then(
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
module.exports.getFollowers

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
 
mainAsync("yasu")
mainSync("yasu.witness")
