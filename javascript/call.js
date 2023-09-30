const dsteem = require('dsteem')
const client = new dsteem.Client('https://api.steememory.com');

module.exports.call = async (api, method, params) => {
    client.call(api,method,params).then(
        function(result) {
            console.log('\n', api, method,JSON.stringify(params))
            console.log(JSON.stringify(result))
        },
        function(error) {
            console.log(error)
        }
    )
}


module.exports.callAsync  =  async (api, method, params) => {
    return new Promise((resolve, reject) => {
		(async() => {
            client.call(api,method,params).then(
                function(result) {
                    resolve(result)
                },
                function(error) {
                    reject(error)
                }
            )
        })();
    });
}

