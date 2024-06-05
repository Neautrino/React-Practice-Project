import express from 'express';
import  { addForm, getAllForms }  from '../controllers/form.controller.js';

const router = express.Router();

router.get('/bulk', getAllForms)

router.post('/add', addForm)

export default router;