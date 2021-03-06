"use strict";
exports.__esModule = true;
exports.dev = {
    outerIP: '117.62.230.235',
    innerIP: '127.0.0.1',
    port: '2222',
    outputFolder: 'build'
};
exports.RelativePath = './YanLingHui/src/js';
exports.Router = {
    "index": "./YanLingHui/src/ts/index.ts",
    "login": "./YanLingHui/src/ts/login.ts",
    "reg": "./YanLingHui/src/ts/reg.ts",
    "rank": "./YanLingHui/src/ts/rank.ts",
    "newTask": "./YanLingHui/src/ts/newTask.ts",
    "quest": "./YanLingHui/src/ts/quest.ts",
    "personalCenter": "./YanLingHui/src/ts/personalCenter.ts",
    "taskDetails": "./YanLingHui/src/ts/taskDetails.ts",
    "manageAccount": "./YanLingHui/src/ts/ManageAccount.ts",
    "expert": "./YanLingHui/src/ts/expert.ts",
    "expertSearching": "./YanLingHui/src/ts/expertSearching.ts",
    "expertIntro": "./YanLingHui/src/ts/expertIntro.ts",
    "passwordFindStepOne": "./YanLingHui/src/ts/passwordFindStepOne.ts",
    "passwordFindStepTwo": "./YanLingHui/src/ts/passwordFindStepTwo.ts"
};
function relativeRoute(routes) {
    var array = [];
    routes.forEach(function (item) {
        var emptyObj = Object.create(null);
        var key = item.key;
        var val = item.value;
        emptyObj[key] = val;
        array.push({ emptyObj: emptyObj });
    });
    return array;
}
exports.relativeRoute = relativeRoute;
