import mysql from "mysql2/promise";

//creating connection
const db=await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "#########",
    database: "mysql_db"
})


console.log("MYSQL connection successfull");
//1. create database
// await db.execute(`create database mysql_db`);

//2. create table
// await db.execute(`
//     CREATE TABLE users(
//         id INT AUTO_INCREMENT PRIMARY KEY,
//         username VARCHAR(100) NOT NULL,
//         email VARCHAR(100) NOT NULL
//     );
// `)

//3. insert value
// using inline value not recommended
// await db.execute(`
//     insert into users(username,email) values('goat','goat@example.com')
// `);

// using prepared statement recommended
// await db.execute(`insert into users(username,email) values(?,?)`,[
//     "cat",
//     "cat@example.com"
// ]);
// const values = [
//   ["Alice", "alice@example.com"],
//   ["Bob", "bob@example.com"],
//   ["Charlie", "charlie@example.com"],
//   ["David", "david@example.com"],
//   ["Emma", "emma@example.com"],
// ];

// await db.query("insert into users(username,email) values ?",[values]);

// 4. update data
// try{
//     const[rows]=await db.execute(
//         "update users set username='dog' where email='cat@example.com'"
//     )
//     console.log("All users:",rows)
// }
// catch(error){
//     console.log(error);
// }

// try{
//     const[rows]=await db.execute(
//         "update users set email=? where username=?",
//         ["dog@example.com","dog"]
//     )
//     console.log("All users:",rows)
// }
// catch(error){
//     console.log(error);
// }

// 5. delete data
// try{
//     const[rows]=await db.execute(
//         "delete from users where email='bob@example.com'"
//     )
//     console.log("All users:",rows)
// }
// catch(error){
//     console.log(error);
// }
// try{
//     const [rows]=await db.execute(
//         "delete from users where email=?",["charlie@example.com"]
//     );
//     console.log("All Users: ",rows);
// }
// catch(error){
//     console.error(error)
// }

// 6. read data
const [rows]= await db.execute('select * from users');
console.log(rows);
