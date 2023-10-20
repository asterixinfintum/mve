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
    description: {
        type: String,
        required: true,
    },
    maximumamountallowed: {
        type: Number
    },
    minimumbalanceallowed: {
        type: Number
    },
    requirements: [],
    interestRate: {
        type: Number,
        required: true,
        default: 0.05
    },
    term: {
        duration: {
            type: Number,
            required: true
        },
        unit: {
            type: String
        }
    },
});

loanSchema.statics.createloanitem = async function (loanbody) {

    return new Promise(async (resolve, reject) => {
        try {
            const LoanItem = this;
            const newloanitem = new LoanItem(loanbody);

            await newloanitem.save();
            resolve({ message: 'success', type: 'item created', content: newloanitem });
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