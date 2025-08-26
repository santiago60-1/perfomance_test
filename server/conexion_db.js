import mysql from "mysql2/promise"

//connection database mysql

export const pool = mysql.createPool({
    host: "localhost",                              // Database server address (e.g., 'localhost', '127.0.0.1', or server IP/domain)
    user: "root",                                   // Database user (e.g. 'postgres')
    password: "Qwe.123*",                           // Database user password
    database: "bd_agrovida",                        // Database name
    port: 3306,                                     // Port the database is listening on (e.g., 3306)
    connectionLimit: 10,                            // Maximum number of clients in the pool.
    waitForConnections: true,                       // Always wait until there is a connection available
    queueLimit: 0,                                  // Maximum number of pending requests (0 = no limit)
});


async function testConnectionMysql() {
    try {
        const connection = await pool.getConnection();
        console.log('✅ Conexión a la base de datos exitosa');
        connection.release();
    } catch (error) {
        console.error('❌ Error al conectar con la base de datos:', error.message);
    }
}
testConnectionMysql();