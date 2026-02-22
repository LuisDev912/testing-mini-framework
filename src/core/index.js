import { runner } from './runner.js';

const args = process.argv.slice(2);
const isParallel = args.includes('--async');

console.group('debug');
console.log(args);
console.log(isParallel);
console.groupEnd();

runner({ parallel: isParallel });