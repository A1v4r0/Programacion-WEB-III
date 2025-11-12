import express from "express";
import { muestraCategoria, insertaCategoria, actualizaCategoria, muestraCategoriaProd, eliminaCategoriaProd,
     insertaProducto, muestraProductoCat, muestraProductoidCat, actualizaProducto, incrementStock} from "../controladores/productoControlador.js";
        
//ALVARO CRISTIAN MELEAN HUMEREZ
const rutas = express.Router();
//ejercicio #1
rutas.post('/categorias', insertaCategoria);
//ejercicio #2
rutas.get('/categorias', muestraCategoria);
//ejercicio #3
rutas.get('/categorias/:id', muestraCategoriaProd);
//ejercicio #4
rutas.put('/categorias/:id', actualizaCategoria);
//ejercicio #5
rutas.delete('/categorias/:id', eliminaCategoriaProd);
//ejercicio #6
rutas.post('/productos', insertaProducto);
//ejercicio #7
rutas.get('/productos', muestraProductoCat);
//ejercicio #8
rutas.get('/productos/:id', muestraProductoidCat);
//ejercicio #9
rutas.put('/productos/:id', actualizaProducto);
//ejercicio #10
rutas.patch('/productos/:id/stock', incrementStock);

export default rutas;