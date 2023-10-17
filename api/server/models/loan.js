const mongoose = require('mongoose');
const { Schema } = mongoose;

const loanSchema = new Schema({
    foruser: {
        type: String,
        default: null //use this to show the particular loan to one user
    },
    name: {
        type: String,
        required: true,
        unique: true
    },
    requirement: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    requirements: {
        type: Array,
        default: []
    },
    minimumaccountbalance: {
        type: Number,
        default: 5000
    },
    percentagepayment: {
        type: Number,
        default: 0.5
    },
    minimumdeposit: {
        type: Number,
        default: 1000
    }
});

loanSchema.statics.createloanitem = async function ({
    foruser,
    name,
    minimumaccountbalance,
    percentagepayment,
    description,
    requirement,
    requirements }) {

    return new Promise(async (resolve, reject) => {
        try {
            const LoanItem = this;
            const newloan = new LoanItem({
                foruser,
                name,
                minimumaccountbalance,
                percentagepayment,
                description,
                requirement,
                requirements
            });

            await newloan.save();
            resolve({ message: 'success', type: 'item created', content: newloan });
        } catch (error) {
            reject({ message: 'error', type: 'item creation', reason: error });
        }
    })
}

loanSchema.statics.getloans = async function () {
    return new Promise(async (resolve, reject) => {
        try {  
            const LoanItems = this;
            const loans = await LoanItems.find();

            resolve({ message: 'success', type: 'loans retrieval', content: loans });

        } catch (error) {
            reject({ message: 'error', type: 'loans retrieval', reason: error });
        }
    })
}

const Loan = mongoose.model('Loan', loanSchema);

module.exports = Loan;