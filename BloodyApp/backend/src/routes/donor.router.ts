import express from 'express';
import { async } from 'rxjs';
import { getRepository } from 'typeorm';
import { Donor } from '../entity/Donor';

const router = express.Router();

//TEST DONOR ROUTER
router.get('/test', (req, res, next) => {
  return res.status(200).json({
    message: 'Donor router working',
  });
});

//TODO:CREATE A NEW DONOR

//TODO:DELETE A DONOR

//TODO:GET ALL DONOR

module.exports = router;
