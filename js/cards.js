const CARDS = {
    d1: [
        "Side Increaser",
        x=>`Multiply your maximum number of side by <b class='green'>2</b>, Divide enemy's maximum number of side by <b class='green'>2</b>`,
        x=>x=="player",
        x=>{
            data.player.max_s *= randomInt(2,4)
            data.enemy.max_s /= randomInt(2,4)
        },
    ],
    d2: [
        "Side Re-Increaser",
        x=>`Multiply your maximum number of side by <b class='green'>3</b>, Divide enemy's maximum number of side by <b class='green'>3</b>`,
        x=>x=="player",
        x=>{
            data.player.max_s *= randomInt(3,16)
            data.enemy.max_s /= randomInt(3,16)
        },
    ],
    d3: [
        "Side Expansion",
        x=>`Multiply your minimum & maximum number of side multiply by <b class='green'>2</b>, Divide enemy's minimum & maximum number of side by <b class='green'>2</b>`,
        x=>x=="player",
        x=>{
            data.player.min_s *= randomInt(3,16)
            data.player.max_s *= randomInt(3,16)
            data.enemy.min_s /= randomInt(2,4)
            data.enemy.max_s /= randomInt(2,4)
        },
    ],
    d4: [
        "Scrambler",
        x=>`Your spawned Dice has 25% chance to transform into <b class='green'>Dice Scrambler</b>`,
        x=>x=="player" && !data[x].cards.includes("d7"),
        x=>{},
    ],

    s1: [
        "Enemy Sacrifice for Player Multiplier",
        x=>`Sacrifice <b class='green'>80%</b> of enemy's starting health for your increasing the multiplier of multiply by <b class='green'>2 to 4</b>`,
        x=>x=="player",
        x=>{
            data.enemy.maxHealth = Math.floor(data.enemy.maxHealth*0.2)
            data.player.mult *= randomInt(2,4)
        },
    ],
    s2: [
        "Enemy Sacrifice for Player Multiplier Expansion",
        x=>`Sacrifice <b class='green'>95%</b> of enemy's starting health for your increasing the multiplier of multiply by <b class='green'>3 to 16</b>`,
        x=>x=="player",
        x=>{
            data.enemy.maxHealth = Math.floor(data.enemy.maxHealth*0.05)
            data.player.mult *= randomInt(3,16)
        },
    ],

    e1: [
        "Energy Increaser",
        x=>`Increase your maximum energy multiply by <b class='green'>2</b>`,
        x=>x=="player",
        x=>{
            data[x].maxEnergy *= randomInt(2,4)
        },
    ],
    e2: [
        "Energy Increaser",
        x=>`Increase your maximum energy multiply by <b class='green'>3</b>`,
        x=>x=="player",
        x=>{
            data[x].maxEnergy *= randomInt(3,16)
        },
    ],
    e3: [
        "Free Energy",
        x=>`Consuming your energy has <b class='green'>99%</b> chance to get <b class='green'>100</b> free energy`,
        x=>x=="player" && !data[x].cards.includes("e3"),
        x=>{},
    ],

    en1: [
        "Stronger Multiplier Increaser",
        x=>`Increase your multiplier multiply by <b class='green'>2 to 4</b>`,
        x=>x=="player",
        x=>{
            data[x].mult *= randomInt(2,4)
        },
    ],
    en2: [
        "Mega Multiplier Increaser (Catastrophic)",
        x=>`Increase your multiplier multiply by <b class='green'>3 to 16</b>`,
        x=>x=="player",
        x=>{
            data[x].mult *= randomInt(3,16)
        },
    ],

    m1: [   
        "Multiplier Increaser",
        x=>`Increase your multiplier by <b class='green'>0.25</b>, Decrease enemy's multiplier by <b class='green'>0.25</b>`,
        x=>x=="player",
        x=>{
            data.player.mult += 0.25
            data.enemy.mult -= 0.25
        },
    ],
    m2: [
        "Multiplier Expansion",
        x=>`Multiply your multiplier by <b class='green'>2</b>, Divde enemy's multiplier by <b class='green'>2</b>`,
        x=>x=="player",
        x=>{
            data.player.mult *= 2
            data.enemy.mult /= 2
        },
    ],
    o1: [
        "Normality",
        x=>`Normal dice can attack <b class='green'>100%</b> of your product to an enemy`,
        x=>x=="player" && !data.player.cards.includes("o1"),
        x=>{},
    ],

    o2: [
        "Multi, Max Energy, Side Translation and Divide Enemy Starting Health",
        x=>`Multiply your multi, max energy and minimum & maximum number of side by 10 to 100, Divide enemy's multi, starting health and minimum & maximum number of side by 10 to 100`,
        x=>x=="player",
        x=>{
            data.player.min_s *= randomInt(10,100)
            data.player.max_s *= randomInt(10,100)
            data.player.mult *= randomInt(10,100)
            data.player.maxEnergy *= randomInt(10,100)

            data.enemy.mult /= randomInt(10,100)
            data.enemy.min_s /= randomInt(10,100)
            data.enemy.max_s /= randomInt(10,100)
            data.enemy.maxHealth = Math.floor(data.enemy.maxHealth*(randomInt(0.1,0.01)))
        },
    ],

    c1: [
        "Critical Chance",
        x=>`Increase your critical chance by <b class='green'>50%</b>`,
        x=>x=="player" && !data.player.cards.includes("c1"),
        x=>{
            data[x].crit += 0.5
        },
    ],
    
    enm1: [
        "Enemy Multipler",
        x=>`Increase enemy's multiplier by <b class='green'>0.01</b>`,
        x=>x=="enemy",
        x=>{
            data.enemy.mult += 0.01
        },
    ],
}
