const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },

    printGoals: function (...numOfPlayr) {
        console.log(numOfPlayr);
    }
};


//Creating player array
const player1 = ['Neuer',
    'Pavard',
    'Martinez',
    'Alaba',
    'Davies',
    'Kimmich',
    'Goretzka',
    'Coman',
    'Muller',
    'Gnarby',
    'Lewandowski',
];

const player2 = ['Burki',
    'Schulz',
    'Hummels',
    'Akanji',
    'Hakimi',
    'Weigl',
    'Witsel',
    'Hazard',
    'Brandt',
    'Sancho',
    'Gotze',
];

const [gk, , ...fieldPlayers] = [player1[0], ...player1];
console.log(gk, fieldPlayers);

const [gk1, , ...fieldPlayers1] = [player2[0], ...player2];
console.log(gk1, fieldPlayers1);

const allPlayers = [player3, player4] = [player1, player2];
console.log(allPlayers);

const [...player1Final] = [player3, 'Thiago', 'countinho', 'perisic'];
console.log(player1Final);

game.printGoals(game.scored);

const odd1 = game.odds.team1;
const odd2 = game.odds.team2;
console.log(odd1, odd2);

console.log("More likely to win", odd1 || odd2);

console.log('*******************Sloution****************************')
//Destructuring players into player1 and player2
//1.
const [players1, players2] = game.players;
console.log(players1, players2);

//2.
const [gks, ...fieldsPlayers] = player1;
console.log(gks, fieldsPlayers)

//3.
const allPlayer = [...players1, ...players2];
console.log(allPlayer)

//4.
const player1Finals = [...players1, 'Thiago', 'Coutinho', 'Periscic'];
console.log(player1Finals);

//5
const { odds: { team1, team2, x: draw },
} = game;
console.log(team1, draw, team2);

//6.
const printGoals1 = function (...players) {
    console.log(players);
    console.log(`${players.length} goals were scored`);
}

printGoals1(...game.scored);

//7
team1 < team2 && console.log(`Team 1 more likely to win.`);

