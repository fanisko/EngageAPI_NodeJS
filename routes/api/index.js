var express = require('express');
var router = express.Router();
var engage = require('fanisko-engage-api-test-prabhat')


router.post('/get_content',  async  function(req, res, next) {
  var content =  await engage.get_content(req.body["api_key"], req.body["secret_key"])

  res.status(200).json({ "result": content })
});

router.post('/get_content_by_id', async function(req, res, next) {
  var content = await engage.get_content_by_id(req.body["api_key"], req.body["secret_key"])
  res.status(200).json({ "result": content })
});

router.post('/post_content', async function(req, res, next) {
  var xxx = await engage.post_content(req.body["api_key"], req.body["secret_key"],req.body['json'])
  res.status(200).json({ "result": xxx })
});

router.post('/delete_content', async function(req, res, next) {
  var xxx = await engage.delete_content(req.body["api_key"], req.body["secret_key"])
  res.status(200).json({ "result": xxx })
});




module.exports = router;
