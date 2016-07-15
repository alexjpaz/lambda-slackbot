const glob = require('glob');
const path = require('path');

var actions = {};

glob.sync( './actions/**/*.js' ).forEach( function( file ) {
  var name = file
              .replace('./actions/','')
              .replace('.js','');
   actions[name] = require( path.resolve( file ) );
});

module.exports = {
  invoke: function(thing) {
    var fn = actions[thing.name];

    if(!fn) {
      throw new Error(`Action ${thing.name} not found`);
    }

    fn(thing);
  }
};
