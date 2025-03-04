# Task for theme RxJS. Basics 

Please, create an observable in **emitter.js** file.   
The observable should emit "tick" value every second.  
The observable should emit error with Error("Explosion!") after 5.5 seconds.  
The observable should stop emitting "tick" after 7 seconds.  
  
In **main.js**:  
before subscription 
 - convert received values - those with even positions should become "tock"
 - catch error and convert it to a value of error message  
  
Then subscribe and console log all emitted values, and log "Observer got a complete notification" to the console on completion.

<img src='./dev-data/data-structure.PNG' width=400>