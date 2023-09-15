const dsteem = require('dsteem')
const client = new dsteem.Client('https://api.steememory.com');

module.exports.getFollowers = async (username) => {
    //NG client.call('follow_api','get_followers',{account:username,start:'',type:'blog',limit:10}).then(
    client.call('follow_api','get_followers',[username, "", "blog", 10]).then(
        function(result) {
            console.log('follow_api','get_followers')
            console.log(JSON.stringify(result))
        },
        function(error) {
            console.log(error)
        }
    )
}

//this.getFollowers("yasu.witness")
