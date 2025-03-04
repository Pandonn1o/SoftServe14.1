const clock$ = require("./emitter");
const { map, catchError } = require('rxjs/operators');
const { of, EMPTY } = require('rxjs');

const subscription = clock$
  .pipe(
    map((value, index) => index % 2 === 0 ? value : 'tock'),
    catchError(error => {
      console.log(error.message);
      return EMPTY;
    })
  )
  .subscribe({
    next: value => console.log(value),
    error: error => console.error(error),
    complete: () => console.log('Observer got a complete notification')
  });

module.exports = subscription;