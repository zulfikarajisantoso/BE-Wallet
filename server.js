require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const paymentRoutes = require('./routes/paymentRoute');
const walletRoutes = require('./routes/walletRoute');
const adminRoutes = require('./routes/adminRoute');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());
app.use('/api', paymentRoutes);
app.use('/api', walletRoutes);
app.use('/api/admin', adminRoutes);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
