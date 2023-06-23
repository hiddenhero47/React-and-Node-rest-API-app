const express = require("express");
const router = express.Router();
const {
    getUsers,
    updateUserRole,
    deleteUser,
    getUserGoals,
    updateUserGoal,
    deleteUserGoals,
    getContent,
    setContent,
    // deleteContent,
    // updateContent,
    // getContentByTitle,
} = require("../controllers/appController");
const {secureRole} = require('../middleware/authMiddleware');

// User Management
router.route("/users").get(secureRole("admin"), getUsers);
router.route("/users/:id").put(secureRole("admin"), updateUserRole).delete(secureRole("admin"), deleteUser);
// User Goal Management
router.route("/users/goals/:id").get(secureRole("admin"), getUserGoals);
router.route("/users/goals/:id").put(secureRole("admin"), updateUserGoal).delete(secureRole("admin"), deleteUserGoals);
// Content Management
router.route("/content").get(getContent).post(secureRole("admin"), setContent);
// router.route("/content/:id").delete(secureRole(admin), deleteContent).put(secureRole, updateContent);
// router.route("/content/:title").get(getContentByTitle);

module.exports = router;