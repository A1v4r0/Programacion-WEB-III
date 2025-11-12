import  mysql2 from "mysql2/promise";

//ALVARO CRISTIAN MELEAN HUMEREZ
export const db=mysql2.createPool({
    host:'localhost',
    user:'root',
    password:'',
    database: 'bd_umsa'
});