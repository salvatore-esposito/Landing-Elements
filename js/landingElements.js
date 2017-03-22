(function($){
  $.fn.landingElements = function() {

    var $landingElementGroup = this,
        domHeight = $(document).height(),
        winHeight = $(window).height(),
        offsetElements = new Array(),
        durations = new Array();

    //inizialize the elements
    $landingElementGroup.each(function() {

      var $this = $(this);
      offsetElements.push($this.offset().top);
      durations.push(parseInt($this.attr('data-duration')));

      $this.children().each(function(){
        var $this = $(this);
        $this.css({'position': 'relative', 'z-index': '10000', 'opacity' : '0'});
        $this.css('left' , $this.attr('data-left') + 'px');
        $this.css('bottom' , $this.attr('data-bottom') + 'px');
      });
    })


      $(window).scroll(function(){

        $landingElementGroup.each(function(i) {

          var $this = $(this);
          var triggerDistance  = (offsetElements[i]/domHeight)*(domHeight-winHeight);
          var duration = durations[i];
          if(triggerDistance - $(window).scrollTop() < 100)
          {
            $this.children().each(function(){
              var $this = $(this);
                  //hDirection,
                  //vDirection;
                    showElement($this, duration);

                  });
              }
        });
      });

      //this function perform the motion and fading in of elements
      function showElement($el, duration) {

        if($el.css('position')==="static") return;

        if($el.attr('data-left')<0) {
          hDirection = 1;
        }
        else if ($el.attr('data-left')>0)
        {
          hDirection = -1;
        }
        else {
          hDirection = null;
        };

        if($el.attr('data-bottom')<0) {
          vDirection = 1;
        }
        else if ($el.attr('data-bottom')>0)
        {
          vDirection = -1;
        }
        else {
          vDirection = null;
        };


        var $bottom = parseInt($el.css('bottom')),
            $left = parseInt($el.css('left')),
            directionObj = {opacity : 1,
                            left : '+=' + hDirection*Math.abs($left) + 'px',
                            bottom : '+=' + vDirection*Math.abs($bottom) + 'px',
            };

        $el.animate(directionObj , duration , function() {
          //blocking animation after it's over
          $(this).css('position', 'static');
        });

       return;
      }
  };

})(jQuery);
