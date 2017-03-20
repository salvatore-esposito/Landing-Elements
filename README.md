# Landing-Elements
jQuery plugin for parallax landing elements

  
## 1) Put jquery and js/landingElements.js as dependencies in your file html and inizilize the plugin
   The .yourclass is the class of the parent element where the animated children are.

```
  <script src="jquery-1.12.4.js" </script>
  <script src="js/landingElements.js"></script>
  <script>
     $('.yourclass').landingElements() // this inizialize the plugin
  </script>
```


## 2) Set the data-left and data-bottom values. These values set the starting values of left and bottom css proprierty. So you can have:


```
    1) data-left>0 and data-bottom>0 - the element start from the top-right of the final position. 
    2) data-left>0 and data-bottom<0 - the element start from the bottom-right of the final position. 
    3) data-left<0 and data-bottom>0 - the element start from the top-left of the final position. 
    4) data-left<0 and data-bottom<0 - the element start from the bottom-left of the final position. 
```

if you omit data-bottom element the element will only move horizontally, whereas if you omit data-left the element will only move vertically

Another value you need to set is data-time that is the duration of animation row.

example:

    
```
    <div class=".yourclass" data-time="1000">
      <div data-left="-250" data-bottom="500">primo</div>
      <div data-bottom="-300">centrale</div>
      <div data-left="250" data-bottom="500">ultimo</div>
     </div>
```

You can see a demo [here](https://codepen.io/anon/pen/NpXZZX).
