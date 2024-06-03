
const { Wallet, Transaction } = require('../model');

let walletInstance;

//find wallettttt
const getWallet = async () => {
    if (!walletInstance) {
        walletInstance = await Wallet.findOne();
        if (!walletInstance) {
            walletInstance = await Wallet.create({ balance: 0 });
        }
    }
    return walletInstance;
};

//update value walleetttt
const updateWallet = async (amount, operation) => {
    const wallet = await getWallet();
    const amountInt = parseInt(amount)
    let transactionStatus = 0;
    try {
        if (operation === 'deposit') {
            wallet.balance += amountInt;
            transactionStatus = 1; // Deposit success
        } else if (operation === 'withdraw' && wallet.balance >= amountInt) {
            wallet.balance -= amountInt;
            transactionStatus = 1; // Withdrawal success
        } else {
            transactionStatus = 2; // Withdrawal errorr
            
        }

        // Record transaction history
        await Transaction.create({
            amount: amount,
            status: transactionStatus
        });

         // Save wallet changes
         await wallet.save();

        return wallet.balance;
    } catch (error) {
        throw new Error('Insufficient balance');
    }
};

module.exports = {
    updateWallet
};
