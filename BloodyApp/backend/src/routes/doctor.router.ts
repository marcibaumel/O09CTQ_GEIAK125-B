import express from 'express';
import { getConnectionManager, getRepository } from 'typeorm';
import { Doctor } from '../entity/Doctor';

const router = express.Router();

//TEST THE ROUTE
router.get('/test', (req, res, next) => {
  return res.status(200).json({
    message: 'Doctor router working',
  });
});

router.post('', async (req, res, next) => {
  const repository = getRepository(Doctor);
  const doctorEntity = repository.create(req.body);

  try {
    const entityAdded = await repository.save(doctorEntity);
    res.status(200).json({ message: entityAdded });
  } catch (err) {
    console.error(err);
  }
});

router.delete('/:id', (req, res, next) => {
  console.log('Delete has started with this id:' + req.body.id);
  //const entity = Doctor.findOneById(req.body.id);

  /*
  return res.status(201).json({
    message: entity
  })
  */
});

module.exports = router;
