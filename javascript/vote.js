const dsteem = require('dsteem');
const client = new dsteem.Client('https://api.steememory.com');

var votedTimeObject = new Object();//グローバル変数

submitVote = async (account_name, privateKey , author, permlink, voting_weight) => {

    weight = Number.parseInt(voting_weight) * 100
    const vote = {
        voter: account_name,
        author,
        permlink,
        weight, //needs to be an integer for the vote function
    };
    
    //
    const result = await client.broadcast.vote(vote, privateKey)
    return result;
};
