const fs = require('fs')
const xxx = require('./call.js')

async function main(){
    var result = await xxx.callAsync("condenser_api","get_witnesses_by_vote", ["",107])

    for (let index = 0; index < result.length; index++) {
        let witness = result[index]
        if (witness.owner != "yasu.witness"){
            continue
        }
        console.log(witness)
        //const out = {ranking:index+1,account:witness.owner,vote:Math.round(witness.votes/1000000000000)}
        

        let md = `<div><h4>証人情報</h4></div>\n\n|RANKING|${index+1}|\n|-----|-----|\n|Votes|${Math.round(witness.votes/1000000000000)}}MV|\n|Produced|352|\n|Missed|${witness.total_missed}|\n`
        
        //連係用
        //fs.writeFile('./link/steemprice.md', `![](${imageurl})`, function(err) {console.error(err)})
        //console.log(md)
        return
    }    
}

main()