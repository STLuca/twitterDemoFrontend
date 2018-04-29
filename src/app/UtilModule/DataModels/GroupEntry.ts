import { Group } from './Group';


export interface GroupEntry<T> {
    name: string;
    value: T;
    children?: Group<T>[];
}