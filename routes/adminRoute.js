const express = require('express');
const router = express.Router();
const { Transaction } = require('../model');

// get history transacton
router.get('/transactions', async (req, res) => {
    const transactions = await Transaction.findAll();
    res.json(transactions);
});

module.exports = router;
