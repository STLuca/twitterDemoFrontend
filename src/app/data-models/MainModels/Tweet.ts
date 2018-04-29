import { TweetDTO } from "../DTOs/TweetDTO";

export class Tweet {
    constructor(
      public id: number,
      public userID: number,
      public message: string,
      public timestamp: string,
      public replyTo: number,
      public numOfLikes: number,
      public numOfReplies: number) {}
  }

export function tweetDTOToTweet(x: TweetDTO): Tweet {
  return new Tweet(
    x.id, x.userID, x.message, x.timestamp, x.replyTo, x.numOfLikes, x.numOfReplies
  )
}

