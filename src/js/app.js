import jQuery from 'jquery';
window.jQuery = jQuery;

var $ = jQuery;


  $.fn.landingElements = function() {

    var $landingElementGroup = this,
        $landingElementGroupLength = $landingElementGroup.length,
        $window = $(window),
        domHeight = $(document).height(),
        winHeight = $window.height(),
        offsetElements = new Array(),
        durations = new Array(),
        distance = 375,
        duration,

        posElement = function(){
          var $this = $(this);
          $this.css({'position': 'relative',
                   'z-index': '10000',
                   'opacity' : '0',
                   'left' : $this.attr('data-left') + 'px',
                   'bottom' : $this.attr('data-bottom') + 'px'
                  });
          };

    //inizializing the elements
    for(var i=0; i<$landingElementGroupLength; i++) {
      var $this = $($landingElementGroup[i]);
      offsetElements.push($this.offset().top);
      durations.push(parseInt($this.attr('data-duration')));
      $this.children().each(posElement);
    }

    $window.scroll(function(){

      $landingElementGroup.each(function(i, el) {

        var triggerDistance  = (offsetElements[i]/domHeight)*(domHeight-winHeight);

        if(triggerDistance - $window.scrollTop() > distance)
            return;

        var $this = $(el);
        duration = durations[i] ? durations[i] : 500;

        $this.children().each(function(){
              var $this = $(this),
                  hDirection,
                  vDirection;

                  var allClass = $this.attr('class');

                    if($this.attr('data-left')<0) {
                      hDirection = 1;
                    }
                    else if ($this.attr('data-left')>0)
                    {
                      hDirection = -1;
                    }
                    else {
                      hDirection = null;
                    };

                    if($this.attr('data-bottom')<0) {
                      vDirection = 1;
                    }
                    else if ($this.attr('data-bottom')>0)
                    {
                      vDirection = -1;
                    }
                    else {
                      vDirection = null;
                    };

                    showElement($this, hDirection, vDirection, duration);
              });
        });
      });

      //this function perform the motion and fading in of elements
      function showElement($el, hDirection, vDirection, duration) {

        if($el.css('position')==="static") return;

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
