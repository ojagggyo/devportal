const dsteem = require('dsteem');
const client = new dsteem.Client('https://api.steememory.com');

// 通常の投稿（50% SBD / 50% SP）
module.exports.createPost = async (username, key, category, title, body, imageurl) => {
 
    const categoryList = `${category}`.split(' ');
    const imageurlList = `${imageurl}`.split(' ');
    const parent_permlink = taglist[0];
    const json_metadata = JSON.stringify(
        { 
            tags: categoryList,
            image: imageurlList
        }
    );

    const permlink = Math.random().toString(36).substring(2)

    const post = {
        author: username,
        body: body,
        json_metadata: json_metadata,
        parent_author: '',
        parent_permlink: parent_permlink,
        permlink: permlink,
        title: title,
    };

    client.broadcast
        .comment(post, key)
        .then(
            function(result) {
                console.log(result);
            },
            function(error) {
                console.error(error);
            }
        );
};

// 報酬を100%パワーアップで受け取る
module.exports.createPostPowerup100 = async (username, key, category, title, body, imageurl) => {
 
    const categoryList = `${category}`.split(' ');
    const imageurlList = `${imageurl}`.split(' ');
    const parent_permlink = taglist[0];
    const json_metadata = JSON.stringify(
        { 
            tags: categoryList,
            image: imageurlList
        }
    );


    const permlink = Math.random().toString(36).substring(2)

    const post = {
        author: username,
        body: body,
        json_metadata: json_metadata,
        parent_author: '',
        parent_permlink: parent_permlink,
        permlink: permlink,
        title: title,
    };

    // オプション（報酬を100%パワーアップで受け取る）
    const option = {
        author: username,
        permlink: permlink,
        max_accepted_payout: "1000000.000 SBD",
        percent_steem_dollars: 0,
        allow_votes: true,
        allow_curation_rewards: true,
        extensions: []
    };

    client.broadcast
        //.comment(post, key)
        .commentWithOptions(post, option, key)
        .then(
            function(result) {
                console.log(result);
            },
            function(error) {
                console.error(error);
            }
        );
};

// 報酬を受け取らない
module.exports.createPostDeclinePayout = async (username, key, category, title, body, imageurl) => {

    const categoryList = `${category}`.split(' ');
    const imageurlList = `${imageurl}`.split(' ');
    const parent_permlink = taglist[0];
    const json_metadata = JSON.stringify(
        { 
            tags: categoryList,
            image: imageurlList
        }
    );

    const permlink = Math.random().toString(36).substring(2)

    const post = {
        author: username,
        body: body,
        json_metadata: json_metadata,
        parent_author: '',
        parent_permlink: parent_permlink,
        permlink: permlink,
        title: title,
    };

    // オプション（報酬を受け取らない）
    const option = {
        author: username,
        permlink: permlink,
        max_accepted_payout: "0.000 SBD",
        percent_steem_dollars: 10000,
        allow_votes: true,
        allow_curation_rewards: true,
        extensions: []
    };

    client.broadcast
        .commentWithOptions(post, option, key)
        .then(
            function(result) {
                console.log(result);
            },
            function(error) {
                console.error(error);
            }
        );
};



 // 呼び出し方法
// this.createPost(    "yasu.pal", 
//                     dsteem.PrivateKey.fromString("<Posting_Key>"), 
//                     "category1 category2", 
//                     "title", 
//                     "body", 
//                     "url1 url2")
