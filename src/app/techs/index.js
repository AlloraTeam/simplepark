import angular from 'angular';

import tech from './tech.js';
import techs from './techs.js';

var techsModule = 'techs';

export default techsModule;

angular
  .module(techsModule, [])
  .component('fountainTech', tech)
  .component('fountainTechs', techs);
