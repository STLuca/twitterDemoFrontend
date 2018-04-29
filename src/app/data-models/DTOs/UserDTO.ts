export interface UserDTO{
  id: number,
  username: string,
  numOfTweets: number,
  numOfFollowing: number,
  numOfFollowers: number,
  iFollowing: boolean
}

export function toggleUserFollow(user: UserDTO) : UserDTO{
  return {
    id: user.id,
    username: user.username,
    numOfTweets: user.numOfTweets,
    numOfFollowing: user.numOfFollowing,
    numOfFollowers: user.numOfFollowers + (user.iFollowing ? -1 : 1),
    iFollowing: !user.iFollowing
  }
}

