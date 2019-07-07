// const $ = require('jquery')
// const module = require('./module.js')
require(['jquery','./module.js'],function($,module){
  $("#app").html(`${module.name} ${module.age} ${module.address}`)
})
