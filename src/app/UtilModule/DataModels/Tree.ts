export interface Tree<T> {
    value: T;
    children ?: Tree<T>[];
}

export function mapTree<A,B>(tree: Tree<A>, mapFunc: (a: A) =>  B) : Tree<B>{
    
    if (tree.children){
        
        return {
            value: mapFunc(tree.value),
            children: tree.children.map(x => mapTree(x, mapFunc))
        }
    } else {
        return {
            value: mapFunc(tree.value)
        }
    }
    
}

export function createTree<T>(parentNode: T, children: Tree<T>[]): Tree<T>{
    if (children != null){
        return {
            value: parentNode,
            children: children
        }
    } else {
        return {
            value: parentNode
        }
    }
    
    
}


export function treeToList<T>(tree: Tree<T>): T[] {
    if (tree.children == null){
        return [tree.value]
    } else {
        return [tree.value].concat(tree.children.map(childTree => treeToList(childTree)).reduce((acc, x) => acc.concat(x), []))
    }
}