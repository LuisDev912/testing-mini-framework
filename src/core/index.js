import { runner } from './runner.js';

const args = process.argv.slice(2);
const isParallel = args.includes('--async');

runner({ parallel: isParallel });