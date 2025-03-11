import { Sequelize } from "sequelize";

const db = new Sequelize('db_notes', 'root', '', {
    host: '34.122.2.50', //klo udah deploy pake ip server database
    dialect: 'mysql'
})

export default db
