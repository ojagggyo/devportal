const dsteem = require('dsteem')
const client = new dsteem.Client('https://api.steememory.com');

module.exports.getTicker = async () => {
    client.call('market_history_api','get_ticker',[]).then(
        function(result) {
            console.log('market_history_api','get_ticker')
            console.log(JSON.stringify(result))
        },
        function(error) {
            console.log(error)
        }
    )
}

this.getTicker()
