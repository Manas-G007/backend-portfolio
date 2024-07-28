const PeopleDAO = require("../dao/peopleDAO.js");

class PeopleController {
  static async apiPostPeople(req, res, next) {
    try {
      const {name,email,message}=req.body;

      if(!name || !email || !message){
        return res.status(400).json({success:false,message:"provide all details"});
      }
      
      await PeopleDAO.addPeople(name,email,message);
      res.json({ success: true, message: "Response Added Successfully!" });
    } catch (e) {
      res.status(500).json({ success: false,error: e.message });
    }
  } 
}

module.exports = PeopleController;
