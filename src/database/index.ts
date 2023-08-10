import { logger } from "@src/utils/default";
import mongoose from "mongoose";
mongoose.set("strictQuery", false);
mongoose
	.connect(process.env.DATABASE_CONNECTION_STRING)
	.then(() => {
		logger.info("Connected to MongoDB");
	
	})
	.catch((err: Error) => {
		logger.info(`Database: ${err.message}`);
	});
