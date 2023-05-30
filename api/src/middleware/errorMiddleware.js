/* ROUTE NOT FOUND */

const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error); /* next piece of middleware */
};

/* FOR HANDLING ERRORS */

const errorHandler = (err, req, res, next) => {
  /* if the status code is 200 change it to 500 */
  /* if we are throwing an error we don't want it to be 200 */
  let statusCode = res.statusCode === 200 ? 500 : res.statusCode;

  /* the message */
  let message = err.message;

  /* for mongoose, cast error */
  /* basically if you try to get an user with an objectID that doesn't exist, it will throw you this error */

  if (error.name === "CastError" && err.kind === "ObjectId") {
    statusCode = 404;
    message = "Resource not found";
  }

  /* whatever the error is and what I want to look it like */
  res.status(statusCode).json({
    message: message,
    /* it will be helpful for you to show you the line numbers and stuffs */
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};

export { notFound, errorHandler };
