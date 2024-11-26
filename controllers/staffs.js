const Staff= require('../model/staffsdata');
const getStaffs = async (req, res) => {
    try {
        // const staffs = await Staff.find();
        const staffs = await Staff.find();
        res.status(200).json(staffs);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
const getSpecStaff = async (req, res) => {
    const roll = req.params.roll;
    try {
        const staff = await Staff.findOne({ roll: roll });
        res.status(200).json(staff);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
const createStaffs = async (req, res) => {
    const staff = req.body;
    const newStaff = new Staff (staff);
    try {
        await newStaff.save()
        res.status(200).json(newStaff);
        } catch (error) {
    res.status(400).json({message:error.message});
}
}

const updateStaff = async (req, res) => {
    const roll = req.params.roll;
    try {
        const updatedStaff = await Staff.findOneAndUpdate({ roll: roll }, req.body, { new: true });
        res.status(200).json(updatedStaff);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}
const deleteStaff = async (req, res) => {
    const name = req.params.name;
    try {
        await Staff.findOneAndDelete({ name: name });
        res.status(204).json({ message: "Staff deleted successfully" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}
module.exports={getStaffs,getSpecStaff, updateStaff, deleteStaff, createStaffs}