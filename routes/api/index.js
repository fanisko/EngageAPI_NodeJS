var express = require('express');
var router = express.Router();
var engage = require('fanisko-engage-api')

/**
 * Getting Content
 */
router.post('/get_content',  async  function(req, res, next) {
  var content =  await engage.get_content(req.body["api_key"], req.body["secret_key"])
  res.status(200).json({ "result": content })
});

/**
 * Getting Content with Id
 */
router.post('/get_content_by_id', async function(req, res, next) {
  var content = await engage.get_content_by_id(req.body["api_key"], req.body["secret_key"])
  res.status(200).json({ "result": content })
});

module.exports = router;
