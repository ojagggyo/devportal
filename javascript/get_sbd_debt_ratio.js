const dsteem = require('dsteem')
const client = new dsteem.Client('https://api.steememory.com');

module.exports.get_dynamic_global_properties = async () => {
    return new Promise((resolve, reject) => {
        (async() => {
        client.database.getDynamicGlobalProperties().then(
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

getCurrentMedianHistoryPrice = async () => {
    return new Promise((resolve, reject) => {
        (async() => {
            client.database.getCurrentMedianHistoryPrice().then(
                function(result) {
                    console.log('getCurrentMedianHistoryPrice',result)
                    resolve(result)
                },
                function(error) {
                    reject(error)
                }
            )
        })();
    });
};

async function main(){
    let a = await module.exports.get_dynamic_global_properties();
    current_sbd_supply = Number.parseFloat(a.current_sbd_supply)
    virtual_supply = Number.parseFloat(a.virtual_supply)
    let b = await getCurrentMedianHistoryPrice()
    steem_price = b.base.amount / b.quote.amount

    console.log('current_sbd_supply',current_sbd_supply)
    console.log('virtual_supply    ',virtual_supply)
    console.log('steem_price       ',steem_price)
    console.log('Debt Ratio        ',(current_sbd_supply * 100 / (virtual_supply * steem_price)),"%" )
}

main()

