const { maskText } = require('./index');

console.log('=============== maskText number ===============');

let number = 'abc1234dsf75765fgf';

maskText('number', txt => console.log(txt))(number);

console.log('=============== maskText money ===============');

let v1 = '1a',
    v2 = '12a',
    v3 = '123a',
    v4 = '1234a',
    v5 = '12345a',
    v6 = '123456a',
    v7 = '1234567a',
    v8 = '12345678a';

maskText('money', txt => console.log(txt))(v1);
maskText('money', txt => console.log(txt))(v2);
maskText('money', txt => console.log(txt))(v3);
maskText('money', txt => console.log(txt))(v4);
maskText('money', txt => console.log(txt))(v5);
maskText('money', txt => console.log(txt))(v6);
maskText('money', txt => console.log(txt))(v7);
maskText('money', txt => console.log(txt))(v8);
