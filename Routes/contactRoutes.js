const express = require("express");
const router = express.Router();
const {
  getContacts,
  getSpecificContact,
  updateContacts,
  deleteContacts,
  createNewContacts,
} = require("../controllers/contactControllers");
router.route("/").get(getContacts);
router.route("/").post(createNewContacts);
router.route("/:id").get(getSpecificContact);
router.route("/:id").put(updateContacts);
router.route("/:id").delete(deleteContacts);
module.exports = router;
// (req ,res)=>{
//     res.status(200).json({message:'Get all contacts'})
// }
