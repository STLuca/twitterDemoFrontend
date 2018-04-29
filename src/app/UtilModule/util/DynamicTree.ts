export interface DynamicTree<T> {
    nodes: DynamicNode<T>[],
    selected: number;
}

export interface DynamicNode<T> {
    value: T,
    children ?: DynamicTree<T>[]
}