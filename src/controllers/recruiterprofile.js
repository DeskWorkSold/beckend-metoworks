const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const {
    jobService
}  = require('../services');

const post = catchAsync(async (req, res) => {
  const job = await jobService.createJob(req.body);
  res.status(httpStatus.CREATED).send({ job });
});

module.exports = {post}