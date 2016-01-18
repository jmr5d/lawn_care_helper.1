// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require bootstrap

//= require_tree .

// function remove_fields (link) {
// 	$(link).previous("input[type=hidden]").value = "1";
// 	$(link).up(".subfields").hide();
// }


//clean implementation of link_to_function
// see: http://stackoverflow.com/questions/14324919/status-of-rails-link-to-function-deprecation
$(function(){
  $('[data-on][data-call][data-args]').each(function(d){
    try{
       $(this).on( $(this).data('on'), function(){
          window[$(this).data('call')].apply(window,$(this).data('args'))})
    }catch(e){
       if(typeof(console) != 'undefined' && typeof(console.log === 'function'))
         console.log(e);
    }
  });
})