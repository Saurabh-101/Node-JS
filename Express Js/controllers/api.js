const {companySites} = require('../data');
const getPeople = (req,res)=>{

    const id = req.params.id;
    const { desc } = req.body;
    const company = companySites.find((companySite)=> companySite.id == id);

    if(!company){
        return res.status(404).json({success:false,msg:`Company with id ${id} not found`});
    }


    return res.status(200).json({success:true,companyDetails:company});


};

const putPeople = (req,res)=>{

    const id = req.params.id;
    const { desc } = req.body;
    const company = companySites.find((companySite)=> companySite.id == id);

    if(!company){
        return res.status(404).json({success:false,msg:`Company with id ${id} not found`});
    }

    const newCompany = companySites.map((companySite)=>{
        if(companySite.id==id){
            companySite.description = desc;
        }
        return companySite;
    })

    return res.status(200).json({success:true,companyDetails:newCompany});


};

const createPeople = (req,res)=>{

    const {name} = req.body;

    if(!name){
        return res.status(400).json({success:false,msg:'Please enter name.'})
    }
    res.status(200).json({success:true,msg:`Welcome ${name}`});

};

module.exports = {getPeople,createPeople,putPeople};