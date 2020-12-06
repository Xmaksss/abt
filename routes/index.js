let express = require('express');
let router = express.Router();
let {Record} = require('../models/record');

router.get('/', async function(req, res, next) {
  return res.json({
    data: await Record.find().sort({ createdAt: -1 })
  })
});

router.post('/', async function(req, res, next) {
  const {siteId, name, type, value, context} = req.body;

  const record = new Record({siteId, name, type, value, context});

  return res.json({
    status: await record.save()
  })
});

module.exports = router;
