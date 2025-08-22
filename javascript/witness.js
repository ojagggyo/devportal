const fs = require('fs')
const xxx = require('./call.js')

getWitnessStats = async () => {
    return new Promise((resolve, reject) => {
        (async() => {
            var request = require('request');
            var options = {
              'method': 'GET',
              'url': 'https://sds.steemworld.org/witnesses_api/getWitnessStats/yasu.witness',
              'headers': {
              }
            };
            request(options, function (error, response) {
              if (error) reject(error);
              console.log(response.body);
              resolve(JSON.parse(response.body).result)
            });
            //resolve(  {"code":0,"result":{"rank":104,"produced_blocks":474,"missed_blocks":1,"last_confirmed_block":80999195}}.result)
        })();
    });
};

async function main_1(){

    const witnessStats= await getWitnessStats()
     console.log(witnessStats.rank,witnessStats.produced_blocks,witnessStats.missed_blocks)

    const result = await xxx.callAsync("condenser_api","get_witnesses_by_vote", ["",107])
    for (let index = 0; index < result.length; index++) {
        let witness = result[index]
        if (witness.owner != "yasu.witness"){
            continue
        }
        //console.log(witness)
        let md = `<div><h4>証人情報</h4></div>\n\n|RANK|${index+1}|\n` +
                `|-----|-----|\n` +
                `|Votes|${Math.round(witness.votes/1000000000000)}MV|\n` +
                `|Produced|${witnessStats.produced_blocks}|\n` +
                `|Missed|${witness.total_missed}|\n` +
                `|Latest Block|${witnessStats.last_confirmed_block}|\n`
        
        //連係用
        //fs.writeFile('./link/steemprice.md', `![](${imageurl})`, function(err) {console.error(err)})
        console.log(md)
        return
    }    
}


async function main_2(){

    const witnessStats= await getWitnessStats()
     console.log(witnessStats.rank,witnessStats.produced_blocks,witnessStats.missed_blocks)

    const result = await xxx.callAsync("condenser_api","get_witnesses_by_vote", ["",61])
    for (let index = 0; index < result.length; index++) {
        let witness = result[index]
        // if(witness.signing_key == 'STM1111111111111111111111111111111114T1Anm'){
        //     continue
        // }
        //console.log(witness)
        
        let md = `${witness.owner},${Math.round(witness.votes/1000000000000)}`;
        console.log(md)
    }    
}


main_2()