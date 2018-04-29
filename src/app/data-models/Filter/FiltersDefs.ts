import { FilterValue } from './FilterValue';
import { Group } from '../../UtilModule/DataModels/Group';





export const SizeOrderFilter : Group<FilterValue> = {
    name: "Order",
    default: 0,
    entries:
    [
        {
            name: "MOST",
            value: "most",
        },
        {
            name: "LEAST",
            value: "least"
        }
    ],
}

export const TimeOrderFilter : Group<FilterValue> = {

    name: "Time Order",
    default: 0,
    entries:
    [
        {
            name: "NEW",
            value: "new",
            
        },
        {
            name: "OLD",
            value: "old"
        }
    ],
}

export const TimeConstraintFilter : Group<FilterValue> = {

    name: "Time Order",
    default: 1,
    entries:
    [
        {
            name: "DAY",
            value: ["t", "1"]
            
        },
        {
            name: "WEEK",
            value: ["t", "7"]
        },
        {
            name: "MONTH",
            value: ["t", "31"]
            
        },
        {
            name: "YEAR",
            value: ["t", "365"]
        }
    ]
}

export const FollowTypeFilter : Group<FilterValue> = {

    name: "Follow Type",
    default: 0,
    entries:
    [
        {
            name: "FOLLOWING",
            value: "following",
            children: [TimeOrderFilter]
        },
        {
            name: "FOLLOWER",
            value: "followers",
            children: [TimeOrderFilter]
        },
    ],
}

export const TweetFilter : Group<FilterValue> = {
    
    name: "Follow Type",
    default: 0,
    entries:
    [
        {
            name: "RECENT",
            value: "recent",
            children: [TimeOrderFilter]
        },
        {
            name: "LIKED",
            value: "liked",
            children: [SizeOrderFilter, TimeConstraintFilter]
        },
        {
            name: "REPLIED",
            value: "replied",
            children: [SizeOrderFilter, TimeConstraintFilter]
        },
        {
            name: "LIKES",
            value: "likes",
            children: [TimeOrderFilter]
        }
    ]

}

export const UserFilter : Group<FilterValue> = {
    name: "User Filter",
    default: 0,
    entries: 
    [
        {
            name: "TWEETS",
            value: "tweets",
            children: [TweetFilter]
        },
        {
            name: "FOLLOWS",
            value: "follows",
            children: [FollowTypeFilter]
        }
    ]  
}