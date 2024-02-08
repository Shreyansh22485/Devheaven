import express from 'express'; 
import { input } from './../controllers/input.js';

const router = express.Router();


// router.post('/api/auth/home', (req, res) => {
//     // Handle the request here
//     // req.body will contain the form data
//   });
//router.post('/api/auth/home', input);
router.post('/home',input);

export default router;