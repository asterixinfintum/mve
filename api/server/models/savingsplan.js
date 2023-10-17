const mongoose = require('mongoose');
const { Schema } = mongoose;

const savingsplanSchema = new Schema({
    foruser: {
        type: String,
        default: null //use this to show the particular loan to one user
    },
    name: {
        type: String,
        required: true
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
    minimumdeposit: {
        type: Number,
        default: 1000
    }
});

savingsplanSchema.statics.createsavingsitem = async function ({
    foruser,
    name,
    minimumaccountbalance,
    minimumdeposit,
    description,
    requirement,
    requirements
}) {

    return new Promise(async (resolve, reject) => {
        try {
            const Savingsplan = this;
            const newsavingsitem = new Savingsplan({
                foruser,
                name,
                minimumaccountbalance,
                minimumdeposit,
                description,
                requirement,
                requirements
            });

            await newsavingsitem.save();
            resolve({ message: 'success', type: 'item created', content: newsavingsitem });

        } catch (error) {
            console.log(error)
            reject({ message: 'error', type: 'item creation', reason: error });
        }
    })
}

const SavingsPlan = mongoose.model('SavingsPlan', savingsplanSchema);

module.exports = SavingsPlan;