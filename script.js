function randomize (arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function secondRandom (arr) {
    return arr[Math.abs(Math.floor((Math.random() * arr.length) -1))];
}

function nameBuilder(start, mid, end){
    if(start[start.length-1] === ' ' || start === 'Tri' || start === 'So' || start === 'No'){
        firstLet = mid.substring(0,1).toUpperCase();
        headless = mid.substring(1);
        mid = firstLet.concat(headless);
    }
    return start.concat(mid).concat(end);
}

const neighbStart = ['Tri', 'So', 'Mid', 'Upper ', 'Lower ', 'Hell\'s ', 'Little ', 'Far ', 'Kips ', 'Greene ', 'Forte ', 'No', 'Morning', 'Old '];

const neighbMid = ['rose', 'clinton',  'throgs', 'borough', 'battery', 'Roosevelt', 'side', 'Williams'];

const neighbEnd = [' City', 'burg', ' Village', ' District', 'wick', ' Heights', ' Hills', ' Slope', ' Ridge', ' Point', 'wood', ' Park', 'view', 'dale', 'lawn', 'hurst', 'ington'];

const startPara = ['Historic', 'Newly revitalized', 'Iconic'];

const place = ['deep within the heart of', 'on the outskirts of'];

const description = ['bustling', 'quaint', 'picturesque'];

const secondDesc = ['shinning star', 'hidden gem', 'best kept secret', 'smallest wonder', 'choicest locale', 'greatest treasure'];

const buildings = ['beautiful brownstones', 'spacious lofts', 'trendy repurposed warehouse spaces', 'luxury condos', 'multi-family homes', 'lively co-ops',];

const distance = ['hop, skip, and a jump', 'brisk 5 minute walk', '3 minute jaunt', 'two minutes stroll', 'seven minute bike ride', '4 minute vespa trip'];

const transport = ['the Q train', 'the East River Ferry', 'a sky-tram the governor promises will be completed by 2036', 'the smoldering ashes of the L train', 'the G train (which has recently been converted into a hologram)', 'one of the largest MTA bus depots', 'the path train'];

const placeOne = ['work', 'school', 'various appointments', 'community service', 'the gym', 'spelling bees'];
      
const placeTwo = ['nightlife', 'nightclasses', 'concerts', 'Broadway shows', 'Off-Broadway shows', 'Off-Off-Broadway shows', 'community theater', 'pet-sitting for friends', 'sporting events'];

const attractions = ['cinematic skyline views', '8 different size differentiated dog parks', '3 competing arthouse cinemas', '12 different coffeeshops', ];

const secAttractions = ['an organic cold pressed juicery on every block', 'a waterfront cat cafe', 'weekly flea markets', '2 food halls', 'countless swank boutiques'];

const magazine = ['Gothamist', 'The Village Voice', 'WNYC', 'a guy on Yelp', 'Pat Kiernan', 'Jad Abumrad', 'Time Out NY', 'Fran Lebowitz', 'Anna Wintour'];

const backImgs = ["url('https://images.unsplash.com/photo-1521823343548-614cbfc0f742?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2a51377883cc6f6da3ba39658883e50e&auto=format&fit=crop&w=1534&q=80')",
"url('https://images.unsplash.com/photo-1521592238221-712c99319100?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=170b5c01e0e86d00a298238acd4c94da&auto=format&fit=crop&w=1350&q=80')",
"url('https://images.unsplash.com/photo-1523128662036-c964212cc9f0?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ca9959adba137fe6801d623d61e5242c&auto=format&fit=crop&w=1526&q=80')","url('https://images.unsplash.com/photo-1521591722639-18a2f391ac1e?ixlib=rb-0.3.5&s=a047e05fead6d935aa206df61aea8976&auto=format&fit=crop&w=1534&q=80')",
"url('https://images.unsplash.com/photo-1520011597487-ebdd1ea20ab0?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=777d146092084e34fc059e78068f2292&auto=format&fit=crop&w=1334&q=80')",
"url('https://images.unsplash.com/photo-1518563172008-e56c5dfbaef6?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e0d10acce892e31a6dbf53ac31578633&auto=format&fit=crop&w=1534&q=80')",
"url('https://images.unsplash.com/photo-1516563973696-145e6e4cd90c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7744e84ab9027f995a430b77b7c9b7f3&auto=format&fit=crop&w=1534&q=80')",
"url('https://images.unsplash.com/photo-1515112569565-1e4aef316db9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=af407e287fe66173e9fffb43104aec77&auto=format&fit=crop&w=1350&q=80')",
"url('https://images.unsplash.com/photo-1504747773730-3071efbbeb98?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=76e04e21909751eee23bed7b138e8aa9&auto=format&fit=crop&w=1330&q=80')",
"url('https://images.unsplash.com/photo-1463438081263-6852d273b5f2?ixlib=rb-0.3.5&s=c9a47313be7ca8979d397c61e6355240&auto=format&fit=crop&w=1350&q=80')",
"url('https://images.unsplash.com/photo-1498618382752-02689e335b14?ixlib=rb-0.3.5&s=78f8f835385592fd16713485dce50780&auto=format&fit=crop&w=1489&q=80')",
"url('https://images.unsplash.com/photo-1466209829429-b7fe10af72f3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a3b0d2c02d7bd995bffe2e6c8f30c44e&auto=format&fit=crop&w=1051&q=80')",
"url('https://images.unsplash.com/photo-1504662534099-135a2a5a0620?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2286860f6ec52dbc97b9fb7d58a3dced&auto=format&fit=crop&w=747&q=80')",
"url('https://images.unsplash.com/photo-1432674134753-a15e24aa45c8?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ead46197806134c81710330c60519629&auto=format&fit=crop&w=1267&q=80')",
"url('https://images.unsplash.com/photo-1512749971649-3c44057ed6ab?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2c0419b09fa0de0553ccc77d1800db73&auto=format&fit=crop&w=1050&q=80')",
"url('https://images.unsplash.com/photo-1521123150601-5efab04f5ad3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0f0c75a5bf47a30beea887bf83d9eeb6&auto=format&fit=crop&w=750&q=80')",
"url('https://images.unsplash.com/photo-1531449862596-16e4c62e2b10?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7261ec0c2507c69c76ec73a01162637b&auto=format&fit=crop&w=1050&q=80')",]


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
    secondPlace: randomize(placeTwo),
    mag: randomize(magazine),
    backImg: randomize(backImgs)
}

let neighbName = nameBuilder(neighborhood.first, neighborhood.mid, neighborhood.end);

let secondName = nameBuilder(secondRandom(neighbStart), (secondRandom(neighbMid)), (secondRandom(neighbEnd)));

let paraOne = `${neighborhood.paraStart} ${neighbName} is situated ${neighborhood.loc} ${secondName}. Filled with ${neighborhood.build} and ${neighborhood.secondBuild}, this ${neighborhood.descr} neighborhood was once refered to by ${neighborhood.mag} as New York City's ${neighborhood.secDesc}.` 

let paraTwo = `Located just a ${neighborhood.dist} away from ${neighborhood.transp}, traveling from home to ${neighborhood.firstPlace} to ${neighborhood.secondPlace} and back should be a breeze! Of course with ${neighborhood.attra} and ${neighborhood.secAttra} you may never want to leave!`


document.getElementById('neighborhoodName').innerHTML = neighbName;
document.getElementById('neighborhoodDescOne').innerHTML = paraOne;
document.getElementById('neighborhoodDescTwo').innerHTML = paraTwo;
document.body.style.backgroundImage = neighborhood.backImg;


