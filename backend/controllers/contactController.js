//@desc Get all contacts
//@route GET /api/contacts
//@access public
const getContacts = (req,res)=>{
    res.status(200).json({message:"Get all contacts"})
};

//@desc create contact
//@route POST /api/contacts
//@access public
const createContact = (req,res)=>{
    console.log(req.body)
    res.status(201).json({message:"Create Contact"})
};

//@desc get a contact
//@route GET /api/contacts/:id
//@access public
const getContact =(req,res) =>{
    res.status(200).json({message:`Get contact for ${req.params.id}`})
};

//@desc updqate contact
//@route PUT /api/contacts/:id
//@access public
const updateContact =(req,res) =>{
    res.status(200).json({message:`Updated contact for ${req.params.id}`})
};

//@desc Delete contact
//@route DELETE /api/contacts/:id
//@access public
const deleteContact =(req,res) =>{
    res.status(200).json({message:`Deleted contact for ${req.params.id}`})
};





export {getContacts,createContact,getContact,updateContact,deleteContact}

