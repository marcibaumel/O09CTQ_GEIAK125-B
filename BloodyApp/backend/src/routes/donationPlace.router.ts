import express from 'express';
import { async } from 'rxjs';
import { getRepository } from 'typeorm';


const router = express.Router();

//TEST DONATION PLACE ROUTER
router.get('/test', (req, res, next) => {
  return res.status(200).json({
    message: 'Donation place router working',
  });
});


module.exports = router;
