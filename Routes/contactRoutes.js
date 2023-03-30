const express = require("express");
const app = express();
const verifyToken = require("../middlewares/validationTokenHnadler");
const router = express.Router();
const {
  getContacts,
  getSpecificContact,
  updateContacts,
  deleteContacts,
  createNewContacts,
} = require("../controllers/contactControllers");
router.use(verifyToken)
router.route("/").get(getContacts);
router.route("/ty").post(createNewContacts);
router.route("/:id").get(getSpecificContact);
router.route("/:id").put(updateContacts);
router.route("/:id").delete(deleteContacts);
module.exports = router;
// (req ,res)=>{
//     res.status(200).json({message:'Get all contacts'})
// }
