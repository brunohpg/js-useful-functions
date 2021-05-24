const { maskText } = require('./index');

console.log('=============== number ===============');

let number = 'abc1234dsf75765fgf';

maskText('number', txt => console.log(txt))(number);

console.log('=============== money ===============');

let v1 = '1a',
    v2 = '12a',
    v3 = '123a',
    v4 = '1234a',
    v5 = '12345a',
    v6 = '123456a',
    v7 = '1234567a';

maskText('money', txt => console.log(txt))(v2);
