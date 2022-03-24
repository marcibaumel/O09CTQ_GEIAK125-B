import express from 'express'
import {Doctor} from '../entity/Doctor'

const router = express.Router();
//const userRepository = MyDataSource.getRepository(Doctor)

//TEST THE ROUTE
router.get("/test", (req, res, next) => {
  return res.status(200).json({
    message: "Doctor router working"
  })
})

router.post("", (req, res, next)=>{
  const doctor = new Doctor();



  doctor.email = "test"
  doctor.last_name = "test"
  doctor.first_name = "test0"
  doctor.password = "test00"

  doctor.save();
})



module.exports = router;
