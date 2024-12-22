import winston from "winston";

// configure a winston logger
const logger = winston.createLogger({
  level: 'info',  // default log level to info
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.printf(({ timestamp, level, message, stack }) => {
      return `${timestamp} [${level}]: ${message}${stack ? `\nStack Trace: ${stack}` : ''}`;
    })
  ),
  transports: [
    // print logs to the console
    new winston.transports.Console({ format: winston.format.combine(winston.format.colorize(), winston.format.simple()) }),

    // log into a file as well
    new winston.transports.File({ filename: 'app.log', level: 'info' })
  ],
});

export default logger;