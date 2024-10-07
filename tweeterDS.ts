type Tweet = {
  id: string;
  userID: string;
  tweet: string;
  createdAt: string;
  hashtags: Set<string>;
};

type TweetMap = {
  [tweetID: string]: Tweet;
};

type User = {
  userId: string;
  userName: string;
  email: string;
  followers: User['userId'][];
  following: User['userId'][];
};

type UserMap = {
  [userID: string]: User;
};

type Timeline = Tweet[];

let userMap: UserMap = {};
let tweetMap: TweetMap = {};

function createUser(user: User) {
  userMap = { ...userMap, [user.userId]: user };
}

function createRandomNumber() {
  const randomNumber = Math.random();
  console.log({ randomNumber });
  return randomNumber;
}

const users = [
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

for (let i = 0; i < users.length; i++) {
  createUser(users[i]);
}

function follow(userId: string, followRequesterId: string) {
  const userToFollow = userMap[userId];
  console.log({ userToFollow, userId, followRequesterId });
  userToFollow.followers.push(followRequesterId);
  userMap[userId] = userToFollow;
}

follow(users[0].userId, users[1].userId);

console.log('Updated User Map:', JSON.stringify(userMap, null, 2));
