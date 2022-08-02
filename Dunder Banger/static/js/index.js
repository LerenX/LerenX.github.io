const nicolasButton = document.getElementById('nicolasButton');
const ericButton = document.getElementById('ericButton');
const andreasButton = document.getElementById('andreasButton');
const gustavButton = document.getElementById('gustavButton');
const oscarButton = document.getElementById('oscarButton');

const personButton = document.getElementById('personButton');
const rotButton = document.getElementById('rotButton');

nicolas = false;
eric = false;
andreas = false;
gustav = false;
oscar = false;

k = 0;
rand = false;
doubleHit = false;

coins = {
    "nicolas": 0,
    "eric": 0,
    "andreas": 0,
    "gustav": 0,
    "oscar": 0
};

nicolasButton.addEventListener('click', function onClick(event) {
    const backgroundColor = nicolasButton.style.backgroundColor;
    k = 0;

    if (backgroundColor === 'red') {
        nicolasButton.style.backgroundColor = 'green';
        nicolas = 'Nicolas';
    } else {
        nicolasButton.style.backgroundColor = 'red';
        nicolas = false;
    }
});

ericButton.addEventListener('click', function onClick(event) {
    const backgroundColor = ericButton.style.backgroundColor;
    k = 0;

    if (backgroundColor === 'red') {
        ericButton.style.backgroundColor = 'green';
        eric = 'Eric';
    } else {
        ericButton.style.backgroundColor = 'red';
        eric = false;
    }
});

andreasButton.addEventListener('click', function onClick(event) {
    const backgroundColor = andreasButton.style.backgroundColor;
    k = 0;

    if (backgroundColor === 'red') {
        andreasButton.style.backgroundColor = 'green';
        andreas = 'Andreas';
    } else {
        andreasButton.style.backgroundColor = 'red';
        andreas = false;
    }
});

gustavButton.addEventListener('click', function onClick(event) {
    const backgroundColor = gustavButton.style.backgroundColor;
    k = 0;

    if (backgroundColor === 'red') {
        gustavButton.style.backgroundColor = 'green';
        gustav = 'Gustav';
    } else {
        gustavButton.style.backgroundColor = 'red';
        gustav = false;
    }
});

oscarButton.addEventListener('click', function onClick(event) {
    const backgroundColor = oscarButton.style.backgroundColor;
    k = 0;

    if (backgroundColor === 'red') {
        oscarButton.style.backgroundColor = 'green';
        oscar = 'Oscar';
    } else {
        oscarButton.style.backgroundColor = 'red';
        oscar = false;
    }
});

randomButton.addEventListener('click', function onClick(event) {
    const backgroundColor = randomButton.style.backgroundColor;
    k = 0;

    if (backgroundColor === 'red') {
        randomButton.style.backgroundColor = 'green';
        rand = true;
    } else {
        randomButton.style.backgroundColor = 'red';
        rand = false;
    }
});

function store(e) {
    sessionStorage.setItem('local', JSON.stringify(e));
}

if (sessionStorage.getItem('local') !== null) {
    coins = JSON.parse(sessionStorage.getItem('local'));
    // console.log(coins);
}

function refreshCoins() {
    document.getElementById('nicolasCoins').innerHTML = (coins["nicolas"]);
    document.getElementById('ericCoins').innerHTML = (coins["eric"]);
    document.getElementById('andreasCoins').innerHTML = (coins["andreas"]);
    document.getElementById('gustavCoins').innerHTML = (coins["gustav"]);
    document.getElementById('oscarCoins').innerHTML = (coins["oscar"]);
}

refreshCoins();

clearButton.addEventListener("click", function onClick(event) {
    sessionStorage.clear();
});

buyButton.addEventListener('click', function onClick(event) {
    buyPerson = String(document.getElementById('buyPerson').value);
    if (typeof coins[buyPerson.toLowerCase()] != 'undefined') {
        coins[buyPerson.toLowerCase()] -= 45;
        doubleHit = true;
    }
    refreshCoins();
});

challengeButton.addEventListener('click', function onClick(event) {
    challengePerson = String(document.getElementById('buyPerson').value);
    if (typeof coins[challengePerson.toLowerCase()] != 'undefined') {
        coins[challengePerson.toLowerCase()] -= 100;
    }
    refreshCoins();
});

personButton.addEventListener('click', function onClick(event) {
    multiplier = 1;

    minInput = Number(document.getElementById('minInput').value);
    maxInput = Number(document.getElementById('maxInput').value);
    passInput = Number(document.getElementById('passInput').value);
    multiInput = Number(document.getElementById('multiInput').value);

    inRot = [];
    gang = [nicolas, eric, andreas, gustav, oscar];

    for (let i = 0; i < gang.length; i++) {
        if (gang[i] !== false) {
            inRot.push(gang[i]);
        }
    }

    if (rand == true) {
        randomPerson = inRot[Math.floor(Math.random() * inRot.length)];
    } else {
        // console.log(inRot[k], k, inRot);
        randomPerson = inRot[k];
        k = (k+1)%(inRot.length);
    }

    if (typeof randomPerson == 'undefined') {
        randomPerson = '';
    }

    if (Math.random() * 100 < passInput) {
        hitNum = 'Pass'
        document.getElementById('output').innerHTML = (randomPerson + ' ' + String(hitNum));
    } else {
        hitNum = Math.floor(Math.random() * (maxInput - minInput + 1)) + minInput;
        if (doubleHit == true) {
            hitNum *= 2; 
            randomPerson = "DOUBLE " + randomPerson;
            doubleHit = false;
        }
        if (Math.random() * 100 < multiInput) {
            multiplier = Math.round((Math.random() + 1) * 10) / 10;
            hitNum = Math.ceil(hitNum * multiplier);
            document.getElementById('output').innerHTML = (randomPerson + ' ' + String(hitNum) + ' ' + String(multiplier) + 'X Multiplier');
        } else {
            document.getElementById('output').innerHTML = (randomPerson + ' ' + String(hitNum));
        }
    }

    if (hitNum != "Pass") {
        coins[String(randomPerson).toLowerCase()] += hitNum;
        store(coins);
    }

    // console.log(minInput, maxInput, passInput, multiplier, hitNum);
    refreshCoins();
});
