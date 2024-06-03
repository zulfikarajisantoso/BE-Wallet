const express = require('express');
const router = express.Router();
const paymentService = require('../services/PaymentServices');

//depo to third party
router.post('/deposit', async (req, res) => {
    const order_id = '12345';
    const amount = 5000.00;
    const timestamp = new Date().toISOString();
    // const { order_id, amount, timestamp } = req.body;
    try {
        const result = await paymentService.deposit(order_id, amount, timestamp);
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
