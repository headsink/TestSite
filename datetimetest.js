const parse = require('date-fns/parse');
const formatISO = require('date-fns/formatISO');

const b = parse('Mon Jul 16 01:28:17 +0000 2012','EEE LLL dd HH:mm:ss xxxx yyyy' ,new Date());
const result = formatISO(new Date(b))
console.log(result); // 2012-07-16T09:28:17+08:00

