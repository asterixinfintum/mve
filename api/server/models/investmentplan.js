const mongoose = require('mongoose');
const { Schema } = mongoose;

const investmentplanSchema = new Schema({
    foruser: {
        type: String,
        default: null //use this to show the particular loan to one user
    },
    name: {
        type: String,
        required: true
    },
    minimumbalanceallowed: {
        type: Number
    },
    description: {
        type: String,
        required: true,
    },
    requirements: [],
    returnpercentage: {
        type: Number,
        default: 0.5
    },
    minimumdeposit: {
        type: Number,
        default: 1000
    },
    durationofinvestment: {
        duration: {
            type: Number,
            required: true
        },
        unit: {
            type: String
        }
    },
});

investmentplanSchema.statics.createinvestmentplan = async function (investementbody) {

    return new Promise(async (resolve, reject) => {
        try {
            const InvestmentItem = this;

            const newinvestmemtitem = new InvestmentItem(investementbody);

            await newinvestmemtitem.save();
            resolve({ message: 'success', type: 'item created', content: newinvestmemtitem });
        } catch (error) {
            console.log(error)
            reject({ message: 'error', type: 'item creation', reason: error });
        }
    })
}

investmentplanSchema.statics.getinvestmentplans = async function () {
    return new Promise(async (resolve, reject) => {
        try {
            const InvestmentItem = this;
            const investmentitems = await InvestmentItem.find();

            resolve({ message: 'success', type: 'loans retrieval', content: investmentitems });
        } catch (error) {
            reject({ message: 'error', type: 'loans retrieval', reason: error });
        }
    })
}

const InvestmentPlan = mongoose.model('InvestmentPlan', investmentplanSchema);

module.exports = InvestmentPlan;