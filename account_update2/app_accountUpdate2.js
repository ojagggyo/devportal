const dsteem = require('dsteem')
const client = new dsteem.Client('https://api.steememory.com');

module.exports.updateCoverImage = async (username, privateKey, location, cover_image) => {
    
    let account = await client.database.call('get_accounts', [[username]]);
    account = account[0]; 

    let posting_json_metadata = JSON.parse(account.posting_json_metadata);
    posting_json_metadata.profile.cover_image = cover_image;
    posting_json_metadata.profile.location = location;
    JSON.stringify(posting_json_metadata);

    const op = [
        'account_update2',
        {
            account: username,
            extensions: [],
            json_metadata: account.json_metadata,
            posting_json_metadata : JSON.stringify(posting_json_metadata)
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
 };
 
