import express from 'express';
import { async } from 'rxjs';
import { getRepository } from 'typeorm';
import { Donation } from '../entity/Donation';

const router = express.Router();

//TEST DONATION ROUTER
router.get('/test', (req, res, next) => {
  return res.status(200).json({
    message: 'Donation router working',
  });
});

//TODO:Create donation


//Get all donation
router.get('', (req, res, next) => {
  const repository = getRepository(Donation);
  repository.find().then((result) => {
    return res.status(200).json({
      message: 'Elementes fetched succesfull',
      elements: result,
    });
  });
});


//TODO:Delete donation


module.exports = router;
