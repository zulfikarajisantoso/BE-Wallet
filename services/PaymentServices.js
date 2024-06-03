const axios = require('axios');

const deposit = async (orderId, amount, timestamp) => {
    
    const fullName = 'Full Name';
    const token = Buffer.from(fullName).toString('base64');

    //as if success 
    if (process.env.NODE_ENV === 'development') {
        return {
            order_id: orderId,
            amount: amount.toFixed(2),
            status: 1 // success as 1
        };
    }
    
    
    const response = await axios.post('https://thirdparty.com/deposit', {
        order_id: orderId,
        amount: amount,
        timestamp: timestamp
    }, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });

    return response.data;


};

module.exports = {
    deposit
};
