const Contact = require("../model/contactModel");
const asyncHandler = require("express-async-handler");

const getContacts = asyncHandler(async (req, res) => {
  console.log("fddfdfsdfsdfsdfsdf")
  try{
    // wait mery hisaab sy jis trah ye hona h wo btata hu
    const contacts = await Contact.find({user_id:req.user.id});
    console.log(contacts)
    if(!contacts)
    {
      console.log("nothing found")
    }
      res.status(200).json(contacts);
  }
  catch(err){
console.log(err)
  }
})
const getSpecificContact = asyncHandler(async (req, res) => {
  let contact;
  try {
    contact = await Contact.findById(req.params.id);
    res.status(200).json(contact);
  } catch (err) {
    if (!contact) {
      res.status(404);
      throw new Error("Not Found");
    }
  }
});
const updateContacts = asyncHandler(async (req, res) => {
  let updateContacts;
  try {
    updateContacts = await Contact.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    console.log("this is runing", updateContacts);
    res.status(200).json(updateContacts);
  } catch (error) {
    if (!updateContacts) {
      res.status(404);
      throw new Error("Not Found");
    }
  }
});
const deleteContacts = asyncHandler(async (req, res) => {
  let deleteContacts;
  try {
    deleteContacts = await Contact.findByIdAndDelete(req.params.id, req.body, {
      new: true,
    });
    console.log("this is runing", updateContacts);
    res.status(200).json(deleteContacts);
  } catch (error) {
    if (!deleteContacts) {
      res.status(404);
      throw new Error("Not Found");
    }
  }
});
const createNewContacts = asyncHandler(async (req, res) => {
  const { name, phone, email } = req.body;
  if (!phone || !name || !email) {
    res.status(400);
    throw new Error("false inputs");
  }

  const alreadyExist=await Contact.findOne({email})
 if(alreadyExist)
 {
  res.status(400);
  throw new Error("aLeady Exist")
 }

  try{
    const contact = await Contact.create({
      // user_id:req.user.id
      name,
      email,
      phone,
      user_id:req.user.id
    });
    res.status(201).json(contact);
    console.log("Get_Body", req.body);
  }
  catch(err){
console.log(err)
  }
 
});
module.exports = {
  getContacts,
  getSpecificContact,
  updateContacts,
  deleteContacts,
  createNewContacts,
};

// this is aloso used for post data in database
// const contacts = new Contact(req.body);
// await contacts
// .save()
// .then(() => {
//   res.send("item saved");
// })
// .catch((err) => {
//   console.log(err, "err");
// });
// res.status(200).json({ message: "Create New contact" });
