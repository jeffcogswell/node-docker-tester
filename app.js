// Command:
// node app.js
// Set an environment variable NODE_TEST_TIMER with a number
// of milliseconds to wait between iterations. Default is 1 second.

var q = 0;
var timeout = process.env.NODE_TEST_TIMER || 1000;
function looper() {
	console.log(q++);
}

setInterval(looper, timeout);
