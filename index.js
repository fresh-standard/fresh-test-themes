/**
Mount individual themes onto the module object for convenience.
@module index.js
@license MIT. See LICENSE.md for details.
*/

(function(){

  module.exports = {

    themes: {
      'simple-custom-helper':
        require('./fresh/simple-custom-helper/theme.json'),
      UPPERcase:
        require('./fresh/UPPERcase/theme.json')
    }

  };

}());
