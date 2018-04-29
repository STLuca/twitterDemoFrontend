import { UserDTO } from './../DTOs/UserDTO';
import { TweetDTO } from './../DTOs/TweetDTO';
import { TweetUserPair } from "./TweetUserPair";

const testTweetDTO: TweetDTO = {
    id: 2,
    userID: 1,
    message: "Hello, this is a test tweet",
    timestamp: '100',
    replyTo: 0,
    numOfLikes: 0,
    numOfReplies: 0,
    iLiked: false
}

const testUserDTO: UserDTO = {
    id: 1,
    username: "Test User",
    numOfTweets: 1,
    numOfFollowing: 0,
    numOfFollowers: 0,
    iFollowing: false
}

export const testPair = new TweetUserPair(testUserDTO, testTweetDTO);
export const testUser = new TweetUserPair(testUserDTO, null);
export const testTweet = new TweetUserPair(null, testTweetDTO);