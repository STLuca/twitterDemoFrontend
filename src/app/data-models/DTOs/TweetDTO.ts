export interface TweetDTO {
  id: number,
  userID: number,
  message: string,
  timestamp: string,
  replyTo: number,
  numOfLikes: number,
  numOfReplies: number,
  iLiked: boolean
}

export function toggleTweetLike( tweet: TweetDTO ) : TweetDTO {
  return {
    id: tweet.id,
    userID: tweet.userID,
    message: tweet.message,
    timestamp: tweet.timestamp,
    replyTo: tweet.replyTo,
    numOfLikes: tweet.numOfLikes + (tweet.iLiked ? -1 : 1),
    numOfReplies: tweet.numOfReplies,
    iLiked: !tweet.iLiked
  }
}