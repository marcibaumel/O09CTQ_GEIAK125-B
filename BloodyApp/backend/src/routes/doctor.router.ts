import express from 'express';
import { async } from 'rxjs';
import { getRepository } from 'typeorm';
import { Doctor } from '../entity/Doctor';

const router = express.Router();
const bcrypt = require('bcrypt');

//TEST THE ROUTE
router.get('/test', (req, res, next) => {
  return res.status(200).json({
    message: 'Doctor router working',
  });
});

//CREATE A NEW DOCTOR
router.post('/signup', async (req, res, next) => {
  const repository = getRepository(Doctor);

  bcrypt.hash(req.body.password, 10).then((hash: any) => {
    const doctorEntity = repository.create({
      email: 'test',
      first_name: 'test',
      last_name: 'test',
      password: hash,
    });
    repository
      .save(doctorEntity)
      .then((result) => {
        res.status(201).json({
          messager: 'Doctor created',
          result: result,
        });
      })
      .catch((err) => {
        res.status(500).json({
          error: err,
          message: 'Something wrong with the doctror create',
        });
      });
  });
});

//LOGIN A DOCTOR


//DELETE A DOCTOR
router.delete('/:id', async (req, res, next) => {
  console.log('Delete has started with this id:' + req.body.id);
  const repository = getRepository(Doctor);

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

module.exports = router;
