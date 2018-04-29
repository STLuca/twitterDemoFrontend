import { TimeConstraintFilter } from './FiltersDefs';
import { FilterValue } from './FilterValue';
import { Tree } from '../../UtilModule/DataModels/Tree';




export const TimeOrderFilterTree: Tree<FilterValue>[] = [
    {
        value: "NEW"
    },
    {
        value: "OLD"
    }
]

export const SizeOrderFilterTree: Tree<FilterValue>[] = [
    {
        value: "MOST"
    },
    {
        value: "LEAST"
    }
]

export const TimeConstrainedFilterTree: Tree<FilterValue>[] = [
    {
        value: ["t", "1"]
    },
    {
        value: ["t", "7"]
    },
    {
        value: ["t", "31"]
    },
    {
        value: ["t", "365"]
    }
]

export const FollowTypeFilterTree: Tree<FilterValue>[] = [
    {
        value: "following",
        children: TimeOrderFilterTree
    },
    {
        value: "follower",
        children: TimeOrderFilterTree
    }
]


/*
export const TweetFilter : FilterGroup = {
    
    filterName: "Follow Type",
    default: 0,
    filters:
    [
        {
            name: "RECENT",
            value: "recent",
            childFilters: [TimeOrderFilter]
        },
        {
            name: "LIKED",
            value: "liked",
            childFilters: [SizeOrderFilter, TimeConstraintFilter]
        },
        {
            name: "REPLIED",
            value: "replied",
            childFilters: [SizeOrderFilter, TimeConstraintFilter]
        },
        {
            name: "LIKES",
            value: "likes",
            childFilters: [TimeOrderFilter]
        }
    ]

}

*/