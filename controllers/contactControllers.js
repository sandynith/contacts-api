const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");

//@desc Get All Contacts for the logged in user
//@route GET /api/contacts
//@access Private
const getContacts = asyncHandler(async (req, res) => {
  const contacts = await Contact.find({ user_id: req.user.id });
  if (!contacts) {
    res.status(404);
    throw new Error("No contacts found!");
  }
  res.status(200).json(contacts);
  //res.status(200).json({ message: "Get All contacts!" });
});

//@desc Create Contact
//@route POST /api/contacts
//@access Private
const createContact = asyncHandler(async (req, res) => {
  if (!req.body.name || !req.body.email || !req.body.phone) {
    res.status(400);
    throw new Error("Not created, All fields are mandatory!");
  }
  console.log("Request body: ", req.body);
  const { name, email, phone } = req.body;
  const contact = await Contact.create({
    user_id: req.user.id,
    name,
    email,
    phone,
  });
  res.status(201).json(contact);
  //res.status(201).json({ message: "Created a new contact!" });
});

const getContactById = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found!");
  }
  if (contact.user_id.toString() !== req.user.id) {
    res.status(403);
    throw new Error(
      "Unauthorized, You are not authorized to view this contact!"
    );
  }
  res.status(200).json(contact);
});

const updateContactById = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found!");
  }
  if (contact.user_id.toString() !== req.user.id) {
    res.status(403);
    throw new Error(
      "Unauthorized, You are not authorized to update this contact!"
    );
  }
  // const { name, email, phone } = req.body;
  const updatedContact = await Contact.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.status(200).json(updatedContact);
});

const deleteContactById = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found!");
  }
  if (contact.user_id.toString() !== req.user.id) {
    res.status(403);
    throw new Error(
      "Unauthorized, You are not authorized to delete this contact!"
    );
  }

  await Contact.findByIdAndDelete(req.params.id);

  res.json({ message: `Deleted Contact with ID ${req.params.id}` });
});

module.exports = {
  getContacts,
  createContact,
  getContactById,
  updateContactById,
  deleteContactById,
};
