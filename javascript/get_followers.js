const dsteem = require('dsteem')
const client = new dsteem.Client('https://api.steememory.com');

module.exports.getFollowers = async (username) => {
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

// 同期
async function mainSync(acount_name){ 
    try {
        const ret = await module.exports.getFollowers(acount_name)
        console.log("★★★", JSON.stringify(ret))
    } catch (e) {
        console.log("mainSync error",JSON.stringify(e))
    }
 }

// 非同期
async function mainAsync(acount_name){ 
    module.exports.getFollowers(acount_name).then(
        (data) => {
          console.log("☆☆☆", JSON.stringify(data));
        },
        (e) => {
          console.log("mainAsync error", e);
        }
    )
 }
 
// 呼び出し方法
mainAsync("yasu")
mainSync("yasu.witness")
 