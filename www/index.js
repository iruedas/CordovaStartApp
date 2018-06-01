app = function(token, callback, errorCallback) {
    cordova.exec(callback, errorCallback, "App", "start", {token: token});
};