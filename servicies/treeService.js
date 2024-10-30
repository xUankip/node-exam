const treeRepository = require("../repositories/treeRepository");

exports.createTree = async (treeData) => {
    await treeRepository.createTree(treeData)
}

exports.getAll = async () => {
    return await treeRepository.getAllTrees();
};

