#!/usr/bin/env node
import {rules, gameNod} from "../src/games/game-nod.js";
import {core} from "../src/index.js";

core(rules, gameNod);