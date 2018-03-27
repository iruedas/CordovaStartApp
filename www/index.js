window.App = function(callback) {
    cordova.exec(callback, function(err) {
        callback('Error while starting the app');
    }, "App", "start", []);
};