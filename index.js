/**
Mount individual themes onto the module object for convenience.
@module index.js
@license MIT. See LICENSE.md for details.
*/

(function(){

  module.exports = {

    themes: {
      'simple-custom-helper': require('./fresh/simple-custom-helper/theme.json'),
      'UPPERcase': require('./fresh/UPPERcase/theme.json'),
      'relocated-base': require('./fresh/relocated-base/theme.json'),
      'simplest-non-inherited': require('./fresh/simplest-non-inherited'),
      'fresh-theme-hello-world': require('./node_modules/fresh-theme-hello-world'),
      'fresh-theme-underscore': require('./node_modules/fresh-theme-underscore')
    }

  };

}());
