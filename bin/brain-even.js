#!/usr/bin/env node
import { rules, gameEven } from '../src/games/game-even.js';
import core from '../src/index.js';

core(rules, gameEven);
