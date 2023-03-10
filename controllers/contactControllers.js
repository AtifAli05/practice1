const getContacts = (req, res) => {
  res.status(200).json({ message: "Get all contacts" });
};
const getSpecificContact = (req, res) => {
  res.status(200).json({ message: `delete contact ${req.params.id}` });
};
const updateContacts = (req, res) => {
  res.status(200).json({ message: `Update contacts ${req.params.id}` });
};
const deleteContacts = (req, res) => {
  res.status(200).json({ message: `delete contact ${req.params.id}` });
};
const createNewContacts = (req, res) => {
  res.status(200).json({ message: "Create New contact" });
  console.log("Get_Body", req.body);
};
module.exports = {
  getContacts,
  getSpecificContact,
  updateContacts,
  deleteContacts,
  createNewContacts,
};
