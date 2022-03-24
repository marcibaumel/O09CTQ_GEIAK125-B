import express from 'express';
import { async } from 'rxjs';
import { getRepository } from 'typeorm';
import { DonationPlace } from '../entity/DonationPlace';

const router = express.Router();

//TEST DONATION PLACE ROUTER
router.get('/test', (req, res, next) => {
  return res.status(200).json({
    message: 'Donation place router working',
  });
});

//TODO:CREATE A NEW DONATION PLACE
router.post('', (req,res,next)=>{
  const repository = getRepository(DonationPlace);
  repository.create({
    name:  req.body.name,
    postcode:  req.body.postcode,
    town: req.body.town,
    address: req.body.address,
    active: req.body.active
  })
})

//TODO:DELETE A DONATION (by id)

//TODO:SET STATUS (PUT) by id

//TODO:GET ALL PLACE

module.exports = router;
