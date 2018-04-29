import { TweetDTO, toggleTweetLike } from './../DTOs/TweetDTO';
import { UserDTO, toggleUserFollow } from "../DTOs/UserDTO";



export class TweetUserPair {
    constructor(
        public user: UserDTO,
        public tweet: TweetDTO) {}
  }

export function toggleFollow(pair: TweetUserPair) : TweetUserPair {
    return new TweetUserPair(toggleUserFollow(pair.user), pair.tweet);
}

export function toggleLike(pair: TweetUserPair) : TweetUserPair {
    return new TweetUserPair(pair.user, toggleTweetLike(pair.tweet));
}