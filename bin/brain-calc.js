#!/usr/bin/env node
import {rules, gameCalc} from "../src/games/game-calc.js";
import {core} from "../src/index.js";

core(rules, gameCalc);