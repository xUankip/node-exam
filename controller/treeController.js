const treeService = require('../servicies/treeService');

exports.createNewTree = async (req, res) => {
    const treeData = req.body;
    await treeService.createTree(treeData);
    res.redirect('/treeForm');
};
exports.createNewTreeForm = (req, res) => {
    res.render('treeForm.ejs');
};
exports.getTrees = async (req, res) => {
    try {
        const trees = await treeService.getAll();
        res.render('treeList', { trees });
    } catch (error) {
        res.status(500).send('Error fetching');
    }
};
