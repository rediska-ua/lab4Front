'use strict';

const divRed = document.getElementById('red');
const divBlue = document.getElementById('blue');

const red = {
    width: '400px',
    height: '300px',
    color: 'red',
    counter: 0,
}

const blue = {
    width: '300px',
    height: '150px',
    color: 'blue',
    counter: 1,
}

const adjustStyles = (obj, elem) => {
    elem.style.width = obj.width;
    elem.style.height = obj.height;
    elem.style.backgroundColor = obj.color;
    const span = elem.getElementsByTagName('span')[0];
    span.innerHTML = obj.counter;
}

adjustStyles(red, divRed);
adjustStyles(blue, divBlue);

const onClick = (e) => {
    e.target.getElementsByTagName('span')[0].innerHTML++;
}

divRed.addEventListener('click', onClick);
divBlue.addEventListener('click', onClick);



const data = [{
    id: 1,
    label: 'Go to place 1',
}, {
    id: 2,
    label: 'Go to place 2',
}, {
    id: 3,
    label: 'Go to place 3',
}, {
    id: 4,
    label: 'Go to place 4',
}, {
    id: 5,
    label: 'Go to place 5',
}];

const view = (data) => {
    return `
    ${data.map(obj => `
        <div>
            <span>${obj.id}</span>
            <span>${obj.label}</span>
        </div>
    `).join('')}`;
};

const render = (data) => {
    const renderDiv = document.getElementsByClassName('render-obj')[0];
    renderDiv.innerHTML = view(data);
}

render(data);

//function declaration

function sum(a, b) {
    return a + b;
}

//function expression

const square = function(length, width) {
    return length * width;
}

// Дефолтные значения параметров

const concatStrings = (firstPart, secondPart = ' Hello World!') => {
    return firstPart + secondPart;
}

console.log(concatStrings('Hi,', ' Mark'));
console.log(concatStrings('Our'));




((x, y) => {
    console.log(x + y)
})(3, 2);


const calculateSumAndSquare = (numFirst, calcSquare) => {
    return numFirst + calcSquare(numFirst);
}

const result = calculateSumAndSquare(4, (a) => a*a);

console.log(result);


const squareSecond = square;

console.log(squareSecond(3, 5));


const closure = () => {
    const name = 'Max';
    const innerFunc = () => {
        console.log(name);
    }
    return innerFunc;
}

const closureTest = closure();
closureTest();


const multipleClosure = (number) => {
    const a = number;
    return (b) => a*b;
}

const fnTest1 = multipleClosure(3);
console.log('Test multipleClosure: ', fnTest1(2));
console.log('Test multipleClosure: ', fnTest1(3));



const calculator = (() => {

    const data = {
        number: 0,
    };

    return {
        sum: (n) => {
            data.number += n;
        },
        substract: (n) => {
            data.number -= n;
        },
        multiple: (n) => {
            data.number *= n;
        },
        divide: (n) => {
            data.number /= n;
        },
        display: () => {
            console.log(data.number);
        }
    };

})();

calculator.sum(5);
calculator.sum(7);
calculator.divide(2);
calculator.multiple(3);
calculator.display();


divRed.addEventListener('click', (() => {
    const color = 'green';
    const changeColor = () => {
        divRed.style.backgroundColor = color;
    }
    return changeColor;
})());


