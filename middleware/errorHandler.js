const { constants } = require("../constants");

const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
  let message = "Unknown Application Error";
  switch (statusCode) {
    case constants.BAD_REQUEST:
      message = "Bad Request";
      break;
    case constants.NOT_FOUND:
      message = "Not Found";
      break;
    case constants.FORBIDDEN:
      message = "Forbidden";
      break;
    case constants.UNAUTHORIZED:
      message = "Unauthorized";
      break;
    case constants.INTERNAL_SERVER_ERROR:
      message = "Internal Server Error";
      break;
    default:
      message = "Unknown Application Error";
      break;
  }

  res.json({
    message,
    statusCode,
    error: err.message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};

module.exports = errorHandler;
