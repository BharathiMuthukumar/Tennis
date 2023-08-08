import winston, { format, createLogger } from "winston";
import "winston-daily-rotate-file";

const options: winston.LoggerOptions = {
	format: format.combine(
		format.timestamp({
			format: "YYYY-MM-DD HH:mm:ss",
		}),
		format.printf(
			(info) =>
				`${info.timestamp} ${info.level}: ${info.message}` +
				(info.splat !== undefined ? `${info.splat}` : " "),
		),
	),
	transports: [
		new winston.transports.Console({
			level: process.env.LOGGING_LEVEL || "info",
		}),
		new winston.transports.File({
			filename: "./logs/application.log",
			maxsize: 5_242_880,
			maxFiles: 100,
			tailable: true,
			zippedArchive: true,
		}),
	],
};

const logger = createLogger(options);

export default logger;