const dsteem = require('dsteem')
const client = new dsteem.Client('https://api.steememory.com');

module.exports.findRCAccounts = async (username) => {
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

// 同期
async function mainSync(acount_name){ 
    try {
        const ret = await module.exports.findRCAccounts(acount_name)
        console.log("mainSync OK", JSON.stringify(ret))
    } catch (e) {
        console.log("mainSync error",JSON.stringify(e))
    }
 }

// 非同期
async function mainAsync(acount_name){ 
    module.exports.findRCAccounts(acount_name).then(
        (data) => {
          console.log("mainAsync OK", JSON.stringify(data));
        },
        (e) => {
          console.log("mainAsync error", JSON.stringify(e));
        }
    )
 }
 
// 呼び出し方法
mainAsync("yasu")
mainSync("yasu.witness")
 