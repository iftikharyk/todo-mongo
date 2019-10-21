'use strict';

const mongoose = require('mongoose');

const task = mongoose.model('Tasks');

exports.list_all_tasks = function(req, res) {
    task.find({}, function(err, task) {
        if(err){
            res.send(err);
        } else {
            res.json(task);
        }
    });
};

exports.create_a_task = function(req, res) {
    const new_task = new task(req.body);
    new_task.save(function(err, task) {
        if(err) {
            res.send(err);
        } else {
            res.json(task);
        }
    });
}

exports.read_a_task = function(req, res) {
    task.findById(req.params.taskId, function(err, task) {
        if(err) {
            res.send(err);
        } else {
            res.json(task);
        }
    });
}

exports.not_found = function(req, res) {
    res.status(404).send({"data":"page not found"})
}

exports.update_a_task = function(req, res) {
    task.findOneAndUpdate({_id: req.params.taskId}, req.body, {new: true, useFindAndModify: false}, function(err, task) {
        if (err) {
            res.send(err);
        } else {
            res.json(task);
        }
    });
}

exports.delete_a_task = function(req, res) {
    task.remove({_id: req.params.taskId}, function(err, task) {
        if(err) {
            res.send(err);
        } else {
            res.json({
                message: 'Task successfully deleted'
            })
        }
    })
}