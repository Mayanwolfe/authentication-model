const express = require("express")
const router = express.Router()
const { register, login, update, deleteUser, getUsers } = require("./auth");
router.route("/register").post(register)
router.route("/login").post(login);
router.route("/update").put(update);
router.route("/deleteUser").delete(deleteUser);
router.route("/getUsers").get(getUsers);

module.exports = router;