import { UserDTO } from './../DTOs/UserDTO';
import { TweetDTO } from './../DTOs/TweetDTO';
import { TweetUserPair } from "./TweetUserPair";

const loadingTweetDTO: TweetDTO = {
    id: 0,
    userID: 0,
    message: "Loading...",
    timestamp: '0',
    replyTo: 0,
    numOfLikes: 0,
    numOfReplies: 0,
    iLiked: false
}

const loadingUserDTO: UserDTO = {
    id: 0,
    username: "Loading...",
    numOfTweets: 0,
    numOfFollowing: 0,
    numOfFollowers: 0,
    iFollowing: false
}

export const LoadingPair = new TweetUserPair(loadingUserDTO, loadingTweetDTO);
export const LoadingUser = new TweetUserPair(loadingUserDTO, null);
export const LoadingTweet = new TweetUserPair(null, loadingTweetDTO);