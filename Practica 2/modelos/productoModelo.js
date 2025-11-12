import {db} from '../config/db.js';

//ALVARO CRISTIAN MELEAN HUMEREZ
//Ejercicio #1
export const inserta= async(categoria)=>{
    const{nombre,descripcion}=categoria;
    const [resultado]= await db.query('INSERT INTO categorias(nombre,descripcion) VALUES(?,?)', [nombre,descripcion]);
    console.log(resultado);
    return {id: resultado.insertId, ...categoria};
};

//Ejercicio #2
export const obtTodo= async()=>{
    const[resultado]= await db.query('SELECT * FROM categorias');
    return resultado;
};

//Ejercicio #3
export const obtCatProd= async(id)=>{
    const [categoria]=await db.query('SELECT * FROM categorias WHERE id=?', [id]);
    const [productos]=await db.query('SELECT * FROM productos WHERE categoria_id=?', [id]);

    return { ...categoria, productos};
};

//Ejercicio #4
export const actualiza= async(id, categoria)=>{
    const{nombre,descripcion,fecha_alta,fecha_act}=categoria;
    await db.query('UPDATE categorias SET nombre=?, descripcion=?, fecha_alta=? ,fecha_act=? WHERE id=?', [nombre,descripcion,fecha_alta,fecha_act,id]);
    
    return {id, ...categoria};
};

//Ejercicio #5
export const eliminaCatProd= async(id)=>{
    const [categoria]=await db.query('DELETE FROM categorias WHERE id=?', [id]);
    const [productos]=await db.query('DELETE FROM productos WHERE categoria_id=?', [id]);

    return { ...categoria, productos};
};

//Ejercicio #6
export const insertaProd= async(producto)=>{
    const{nombre,precio,stock,categoria_id}=producto;
    const [resultado]= await db.query('INSERT INTO productos(nombre,precio,stock,categoria_id) VALUES(?,?,?,?)', [nombre,precio,stock,categoria_id]);
    console.log(resultado);
    return {id: resultado.insertId, ...producto};
};

//Ejercicio #7
export const obtProductoCat= async()=>{
    const[resultado]= await db.query('SELECT p.id AS producto_id, p.nombre AS producto_nombre, p.categoria_id, c.nombre AS categoria_nombre FROM productos p LEFT JOIN categorias c ON p.categoria_id = c.id');
    return resultado;
};

//Ejercicio #8
export const obtProductoidCat= async(id)=>{
    const [resultado] = await db.query('SELECT p.id AS producto_id, p.nombre AS producto_nombre, p.precio, p.stock, p.categoria_id, c.nombre AS categoria_nombre FROM productos p LEFT JOIN categorias c ON p.categoria_id = c.id WHERE p.id = ?', [id]);
    return resultado;
};

//Ejercicio #9
export const actualizaProd= async(id, producto)=>{
    const{nombre,precio,stock,categoria_id}=producto;
    await db.query('UPDATE productos SET nombre=?, precio=?, stock=?, categoria_id=? WHERE id=?', [nombre,precio,stock,categoria_id,id]);
    
    return {id, ...producto};
};

//Ejercicio #10
export const incrementoDecre= async(id, producto)=>{
    const{stock}=producto;
    await db.query('UPDATE productos SET stock = stock + ? WHERE id =?', [stock,id]);
    
    return {id, ...producto};
};