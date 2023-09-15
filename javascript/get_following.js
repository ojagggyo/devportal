const dsteem = require('dsteem')
const client = new dsteem.Client('https://api.steememory.com');

module.exports.getFollowing = async (username) => {   
    client.call('follow_api','get_following',[username,"","blog",10]).then(
        function(result) {
            console.log('follow_api','get_following')
            console.log(JSON.stringify(result))
        },
        function(error) {
            console.log(error)
        }
    )
}


//this.getFollowing("yasu.witness")