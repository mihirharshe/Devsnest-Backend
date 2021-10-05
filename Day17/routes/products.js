const express = require("express");

const product = require("../models/product");
const { Op } = require("sequelize");

const router = express.Router();

router.get('/', async (req,res) => {
    try {
        const query = req.query;
        const count = parseInt(query.count) || 10;
        const page = parseInt(query.page) || 1;
        const after = parseInt(query.after);
        let sql = {};
        if (after) {
            sql = {
                where: {
                    id: {
                        [Op.gt]: after
                    }
                }
            }
        }
        else {
            sql = {
                offset: count * (page - 1)
            }
        }

        const products = await product.findAll({
            ...sql,
            attributes: ["id", "title", "price", "description", "image"],
            limit: count,
        })
        
        res.status(200).send({
            count: products.length,
            items: products
        })
    }
    catch (err) {
        console.log(err)
        res.status(400).send({
            error: true,
            message: "Unable to process your request",
        })
    }
})

module.exports = router;
