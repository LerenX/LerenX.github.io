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

nicolasButton.addEventListener('click', function onClick(event) {
    const backgroundColor = nicolasButton.style.backgroundColor;

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

    if (backgroundColor === 'red') {
        oscarButton.style.backgroundColor = 'green';
        oscar = 'Oscar';
    } else {
        oscarButton.style.backgroundColor = 'red';
        oscar = false;
    }
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

    randomPerson = inRot[Math.floor(Math.random() * inRot.length)];
    if (typeof randomPerson == 'undefined') {
        randomPerson = '';
    }

    if (Math.random() * 100 < passInput) {
        hitNum = 'Pass'
        document.getElementById('output').innerHTML = (randomPerson + ' ' + String(hitNum));
    } else {
        hitNum = Math.floor(Math.random() * (maxInput - minInput + 1)) + minInput;
        if (Math.random() * 100 < multiInput) {
            multiplier = Math.round((Math.random() + 1) * 10) / 10;
            hitNum = Math.ceil(hitNum * multiplier);
            document.getElementById('output').innerHTML = (randomPerson + ' ' + String(hitNum) + ' ' + String(multiplier) + 'X Multiplier');
        } else {
            document.getElementById('output').innerHTML = (randomPerson + ' ' + String(hitNum));
        }
    }

    console.log(minInput, maxInput, passInput, multiplier, hitNum);
});
