import excuseModel from "../../models/excuseModel.js";

const generate = async()=>{
    const intros = await getByProperty("type","introduccion")
    const intro = chooseRandom(intros)

    const sujs = await getByProperty("type","sujeto")
    const suj = chooseRandom(sujs)

    const verbs = await getByProperty("type","verbo")
    const verb = chooseRandom(verbs)

    const objts = await getByProperty("type","objeto")
    const objt = chooseRandom(objts)

    const justs = await getByProperty("type","justificacion")
    const just = chooseRandom(justs)

    const excuse = `${intro.text} ${suj.text} ${verb.text} ${objt.text} ${just.text}`;
    return excuse
}

const chooseRandom = (array) =>{
    const randomNumber = Math.floor(Math.random() * array.length)
    const randomElement = array[randomNumber]
    return randomElement
}

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
    generate,
    getAll,
    getById,
    getByProperty,
    create,
    update,
    remove
}

export default functions;