import { Router } from 'express';
import { getAvailableFlights } from '../controllers/flights_controller.js';

const router = Router();

router.get('/search', getAvailableFlights);

export default router;