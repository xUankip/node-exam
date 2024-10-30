const Tree = require('../models/treeModel');

exports.createTree = (treeData) => {
    const tree = new Tree(treeData);
    return tree.save();
};
exports.getAllTrees = async () => {
    const trees = await Tree.find();
    return trees;
}
