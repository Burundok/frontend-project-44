#!/usr/bin/env node
import { rules, gamePrime } from '../src/games/game-prime.js';
import core from '../src/index.js';

core(rules, gamePrime);
