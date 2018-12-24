
import * as Sequelize from 'sequelize';
import {sequelize} from '../sql/db_connection'

export const ArticleModel = sequelize.define("t_article",{
    id:{
        type:Sequelize.STRING,
        primaryKey:true
    },
    summary:Sequelize.STRING,
    content:Sequelize.STRING,
    view:Sequelize.STRING,
    createdAt: Sequelize.DATEONLY,
    updatedAt: Sequelize.DATEONLY,
},
{
    timestamps: true
})

ArticleModel.sync({force: true})