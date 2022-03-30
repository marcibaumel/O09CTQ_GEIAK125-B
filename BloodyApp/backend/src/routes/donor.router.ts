import express from 'express';
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


//DELETE A DONOR
router.delete('/:id', async (req, res, next) => {
  console.log('Delete has started with this id:' + req.body.id);
  const repository = getRepository(Donor);
  try {
    const id = req.params.id;
    const entity = await repository.findOne(id);
    if (!entity) {
      return res.status(404).json({ message: 'Entity not founded' });
    }
    await repository.delete(entity);
    res.status(200).json({ success: true });
  } catch (err) {
    console.error(err);
  }
});


//GET ALL DONOR
router.get('', (req, res, next) => {
  const repository = getRepository(Donor);
  repository.find().then((result) => {
    return res.status(200).json({
      message: 'Elementes fetched succesfull',
      elements: result,
    });
  });
});


module.exports = router;
