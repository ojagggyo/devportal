//https://github.com/steemit/dsteem/blob/master/src/steem/operation.ts#L750
//https://github.com/steemit/dsteem/blob/master/src/steem/operation.ts#L862
//signing_keys
//STM5W6uYk2nee1QKA6iV4aXBbtLYgQMFAuakVz9cjnCguwss1pe5L
//STM1111111111111111111111111111111114T1Anm

const dsteem = require('dsteem');
const client = new dsteem.Client('https://api.steememory.com');

witnessUpdate = async () => {

    const privateKey=dsteem.PrivateKey.fromString("5KK2P4LJavbSJq7XKDymoYG5ER56aYqKMeEUjct4SEx9VJUWGKY");
    const account="usay";
    const url="https://steemit.com/@usay";
    //const signing_key="STM5W6uYk2nee1QKA6iV4aXBbtLYgQMFAuakVz9cjnCguwss1pe5L";
    const signing_key="STM1111111111111111111111111111111114T1Anm";
    const fee="3.000 STEEM";
    const props = {
        "account_creation_fee": "3.000 STEEM",
        "maximum_block_size" : 65536,
        "account_subsidy_budget" :  797,
        "sbd_interest_rate" : 0
    };

    const op = [
        'witness_update',
        {
            owner: account,
            url: url,
            block_signing_key: signing_key,
            props: props,
            fee: fee
        },
    ];

    client.broadcast.sendOperations([op], privateKey).then(
        function(result) {
            console.log(result);
        },
        function(error) {
            console.error(error);
        }
    );
}

witnessUpdate();
