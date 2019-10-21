'use strict';
const mongoose = require('mongoose');
const schema = mongoose.Schema;

const taskSchema = new schema({
    name: {
        type: String,
        required: 'Kindly enter the name of the task'
    },
    created_date: {
        type: Date,
        default: Date.now()
    },
    status: {
        type: [{
            type: String,
            enum: [
                'pending',
                'ongoing',
                'completed'
            ]
        }],
        default: ['pending']
    }
});

module.exports = mongoose.model('Tasks', taskSchema);