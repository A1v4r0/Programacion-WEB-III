import { obtTodo, inserta, actualiza, obtCatProd, eliminaCatProd, insertaProd, 
    obtProductoCat, obtProductoidCat, actualizaProd, incrementoDecre} from "../modelos/productoModelo.js";
    
//ALVARO CRISTIAN MELEAN HUMEREZ
//Ejercicio #1
export const insertaCategoria= async (req,res)=>{
    try{
        const resultado=await inserta(req.body);
        res.status(201).json(resultado);
    }catch(error){
        res.status(500).json({ error: error.message});
    }
};

//Ejercicio #2
export const muestraCategoria= async (req,res)=>{
    try{
        const resultado=await obtTodo();
        res.json(resultado);
    }catch(error){
        res.status(500).json({ error: error.message});
    }
};

//Ejercicio #3
export const muestraCategoriaProd= async (req,res)=>{
    try{
        const resultado=await obtCatProd(req.params.id, req.body);
        res.json(resultado);
    }catch(error){
        res.status(500).json({ error: error.message});
    }
};

//Ejercicio #4
export const actualizaCategoria= async (req,res)=>{
    try{
        const resultado=await actualiza(req.params.id, req.body);
        res.json(resultado);
    }catch(error){
        res.status(500).json({ error: error.message});
    }
};

//Ejercicio #5
export const eliminaCategoriaProd= async (req,res)=>{
    try{
        await eliminaCatProd(req.params.id);
        res.json({message: 'Categoria y productos eliminados correctamente'});
    }catch(error){
        res.status(500).json({ error: error.message});
    }
};

//Ejercicio #6
export const insertaProducto= async (req,res)=>{
    try{
        const resultado=await insertaProd(req.body);
        res.status(201).json(resultado);
    }catch(error){
        res.status(500).json({ error: error.message});
    }
};

//Ejercicio #7
export const muestraProductoCat= async (req,res)=>{
    try{
        const resultado=await obtProductoCat();
        res.json(resultado);
    }catch(error){
        res.status(500).json({ error: error.message});
    }
};

//Ejercicio #8
export const muestraProductoidCat= async (req,res)=>{
    try{
        const resultado=await obtProductoidCat(req.params.id, req.body);
        res.json(resultado);
    }catch(error){
        res.status(500).json({ error: error.message});
    }
};

//Ejercicio #9
export const actualizaProducto= async (req,res)=>{
    try{
        const resultado=await actualizaProd(req.params.id, req.body);
        res.json(resultado);
    }catch(error){
        res.status(500).json({ error: error.message});
    }
};

//Ejercicio #10
export const incrementStock= async (req,res)=>{
    try{
        const resultado=await incrementoDecre(req.params.id, req.body);
        res.json(resultado);
    }catch(error){
        res.status(500).json({ error: error.message});
    }
};