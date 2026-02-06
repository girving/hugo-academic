/*************************************************
 *  Hugo Academic: an academic theme for Hugo.
 *  https://github.com/gcushen/hugo-academic
 **************************************************/

(function($){

  /* ---------------------------------------------------------------------------
   * Hide mobile collapsable menu on clicking a link.
   * --------------------------------------------------------------------------- */

  $(document).on('click','.navbar-collapse.in',function(e){
    if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ){
      $(this).collapse('hide');
    }
  });

  /* ---------------------------------------------------------------------------
   * On window load.
   * --------------------------------------------------------------------------- */

  $(window).load(function(){

    // When accessing homepage from another page and `#top` hash is set, show top of page (no hash).
    if (window.location.hash == "#top") {
      window.location.hash = ""
    }

  });

})(jQuery);
