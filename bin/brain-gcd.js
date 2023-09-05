#!/usr/bin/env node
import {rules, gameGcd} from "../src/games/game-gcd.js";
import {core} from "../src/index.js";

core(rules, gameGcd);