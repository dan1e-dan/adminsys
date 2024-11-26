const express = require("express");
const staff_Act = require("../controllers/staffs");
const router = express.Router();

router.get('/', staff_Act.getStaffs);
router.get('/:roll', staff_Act.getSpecStaff);
router.post('/', staff_Act.createStaffs);
router.patch('/:roll', staff_Act.updateStaff);
router.delete('/:name', staff_Act.deleteStaff);

module.exports = router;