function randomize (arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function secondRandom (arr) {
    return arr[Math.abs(Math.floor((Math.random() * arr.length) -1))];
}

const neighbStart = ['Tri', 'So', 'Mid', 'Upper ', 'Lower ', 'Hell\'s ', 'Little ', 'Far ', 'Kips', 'Greene ', 'Forte ', 'No', 'Morning', 'Old '];

const neighbMid = ['rose', 'Clinton',  'Throgs', 'borough', 'Battery', 'Roosevelt', 'side', 'Bush', 'Williams'];

const neighbEnd = [' City', 'burg', ' Village', ' District', 'wick', ' Heights', ' Hills', ' Slope', ' Ridge', ' Point', 'wood', ' Park', 'view', 'dale', 'lawn', 'hurst', 'ington'];

const startPara = ['Historic', 'Newly revitalized', 'Iconic'];

const place = ['deep within the heart of', 'on the outskirts of'];

const description = ['bustling', 'quaint', 'picturesque'];

const secondDesc = ['shinning star', 'hidden gem', 'best kept secret', 'smallest wonder', 'choicest locale'];

const buildings = ['beautiful brownstones', 'spacious lofts', 'trendy repurposed warehouse spaces', 'luxury condos', 'multi-family homes', 'lively co-ops',];

const distance = ['hop, skip, and a jump', 'brisk 5 minute walk', '3 minute jaunt', 'two minutes stroll', 'seven minute bike ride', '4 minute vespa trip'];

const transport = ['the Q train', 'the East River Ferry', 'a sky-tram the governor promises will be completed by 2036', 'the smoldering ashes of the L train', 'the G train (which has recently been converted into a hologram)', 'one of the largest MTA bus depots', 'the path train'];

const placeOne = ['work', 'school', 'various appointments', 'community service', 'the gym', 'spelling bees'];
      
const placeTwo = ['nightlife', 'nightclasses', 'concerts', 'Broadway shows', 'Off-Broadway shows', 'Off-Off-Broadway shows', 'community theater', 'pet-sitting for friends', 'sporting events'];

const attractions = ['cinematic skyline views', '8 different size differentiated dog parks', '3 competing arthouse cinemas', '12 differenct coffeeshops, each with a cold brew so strong, you\'ll swear it\'s laced with something illegal', ];

const secAttractions = ['an organic cold pressed juicery on every block', 'a waterfront cat cafe', 'weekly flea markets', '2 food halls', 'countless swank boutiques'];

let neighborhood = {
    first: randomize(neighbStart),
    mid: randomize(neighbMid),
    end: randomize(neighbEnd),
    paraStart: randomize(startPara),
    loc: randomize(place),
    descr: randomize(description),
    secDesc: randomize(secondDesc),
    build: randomize(buildings),
    secondBuild: secondRandom(buildings),
    dist: randomize(distance),
    transp: randomize(transport),
    attra: randomize(attractions),
    secAttra: randomize(secAttractions),
    firstPlace: randomize(placeOne),
    secondPlace: randomize(placeTwo)
}

let neighbName = neighborhood.first.concat(neighborhood.mid).concat(neighborhood.end);

let secondName = neighbStart[Math.abs(Math.floor((Math.random() * neighbMid.length) -1))].concat(neighbMid[Math.abs(Math.floor((Math.random() * neighbMid.length) -1))]).concat(neighbEnd[Math.abs(Math.floor((Math.random() * neighbEnd.length) -1))]);


let para = `${neighborhood.paraStart} ${neighbName} is located ${neighborhood.loc} ${secondName}. Filled with ${neighborhood.build} and ${neighborhood.secondBuild}, this ${neighborhood.descr} neighborhood is sometimes refered to as New York City's ${neighborhood.secDesc}. Located just a ${neighborhood.dist} away from ${neighborhood.transp}, traveling from home to ${neighborhood.firstPlace} to ${neighborhood.secondPlace} and back should be a breeze! Of course with ${neighborhood.attra} and ${neighborhood.secAttra} you may never want to leave!`

console.log(para);