import express from 'express';
import fs from 'fs';
import path from 'path';
import mongoose from 'mongoose';

import User from '../models/user';
import Account from '../models/account';
import SavingsPlan from '../models/savingsplan';
import UserContact from '../models/usercontact';

const backup = express();

let targetPath;
let jsonData;
let jsonDataStringify;

backup.get('/triggerbackup', async (req, res) => {
    const { dtr } = req.query;

    if (dtr === 'users') {
        targetPath = path.resolve(__filename, '..', '..', '..', 'datab', 'users.json');

        fs.readFile(targetPath, 'utf8', (err, data) => {
            if (err) {
                console.error('Error reading file:', err);
                return;
            }

            try {
                // Parse the file contents as JSON
                jsonData = JSON.parse(data);
                //jsonDataStringify = JSON.stringify(jsonData, null, 2);

                jsonData.map(async info => {
                    info._id = new mongoose.Types.ObjectId(info._id);

                    const user = await User.findOneAndUpdate(
                        { _id: info._id },
                        info,
                        { upsert: true, new: true, setDefaultsOnInsert: true }
                    );

                    console.log(user);
                })
            } catch (parseError) {
                console.error('Error parsing JSON:', parseError);
            }
        });
    }
});

export default backup;