let serial = document.querySelector('.box .serial');
let generate = document.querySelector('.box .generate');
let CurrentCount = 20;
let started = false;

// method 1
// set the numbersSelect
// let serialContent = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'L', 'M', 'R']

// let empty1 = []

// generate.onclick = function () {
//     //empty the serial field
//     serial.innerHTML = '';
//     //loop and create a div
//     if (!started) {
//         for (let i = 0; i < CurrentCount; i++) {
//             //get random serial
//             let serRandom = serialContent[Math.floor(Math.random() * serialContent.length)]
//             //push it to the empty
//             empty1.push(serRandom);
//             // join it
//             let result = empty1.join('')
//             // put it to the serial div
//             serial.innerHTML = result;
//         }
//     }
//     started = true;
// }
generate.onclick = function () {
    let serialContent = '1234567890-=][poiuytrewq`1asdfghjkl;\/.,mnbvcxz\?><" }{)(_+*&^%$#@!~|';
    let empty2 = '';
    for (i = 0; i < CurrentCount; i++) {
        let rd = serialContent[Math.floor(Math.random() * serialContent.length)]
        empty2 += rd;
        serial.innerHTML = empty2;
    }
}
