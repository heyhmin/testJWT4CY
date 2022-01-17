import {Sequelize} from "sequelize";

const db = new Sequelize('auth_db','root','passwd',{
    host: "localhost",
    dialect: "mysql"
});

export default db;
