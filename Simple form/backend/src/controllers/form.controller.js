import Form from "../schema/form.schema.js";

 async function addForm(req, res){
    // get all data from frontend
    const { firstname, lastname, username, email, password, phone, country, city, panNo, aadharNo } = req.body;
    if (!firstname || !lastname || !username || !email || !password || !phone || !country || !city || !panNo || !aadharNo) {
        return res.status(400).json({ message: "All fields are required" });
    }
    
    //create a new form
    const form = new Form({
        firstname,
        lastname,
        username,
        email,
        password,
        phone,
        country,
        city,
        panNo,
        aadharNo
    });
    
    //save the form
    try {
        await form.save();
        res.status(201).json({ message: "Form submitted successfully" });
    } catch (err) {
        res.status(500).json({ message: "Error submitting form", error: err.message });
    }
}

 async function getAllForms(req, res){
    try {
        const forms = await Form.find();
        res.status(200).json(forms);
    } catch (err) {
        res.status(500).json({ message: "Error getting forms", error: err.message });
    }
}

export { addForm, getAllForms };