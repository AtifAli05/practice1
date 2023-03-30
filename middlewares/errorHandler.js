const { constants } = require("../constants");
const errorHandler = (err, req, res, next) => {
  console.log("res.statusCode",res.statusCode)
  const statusCode = res.statusCode ? res.statusCode : constants.SERVER_ERROR;
  switch (statusCode) {
    case constants.VALIDATION_ERROR:
      res.json({
        title: "Validation failed",
        message: err.message,
        stackTrace: err.stack,
      });
      console.log("validation failed");
      break;
    case constants.NOT_FOUND:
      res.json({
        title: "not found",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    case constants.FORBIDDEN:
      res.json({
        title: "you cant accessf f",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
      case constants.UNAUTHORIZED:
      res.json({
        title: "we dont know u ",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
      case constants.SERVER_ERROR:
        res.json({
          title: " Server error",
          message: err.message,
          stackTrace: err.stack,
        });
        break;
        case constants.ALEADY_EXIST:
          res.json({
            title:"Email Already Exist",
            message:err.message,
            stackTrace:err.stack
          })
    default:
        console.log("All clear");
      break;
  }
};
module.exports = errorHandler;
