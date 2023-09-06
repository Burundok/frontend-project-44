#!/usr/bin/env node
import { rules, gameProgression } from '../src/games/game-progression.js';
import core from '../src/index.js';

core(rules, gameProgression);
