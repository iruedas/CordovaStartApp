app = function(token, username, callback, errorCallback) {
    cordova.exec(callback, errorCallback, "App", "start", {token: token, username: username});
};