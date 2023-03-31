const body = require("body-parser");
const symptoms = require("../../models/symptoms.js");

const insertsymptom = async (req, res) => {
  try {
    const symptomName=req.body.symptomName;
    
    const symptom = await symptoms.findOne({ where: { symptom_name:  symptomName } });

    if (symptom)
      return res.status(500).send({ message: "Symptom already exists" });

    await symptoms.create({ symptom_name: symptomName });
    return res.status(201).send({ message: "Symptom Created successfully" });
  } catch (error) {
    res.status(500).send({message:"Internal server error"})
  }
};

module.exports = { insertsymptom };
