const parse = require('date-fns/parse');
const formatISO = require('date-fns/formatISO');
const { formatInTimeZone } = require('date-fns-tz');

const b = parse('Mon Jul 16 01:28:17 +0000 2012','EEE LLL dd HH:mm:ss xxxx yyyy' ,new Date()); // parse String to date
const result = formatISO(new Date(b)); // date to ISO format
console.log(formatInTimeZone(result, 'Factory', 'yyyy-MM-dd HH:mm:ss')); // 2012-07-16 01:28:17
console.log(result); // 2012-07-16T09:28:17+08:00

