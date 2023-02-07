const { network } = require("hardhat")

function sleep(timeInMs) {
    return new Promise((resolve) => setTimeout(resolve, timeInMs))
}

async function moveBlocks(amount, sleppAmount = 0) {
    console.log("Moving Blocks.....")
    for (let index = 0; index < amount; index++) {
        await network.provider.request({
            method: "evm_mine",
            params: [],
        })

        if (sleppAmount) {
            console.log(`Sleeping for ${amount} sec`)
            await sleep(sleppAmount)
        }
    }
}

module.exports = {
    moveBlocks,
    sleep,
}
