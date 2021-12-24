const express = require("express");
// const { check, oneOf, validationResult } = require("express-validator");

// goi controller xu ly router homepage

const { apply } = require(__pathControllers + "applyController");

let router = express.Router();

module.exports = () => {
    router.get("/", (req, res, next) => res.send("home"));
    router.post("/apply", (req, res, next) => apply(req, res, next));
    // login and register

    // router.get(
    //     '/logout',
    //     (req, res, next) => { registerController.getLogout(req, res, next) }
    // );
    // router.post(
    //     '/login',
    //     passport_func.auth,
    //     (req, res, next) => { registerController.postLogin(req, res, next) }
    // );
    // router.post(
    //     '/register',
    //     (req, res, next) => { registerController.postRegister(req, res, next) }
    // );
    // router.get(
    //     '/confirm/:id',
    //     (req, res, next) => { registerController.confirm(req, res, next) }
    // );
    // router.get(
    //     '/del/:username',
    //     (req, res, next) => { registerController.del(req, res, next) }
    // );
    // END login and register

    // đang viết theo chuẩn rest api
    // lấy thông tin dùng action get
    // tạo thông tin dùng action post
    // xóa thông tin dùng action delete
    // update thông tin dùng action push

    // passport_func.Use;
    // passport_func.serialize;
    // passport_func.deserialize;
    return router;
};
