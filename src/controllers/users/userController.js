import userModel from "../../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"

const getAll = async()=> {
    try {
        const users = await userModel.find();
        return users;
    } catch (error) {
        console.error(error);
        return [];
    }
}

const getById = async(id) =>{
    try {
        const user = await userModel.findById(id);
        return user;
    } catch (error) {
        console.error(error);
        return null;
        
    }
}

const getByProperty = async(property,value) =>{
    try {
        const user = await userModel.find({[property]:value})
        return user;
    } catch (error) {
        return null;
    }
}

const login = async(data)=>{
    const {email,username,password} = data;
    if((!email && !username) || !password){
        return {error:"Todos los campos son obligatorios",status:400}
    }
        try {
            let user;
            if(email){
                const users = await getByProperty("email",email);
                user = users[0];
            }
            else{
                const users = await getByProperty("username", username);
                user = users[0]
            }
            if(!user){
                return{error:"No existe el usuario",status:400};
            }
            const isPasswordCorrect = await bcrypt.comparte(password,user.password);
            if(!isPasswordCorrect){
                return {error:"Combinación de usuario y contraseña erroneos", status:400};
            }


     } catch (error) {
    console.error(error);
    return{error:"Ha habido un error", status:500};
    }
}

const register = async(data) =>{
    const {email,username,password,passwordRepeat} = data;
    if(!email || !username || !password || !passwordRepeat){
        return {error:"Todos los campos son obligatorios"};
    }
    if(password !== passwordRepeat){
        return {error:"Las contraseñas no coinciden"};
    }
    const userData = {
        email,
        username,
        password,
        role:"user"
    }
    const user = await create(userData);
    return user;
}

const create = async(data) =>{
    try {
        const user = await userModel.create(data);
        return user;
    } catch (error) {
        console.error(error); 
        return null;  
    }
}

const update = async(id,data) =>{
    try {
        const user = await userModel.findByIdAndUpdate(id,data);
        return user;
    } catch (error) {
        console.error(error);
        return null;
    }
}

const remove = async(id) =>{
    try {
        const user = await userModel.findByIdAndDelete(id);
        return user;
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
    login,
    register,
    update,
    remove
}

export default functions;