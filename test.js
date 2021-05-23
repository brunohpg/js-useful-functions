const { maskText } = require('./index');

let v1 = '1a',
    v2 = '12a',
    v3 = '123a',
    v4 = '1234a',
    v5 = '12345a',
    v6 = '123456a',
    v7 = '1234567a';

maskText('money', txt => console.log(txt))(v2);
