function revincrease() {
    // need shift key pressed
    
    for (var j = 1; j <=24; j+=1) {
       (function (j) {
         setTimeout(function () {
          
          var str1 = "l";
          var str4 = j;
          var res1 = str1.concat(str4);   
          document.getElementById(res1).style.opacity="1";},18*j);})(j);
        
          
         }}

         function revdecrease(){
          // need shift key released
          
          var lights = [24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1];
             for (let i = 0; i<= 23; i+=1) {
                (function (i) {
                  setTimeout(function () {
                   var res="";
                   var str1 = "l";
                   var str3 = lights[i];
                   var str2 = str3.toString();
                   // console.log(str2)
       
                   res = str1.concat(str2); 
                    
                   document.getElementById(res).style.opacity="0.25";},14*i);})(i);}
        
        }

        function tempincrease() {
            // need shift key pressed
            
            for (var j = 1; j <=7; j+=1) {
               (function (j) {
                 setTimeout(function () {
                  
                  var str1 = "t";
                  var str4 = j;
                  var res1 = str1.concat(str4);   
                  document.getElementById(res1).style.opacity="1";},30*j);})(j);
                
                  
                 }}

                 function tempdecrease(){
                    // need shift key released
                    
                    var lights = [7,6,5,4,3,2,1];
                       for (let i = 0; i<= 6; i+=1) {
                          (function (i) {
                            setTimeout(function () {
                             var res="";
                             var str1 = "t";
                             var str3 = lights[i];
                             var str2 = str3.toString();
                             // console.log(str2)
                 
                             res = str1.concat(str2); 
                              
                             document.getElementById(res).style.opacity="0.25";},14*i);})(i);}
                  
                  }
    
                  function boostincrease() {
                    // need shift key pressed
                    
                    for (var j = 1; j <=9; j+=1) {
                       (function (j) {
                         setTimeout(function () {
                          
                          var str1 = "b";
                          var str4 = j;
                          var res1 = str1.concat(str4);   
                          document.getElementById(res1).style.opacity="1";},50*j);})(j);
                        
                          
                         }}
        
                         function boostdecrease(){
                            // need shift key released
                            
                            var lights = [9,8,7,6,5,4,3,2,1];
                               for (let i = 0; i<= 8; i+=1) {
                                  (function (i) {
                                    setTimeout(function () {
                                     var res="";
                                     var str1 = "b";
                                     var str3 = lights[i];
                                     var str2 = str3.toString();
                                     // console.log(str2)
                         
                                     res = str1.concat(str2); 
                                      
                                     document.getElementById(res).style.opacity="0.25";},40*i);})(i);}
                          
                          }
                          function oilincrease() {
                            // need shift key pressed
                            
                            for (var j = 1; j <=9; j+=1) {
                               (function (j) {
                                 setTimeout(function () {
                                  
                                  var str1 = "o";
                                  var str4 = j;
                                  var res1 = str1.concat(str4);   
                                  document.getElementById(res1).style.opacity="1";},90*j);})(j);
                                
                                  
                                 }}
                
                                 function oildecrease(){
                                    // need shift key released
                                    
                                    var lights = [9,8,7,6,5,4,3,2,1];
                                       for (let i = 0; i<= 8; i+=1) {
                                          (function (i) {
                                            setTimeout(function () {
                                             var res="";
                                             var str1 = "o";
                                             var str3 = lights[i];
                                             var str2 = str3.toString();
                                             // console.log(str2)
                                 
                                             res = str1.concat(str2); 
                                              
                                             document.getElementById(res).style.opacity="0.25";},100*i);})(i);}
                                  
                                  }

                                 
                                  
                                  function log(...args) {
                                    let message = args.join(' ');
                                    $('#log').prepend('--&gt; ' + message + '<br>');
                                  }
                                  
                                  function warn(...args) {
                                    log(...args);
                                    $('#log').addClass('warn');
                                  }
                                  
                                  function hideLog() {
                                    $('#log').hide();
                                  }
                                  
                                  function showLog() {
                                    $('#log').show();
                                  }
                                  
                                  function clearLog() {
                                    $('#log').empty();
                                  }
                                  
                                  window.onerror = error => {
                                    $('#log').addClass('error').text(`Error: ${error}`);
                                  };
                                  
                                  function checkSupportFor(name, propertyName, propertyOwner = window) {
                                    if (!(propertyName in propertyOwner)) {
                                      warn(`No support for ${name}`);
                                    } else {
                                      log(`Supports ${name}!`);
                                      return true;
                                    }
                                  }
                                  
                                  function isInIframe() {
                                    return window.parent !== window;
                                  }
                                  
                                  $(() => {
                                    log('Ready!');
                                    showLog();
                                    $('#clear-log').click(clearLog);
                                  });
                                  
                                  //////////////////
                                  //////////////////
                                  
                                  let currentState = {
                                    // device orientation
                                    beta: 0, // In degree in the range [-180,180]
                                    gamma: 0, // In degree in the range [-180,180]
                                    alpha: 0,
                                    absolute: 0,
                                  
                                    // devicemotion acceleration
                                    acceleration: {
                                      x: 0,
                                      y: 0,
                                      z: 0 },
                                  
                                  
                                    // devicemotion gravity-corrected acceleration
                                    accelerationIncludingGravity: {
                                      x: 0,
                                      y: 0,
                                      z: 0 },
                                  
                                  
                                    // devicemotion rotation
                                    rotationRate: {
                                      beta: 0,
                                      gamma: 0,
                                      alpha: 0 } };
                                  
                                  
                                  
                                  function handleDeviceOrientation(event) {
                                    let propertyNames = ['alpha', 'beta', 'gamma', 'absolute'];
                                  
                                    propertyNames.forEach(propertyName => {
                                      if (propertyName == 'gamma'){
                                      var g = currentState[propertyName];
                                      if(g<-30){
                                      revincrease();
                                      }else{
                                      revdecrease();
                                      }
                                      console.log(currentState[propertyName]);
                                  }
                                      currentState[propertyName] = event[propertyName];
                                    });
                                  
                                    displayState(currentState);
                                  }
                                  
                                  function handleDeviceMotion(event) {
                                    let propertyNames = ['x', 'y', 'z'];
                                  
                                    // acceleration
                                    propertyNames.forEach(propName => {
                                      if (event.accelerationIncludingGravity) {
                                        currentState.accelerationIncludingGravity[propName] = event.accelerationIncludingGravity[propName];
                                      }
                                      if (event.acceleration) {
                                        currentState.acceleration[propName] = event.acceleration[propName];
                                      }
                                    });
                                  
                                    // rotation
                                    propertyNames = ['alpha', 'beta', 'gamma'];
                                    propertyNames.forEach(propName => {
                                      if (event.rotationRate) {
                                        currentState.rotationRate[propName] = event.rotationRate[propName];
                                      }
                                    });
                                  
                                    displayState(currentState);
                                  }
                                  
                                  function displayState(state) {
                                    Object.keys(state).forEach(key => {
                                      let value = state[key];
                                      if (value === null) {return;}
                                  
                                      if (typeof value === 'object') {
                                        Object.keys(value).forEach(innerKey => {
                                          let innerValue = state[key][innerKey];
                                          if (innerValue === null) {return;}
                                  
                                          let elementId = `${key}-${innerKey}`;
                                          $('#' + elementId).text(Math.round(innerValue));
                                        });
                                      } else {
                                        let elementId = key;
                                        $('#' + elementId).text(Math.round(value));
                                      }
                                    });
                                  
                                    updateDemo(state);
                                  }
                                  
                                  function updateDemo(state) {
                                    let x = state.gamma,
                                    y = state.beta,
                                    rotation = state.alpha;
                                  
                                    // Because we don't want to have the device upside down
                                    // We constrain the x value to the range [-90,90]
                                    if (x > 90) {x = 90;};
                                    if (x < -90) {x = -90;};
                                  
                                    // To make computation easier we shift the range of
                                    // x and y to [0,180]
                                    x += 90;
                                    y += 90;
                                  
                                    let xPct = 100 * x / 180,
                                    yPct = 100 * y / 180;
                                  
                                    // reverse the rotation
                                    rotation = -1 * rotation;
                                  
                                    let width = 10,height = 10;
                                  
                                    $('#item').css({
                                      left: xPct - width + '%',
                                      top: yPct - height + '%',
                                      transform: 'rotate(' + rotation + 'deg)' });
                                  
                                  }
                                  
                                  $(() => {
                                    displayState(currentState);
                                  
                                    if (isInIframe()) {
                                      warn('This page appears to be running in an iframe and may no work');
                                    }
                                    if (checkSupportFor('Device Motion', 'ondevicemotion')) {
                                      log('add devicemotion handler');
                                      window.addEventListener('devicemotion', handleDeviceMotion);
                                    }
                                    if (checkSupportFor('Device Orientation', 'ondeviceorientation')) {
                                      log('add deviceorientation handler');
                                      window.addEventListener('deviceorientation', handleDeviceOrientation);
                                    }
                                  });