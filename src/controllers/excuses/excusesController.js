import excuseModel from "../../models/excuseModel.js";
//import userController from "./userController.js"

const getAll = async()=> {
    try {
        const excuses = await excuseModel.find();
        return excuses;
    } catch (error) {
        console.error(error);
        return [];
    }
}
const getById = async(id) =>{
    try {
        const excuse = await excuseModel.findById(id);
        return excuse;
    } catch (error) {
        console.error(error);
        return null;
        
    }
}
const getByProperty = async(property,value) =>{
    try {
        const excuse = await excuseModel.find({[property]:value})
        return excuse;
    } catch (error) {
        return null;
    }
}
const create = async(data) =>{
    try {
        const excuse = await excuseModel.create(data);
        return excuse;
    } catch (error) {
        console.error(error); 
        return null;  
    }
}

const update = async(id,data) =>{
    try {
        const excuse = await excuseModel.findByIdAndUpdate(id,data);
        return excuse;
    } catch (error) {
        console.error(error);
        return null;
    }
}

const remove = async(id) =>{
    try {
        const excuse = await excuseModel.findByIdAndDelete(id);
        return excuse;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export const functions = {
    getAll,
    getById,
    getByProperty,
    create,
    update,
    remove
}

export default functions;