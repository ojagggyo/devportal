const xxx = require('./call.js')

async function main(){
    var result = await xxx.callAsync("condenser_api","get_witnesses_by_vote", ["",107])

    for (let index = 0; index < result.length; index++) {
        let witness = result[index]
        if (witness.owner != "yasu.witness"){
            continue
        }
        //console.log(index+1,witness.owner,witness.votes,Math.round(witness.votes/1000000000000)+"MV")
        const out = {ranking:index+1,account:witness.owner,vote:Math.round(witness.votes/1000000000000)}
        console.log(out)
        return out
    }    
}

main()