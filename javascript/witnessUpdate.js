'use strict';

const steem = require('steem')

const rpc_node = 'http://172.100.1.100:8080';
//const rpc_node = 'https://api.steememory.com';
steem.api.setOptions({ transport: 'https', uri: rpc_node, url: rpc_node });

//signing_keys
//STM5W6uYk2nee1QKA6iV4aXBbtLYgQMFAuakVz9cjnCguwss1pe5L
//STM1111111111111111111111111111111114T1Anm

async function switchTo(signing_key) {

const key="5KK2P4LJavbSJq7XKDymoYG5ER56aYqKMeEUjct4SEx9VJUWGKY";
const account="usay";
const url="https://steemit.com/@usay";
//let signing_key="STM1111111111111111111111111111111114T1Anm";
const fee="3.000 STEEM";

    //log("Switching to " + signing_key);
    const props = {
"account_creation_fee": "3.000 STEEM",
"maximum_block_size" : 65536,
"account_subsidy_budget" :  797,
"sbd_interest_rate" : 0

};
    steem.broadcast.witnessUpdate(key, account, url, signing_key, props, fee, function (err, result) {
        console.log(err, result);
    });
}

switchTo("STM1111111111111111111111111111111114T1Anm")
