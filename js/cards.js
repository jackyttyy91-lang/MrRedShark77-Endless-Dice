const CARDS = {
    d1: [
        "Side Increaser",
        x=>`Increase ${['your',"enemy's"][x]} maximum number of side by <b class='green'>1</b>`,
        x=>true,
        x=>{
            data[x].max_s += 1
        },
    ],
    d2: [
        "Side Increaser",
        x=>`Increase your maximum number of side multiply by <b class='green'>2</b>`,
        x=>x=="player",
        x=>{
            data[x].max_s *= 2
        },
    ],
    d3: [
        "Minimum Side Increaser",
        x=>`Increase your minimum number of side multiply by <b class='green'>2</b>`,
        x=>x=="player" && data[x].min_s<data[x].max_s,
        x=>{
            data[x].min_s *= 2
        },
    ],
    d4: [
        "Side Translation",
        x=>`Increase your minimum & maximum number of side by <b class='green'>5</b>`,
        x=>x=="player",
        x=>{
            data[x].min_s += 5
            data[x].max_s += 5
        },
    ],
    d5: [
        "Side Re-Increaser",
        x=>`Increase your multiply maximum number of side multiply by <b class='green'>2</b>`,
        x=>x=="player",
        x=>{
            data[x].max_s *= 2
        },
    ],
    d6: [
        "Side Expansion",
        x=>`Increase your multiply minimum & maximum number of side multiply by <b class='green'>2</b>`,
        x=>x=="player",
        x=>{
            data[x].min_s *= 2
            data[x].max_s *= 2
        },
    ],
    d7: [
        "Scrambler",
        x=>`Your spawned Dice has 25% chance to transform into <b class='green'>Dice Scrambler</b>`,
        x=>x=="player" && !data[x].cards.includes("d7"),
        x=>{},
    ],

    s1: [
        "Enemy Sacrifice for Player Multiplier",
        x=>`Sacrifice <b class='green'>80%</b> of enemy's starting health for your increasing the multiplier of multiply by <b class='green'>1.5</b>`,
        x=>x=="player",
        x=>{
            data.enemy.maxHealth = Math.floor(data.enemy.maxHealth*0.2)
            data.player.mult *= 1.5
        },
    ],
    s2: [
        "Enemy Sacrifice for Player Multiplier Expansion",
        x=>`Sacrifice <b class='green'>95%</b> of enemy's starting health for your increasing the multiplier of multiply by <b class='green'>2</b>`,
        x=>x=="player",
        x=>{
            data.enemy.maxHealth = Math.floor(data.enemy.maxHealth*0.05)
            data.player.mult *= 2
        },
    ],

    e1: [
        "Energy Increaser",
        x=>`Increase your maximum energy multiply by <b class='green'>2</b>`,
        x=>x=="player",
        x=>{
            data[x].maxEnergy *= 2
        },
    ],
    e2: [
        "Energy Increaser",
        x=>`Increase your maximum energy multiply by <b class='green'>3</b>`,
        x=>x=="player",
        x=>{
            data[x].maxEnergy *= 3
        },
    ],
    e3: [
        "Free Energy",
        x=>`Consuming your energy has <b class='green'>50%</b> chance to get <b class='green'>5</b> free energy`,
        x=>x=="player" && !data[x].cards.includes("e3"),
        x=>{},
    ],
    e4: [
        "Energy Increaser",
        x=>`Increase ${['your',"enemy's"][x]} maximum energy by <b class='green'>1</b>`,
        x=>true,
        x=>{
            data[x].maxEnergy += 1
        },
    ],
    
    en1: [
        "Enemy's Oktoberfest",
        x=>`Increase enemy's starting health by <b class='green'>50%</b>`,
        x=>x=="enemy",
        x=>{
            data.enemy.maxHealth = Math.floor(data.enemy.maxHealth*1.5)
        },
    ],
    en2: [
        "Stronger Multiplier Increaser",
        x=>`Increase your multiplier multiply by <b class='green'>2</b>`,
        x=>x=="player",
        x=>{
            data[x].mult *= 2
        },
    ],
    en3: [
        "Mega Multiplier Increaser",
        x=>`Increase your multiplier multiply by <b class='green'>4</b>`,
        x=>x=="player",
        x=>{
            data[x].mult *= 4
        },
    ],
    en4: [
        "Catastrophic",
        x=>`Increase your multiplier multiply by <b class='green'>8</b>`,
        x=>x=="player",
        x=>{
            data[x].mult *= 8
        },
    ],
    en5: [
        "Giant Enemy",
        x=>`Increase enemy's starting health by <b class='green'>100%</b>`,
        x=>x=="enemy",
        x=>{
            data.enemy.maxHealth = Math.floor(data.enemy.maxHealth*2)
        },
    ],

    m1: [
        "Multiplier Increaser",
        x=>`Increase ${['your',"enemy's"][x]} multiplier by <b class='green'>0.25</b>`,
        x=>true,
        x=>{
            data[x].mult += 0.25
        },
    ],
    m2: [
        "Multiplier Expansion",
        x=>`Increase your multiplier multiply by <b class='green'>1.75</b>`,
        x=>x=="player",
        x=>{
            data[x].mult *= 1.75
        },
    ],

    o1: [
        "Cleaner",
        x=>`Clear all of your dices`,
        x=>x=="player",
        x=>{
            data.p_grid = {}
        },
    ],
    o2: [
        "Normality",
        x=>`Normal dice can attack <b class='green'>100%</b> of your product to an enemy`,
        x=>x=="player" && !data[x].cards.includes("o2"),
        x=>{},
    ],

    o3: [
        "Multi, Max Energy, Side Translation and Divide Enemy Starting Health",
        x=>`Multiply your multi, max energy and minimum & maximum number of side by 4, Divide enemy's multi, max energy, starting health and minimum & maximum number of side by 4`,
        x=>x=="player",
        x=>{
            data.player.min_s *= 4
            data.player.max_s *= 4
            data.player.mult *= 4
            data.player.maxEnergy *= 4

            data.enemy.mult /= 4
            data.enemy.maxEnergy /= 4
            data.enemy.min_s /= 4
            data.enemy.max_s /= 4
            data.enemy.maxHealth = Math.floor(data.enemy.maxHealth/4)
        },
    ],
    curse1: [
        "Cursed Heart",
        x=>`If you pass a round, will increase your health by <b class='green'>10%</b>, but increase enemy's multiplier by <b class='red'>5%</b> for passing it`,
        x=>x=="player" && !data[x].cards.includes("curse2") && Math.random()<1/5,
        x=>{},
    ],

    c1: [
        "Critical Chance",
        x=>`Increase your critical chance by <b class='green'>10%</b>`,
        x=>x=="player",
        x=>{
            data[x].crit += 0.1
        },
    ],
}
