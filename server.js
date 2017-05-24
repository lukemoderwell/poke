let express = require('express');
let app = express();
let http = require('http').Server(app);
let path = require('path');
const notifier = require('node-notifier');

// TODO, globally: convert to typescript, and follow a style guide

// anything that exists in dist should (by default) be treated as a static file.
app.use(express.static('dist'));

// handle virtual routes with index.html.
app.get('*', (_, response) => {
    response.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
});

http.listen(8080, () => {
    console.log('listening on *:8080');
    notifier.notify({
        'title': 'Dev Server Started',
        'message': 'listening on *:8080'
    });
});

// For Docker
process.on('SIGINT', () => process.exit()); // Ctrl+C
process.on('SIGTERM', () => process.exit()); // docker stop
