import { Sequelize } from "sequelize";

const db = new Sequelize('db_notes', 'root', 'PASSWORD_BARU', {
    host: '34.122.2.50', //klo udah deploy pake ip server database
    dialect: 'mysql'
})

export default db
