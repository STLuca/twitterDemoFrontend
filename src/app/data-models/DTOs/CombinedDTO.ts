import { TweetUserPair } from './../MainModels/TweetUserPair';

import { TweetDTO } from './TweetDTO';
import { UserDTO } from './UserDTO';

export interface CombinedDTO {
    users: UserDTO[];
    tweets: TweetDTO[];
}

export const combinedDTOtoTweetUserPairList: (CombinedDTO) => TweetUserPair[]
    = (combinedDTO: CombinedDTO) => {

        if ( combinedDTO.tweets.length == 0){
            return combinedDTO.users.map(user => new TweetUserPair(user, null));
        }

        if ( combinedDTO.users.length == 0){
            return combinedDTO.tweets.map(tweet => new TweetUserPair(null, tweet));
        }

        var usersMap: Map<number, UserDTO> = getUserDTOMap(combinedDTO.users);
        return combinedDTO.tweets.map(tweet => new TweetUserPair(usersMap.get(tweet.userID), tweet));
    }

const getUserDTOMap: (users: UserDTO[]) => Map<number, UserDTO> = 
    (users: UserDTO[]) => {
        var usersMap: Map<number, UserDTO> = new Map<number, UserDTO>();
        users.forEach(user => usersMap.set(user.id, user));
        return usersMap;
}

