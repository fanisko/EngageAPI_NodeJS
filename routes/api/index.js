var express = require('express');
var router = express.Router();
var engage = require('fanisko-engage-api');

var API_KEY = "YOUR_API_KEY"
var SECRET_KEY = "YOUR_SECRET_KEY"


/**
 * Getting Content
 */
router.post('/get_content',  async  function(req, res, next) {
  var content =  await engage.get_content(API_KEY, SECRET_KEY)
  res.status(200).json({ "result": content })
});

/**
 * Getting Content by Id
 */
router.post('/get_content_by_id', async function(req, res, next) {
  var content = await engage.get_content_by_id(API_KEY, SECRET_KEY)
  res.status(200).json({ "result": content })
});

/**
 * Getting Content by Pageno
 */
router.post('/get_content_by_page', async function(req, res, next) {
  var content = await engage.get_content_by_id(API_KEY, SECRET_KEY,req.body.pageno)
  res.status(200).json({ "result": content })
});

module.exports = router;
