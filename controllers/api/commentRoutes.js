// const router = require('express').Router();
// const { Comment } = require('../../models');
// const withAuth = require('../../utils/auth');

// router.post('/', withAuth, async (req, res) => {
//     try {
//         const newComment = await Comment.create({
//             body: req.body.body,
//             project_id: req.body.project_id,
//             userId: req.session.userId,
//         });
//         res.json(newComment);
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

// module.exports = router;