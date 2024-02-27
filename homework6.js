
{
    //tree1
    function buildTree(nodes, parentId) {
        const tree = {};
        nodes.filter(node => node.parentId === parentId).forEach(node => {
                tree[node.id] = buildTree(nodes, node.id)});
        return tree;
    }
    const nodes = [
        {id: 1, parentId: null},
        {id: 2, parentId: 1},
        {id: 3, parentId: 1},
        {id: 4, parentId: 2},
        {id: 5, parentId: 2},
        {id: 6, parentId: 3},
        {id: 7, parentId: 4},
        {id: 8, parentId: 7},
        {id: 9, parentId: 8},
    ];
    buildTree(nodes, null);
}

{
    //tree2
    function buildTree(nodes, parentId) {
        const subtree = {};
        const children = nodes.filter(node => node.parentId === parentId).map(node => ({
                id: node.id,
                children: buildTree(nodes, node.id) }));
        if (children.length > 0) {
            subtree['id'] = parentId;
            subtree['children'] = children;
        }
        return subtree;
    }
    const nodes = [
        {id: 1, parentId: null},
        {id: 2, parentId: 1},
        {id: 3, parentId: 1},
        {id: 4, parentId: 2},
        {id: 5, parentId: 2},
        {id: 6, parentId: 3},
        {id: 7, parentId: 4},
        {id: 8, parentId: 7},
        {id: 9, parentId: 8},
    ];
    buildTree(nodes, null);
}

