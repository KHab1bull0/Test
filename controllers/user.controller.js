import Joi from 'joi';
import { getOneUser, createUser } from '../service/user.service.js';


export const getOne = async (req, res) => {

    try {
        const userJoi = Joi.object({
            login: Joi.string().required().min(3).max(20),
        });

        const { error, value } = userJoi.validate(req.body);

        if (error) {
            return res.status(400).send({
                res: error.details[0].message
            });
        };

        const user = await getOneUser(req.body.login)

        res.status(200).send({
            res: user
        });

    } catch (err) {
        return res.send(err);
    };
}

export const createOne = async (req, res) => {
    try {
        const userJoi = Joi.object({
            name: Joi.string().required().min(3).max(20),
            login: Joi.string().required().min(3).max(20),
            password: Joi.string().min(5).max(10),
        });

        const { error, value } = userJoi.validate(req.body);
        if (error) {
            return res.status(400).send({
                res: error.details[0].message
            });
        };

        const response = await createUser(req.body);
        response.save();

        res.status(201).send({
            res: "Created"
        });

    } catch (err) {
        return res.status(500).send({
            res: "xatolik",
            error: err
        });
    };
};