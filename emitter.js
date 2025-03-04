const { Observable } = require('rxjs');

module.exports = new Observable(subscriber => {
  let count = 0;
  const interval = setInterval(() => {
    subscriber.next("tick");
    count++;
  }, 1000);

  const errorTimeout = setTimeout(() => {
    clearInterval(interval);
    subscriber.error(new Error("Explosion!"));
  }, 5500);

  const completeTimeout = setTimeout(() => {
    clearInterval(interval);
    subscriber.complete();
  }, 7000);

  return () => {
    clearInterval(interval);
    clearTimeout(errorTimeout);
    clearTimeout(completeTimeout);
  };
});