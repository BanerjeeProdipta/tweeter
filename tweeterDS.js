var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var userMap = {};
var tweetMap = {};
function createUser(user) {
    var _a;
    userMap = __assign(__assign({}, userMap), (_a = {}, _a[user.userId] = user, _a));
}
function createRandomNumber() {
    var randomNumber = Math.random();
    console.log({ randomNumber: randomNumber });
    return randomNumber;
}
var users = [
    {
        userId: createRandomNumber().toString(),
        userName: 'Test 1',
        email: 'test1@gmail.com',
        followers: [],
        following: [],
    },
    {
        userId: createRandomNumber().toString(),
        userName: 'Test 2',
        email: 'test2@gmail.com',
        followers: [],
        following: [],
    },
    {
        userId: createRandomNumber().toString(),
        userName: 'Test 3',
        email: 'test3@gmail.com',
        followers: [],
        following: [],
    },
];
for (var i = 0; i < users.length; i++) {
    createUser(users[i]);
}
function follow(userId, followRequesterId) {
    var userToFollow = userMap[userId];
    console.log({ userToFollow: userToFollow, userId: userId, followRequesterId: followRequesterId });
    userToFollow.followers.push(followRequesterId);
    userMap[userId] = userToFollow;
}
follow(users[0].userId, users[1].userId);
console.log('Updated User Map:', JSON.stringify(userMap, null, 2));
