import excusesController from "./excusesController.js"

const generate =async(req,res)=>{
    const excuses = await excusesController.generate();
    res.json({data:excuses})
}

const getAll = async(req,res)=>{
    const excuses = await excusesController.getAll();
    res.json({data:excuses});
}

const getById = async (req,res)=>{
    const id = req.params.id;
    const excuse = await excusesController.getById(id);
    res.json({data:excuse});
}

const getByProperty = async(req,res)=>{
    const {property,value}=req.query;
    const excuses = await excusesController.getByProperty(property,value);
    res.json({data:excuses});
}

const create = async(req,res)=>{
    console.log("potato",req.body)
    const excuse = await excusesController.create(req.body);
    res.json({data:excuse});
}

const update = async(req,res)=>{
    const id = rq.params.id;
    const excuse = await excusesController.update(id, req.body);
    res.json({data:excuse});
}

const remove = async(req,res)=>{
    const id = rq.params.id;
    const excuse = await excusesController.remove(id);
    res.json({data:excuse});
}

const verify = async(req,res)=>{
    const id = req.params.id;
    const excuse = await excusesController.verify(id);
    res.json({data:excuse});
}

export default{
    verify,
    generate,
    getAll,
    getById,
    getByProperty,
    create,
    update,
    remove
}