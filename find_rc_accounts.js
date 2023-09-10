const dsteem = require('dsteem')
const client = new dsteem.Client('https://api.steememory.com');

// curl -s --data '{"jsonrpc":"2.0", 
// "method":"rc_api.find_rc_accounts", 
// "params":{"accounts":["yasu"]}, "id":1}' 

//client.database.call('get_state', [query]).then(result => {

module.exports.findRCAccounts = async (username) => {
    
    client.rc.call('find_rc_accounts', {"accounts":["yasu"]} ).then(
        function(result) {
            console.log(result[0]);
        },
        function(error) {
            console.error(error);
        }
    )
};

 // 呼び出し方法
 this.findRCAccounts("yasu")
 