
const animationHolder = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   '];
let timeoutTime = 100;

for (const position of animationHolder) {
  setTimeout(() => {
    process.stdout.write(position);
  }, timeoutTime);
  timeoutTime += 200;
}

setTimeout(() => {
  process.stdout.write('\n');
}, timeoutTime);