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

//CREATE A NEW DONOR
router.post('', (req, res, next) => {
  const repository = getRepository(Donor);
  const donorEntity = repository.create({
    name: req.body.name,
    sex: req.body.sex,
    nationality: req.body.nationality,
    birth_place: req.body.birth_place,
    birth_time: req.body.birth_time,
    postcode: req.body.postcode,
    town: req.body.town,
    address: req.body.address,
    taj_code: req.body.taj_code
  });

  repository
    .save(donorEntity)
    .then((result) => {
      res.status(201).json({
        messager: 'Donor created',
        result: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
        message: 'Something wrong with the donor create',
      });
    });
});


//TODO:DELETE A DONOR

//TODO:GET ALL DONOR

module.exports = router;
