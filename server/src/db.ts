//colocar conexion a la base de datos

import mysql from 'promise-mysql';
import keys from './keys';

const pool =  mysql.createPool(keys.database);

pool.getConnection()
    .then((connection: any) => {
        pool.releaseConnection(connection);
        console.log('DB is connected');
    });
export default pool;