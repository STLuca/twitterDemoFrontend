import { GroupEntry } from './GroupEntry';

export interface Group<T> {
    name: string;
    default: number;
    entries: GroupEntry<T>[];
    
}