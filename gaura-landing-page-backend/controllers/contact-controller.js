import Contact from "../models/contact-model.js";

const contact = async (req, res) => {
  try {
    const { name, email, message, location, phoneNumber } = req.body;
    console.log("Req: ", req.body);

    if (!name || !email || !location || !phoneNumber) {
      console.log("Inside validation failure.");
      return res.status(400).json({ message: "All fields are required" });
    }

    const newContact = await Contact.create({
      name,
      phoneNumber,
      email,
      location,
      message,
    });

    return res.status(201).json({
      message: "Contact saved successfully",
      contact: newContact,
    });
  } catch (error) {
    console.error("Contact Form Error:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export { contact };
