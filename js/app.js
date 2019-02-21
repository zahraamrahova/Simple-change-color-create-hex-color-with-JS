// first button to  change background color
const colors = ['yellow', 'green', 'red', 'blue', '#15025', 'rgba(125, 125, 125, 0.5)'];

const btn = document.getElementById('btn');

// add event listener 

btn.addEventListener('click', function(){
    let random = Math.floor(Math.random()*colors.length);
    const body = document.body;
    document.getElementById('first-box').style.backgroundColor = colors[random];
    console.log(random);
});

// second button creat hex color 
(function(){
const hexValue = document.getElementById('hex-value');
const bton = document.getElementById ('bton');

bton.addEventListener('click', createHex);


function createHex () {
    const hexValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
    let hexColor = '#';

    for (let i=0; i<6; i++) {
        let random = Math.floor(Math.random()*hexValues.length);
        // console.log(random);
        hexColor += hexValues[random];
        // console.log(hexColor);
    }
    document.getElementById('second-box').style.backgroundColor = hexColor;
    hexValue.textContent = hexColor;
}

})();