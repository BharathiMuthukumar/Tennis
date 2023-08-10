
import express from 'express';
const app = express();
import dotenv from 'dotenv';
dotenv.config();
import path from "path";
import http from "http";
import compression from "compression";
import bodyParser from "body-parser";
import middlewares from "@middlewares";
import expressErrorHandler from "./middlewares/expresserrorhandler";

import appOpenApiDocs from "@src/docs/app/openapi.json";    
import { logger } from "@src/utils/default";
import swaggerUi from "swagger-ui-express";
import * as eov from "express-openapi-validator";
import appApiRouter from "@src/controllers/app";
app.use(express.json());

import "./database";
class Application {
	private app: express.Application;
	private server: http.Server;

	private currentApp: string;
	private isApp: boolean = false;

	constructor(currentApp: string) {
		this.app = express();
		this.server = http.createServer(this.app);

		this.currentApp = currentApp;
		const apps = currentApp.split(",");
		this.isApp = apps.includes("app");

		this.initialize();
	}

	private initialize() {
		try {
			this.initializeMiddlewares();
			this.initializeStaticContents();
			this.initializeOpenApiDocs();
			this.initializeControllers();
		} catch (error) {
			logger.error(error);
			throw error;
		}
	}

	private initializeMiddlewares() {
		// encoding url parameters
		this.app.use(
			express.urlencoded({
				extended: true,
				limit: "1mb",
			}),
		);
		// body parser
		this.app.use(
			bodyParser.json({
				verify: (req, res, buf) => {
					(<any>req).rawBody = buf;
				},
			}),
		);

		// setting cors headers
		this.app.use(middlewares.cors());

		// compress the response payload to maximize performance
		this.app.use(compression());
	}

	private initializeStaticContents() {
		// serving static contents
		this.app.use(
			"/public",
			express.static(path.join(__dirname, "..", "public"), {
				maxAge: 31557600000,
			}),
		);
	}

	private initializeOpenApiDocs() {
		if (this.isApp) {
			this.initializeOpenApiValidator("app", appOpenApiDocs);
		}
		
	}

	private initializeOpenApiValidator(appName: string, openApiDocs: any) {
		const openApiDocPath = `/docs/${appName}/openapi.json`;

		this.app.get(openApiDocPath, (req, res) => {
			res.json(openApiDocs);
		});

		const options = {
			explorer: true,
			swaggerOptions: {
				urls: [
					{
						url: openApiDocPath,
						name: "API Ver. 1",
					},
				],
			},
		};
		this.app.use(
			`/${appName}/api-docs`,
			swaggerUi.serveFiles(openApiDocs, options),
			swaggerUi.setup(openApiDocs, options),
		);

		this.app.use(
			`/${appName}`,
			eov.middleware({
				apiSpec: path.join(__dirname, openApiDocPath),
				validateRequests: {
					removeAdditional: true,
				},
				validateResponses: {
					removeAdditional: true,
				},
			}),
		);
	}

	private initializeControllers() {
		if (this.isApp) {
			this.app.use("/app", appApiRouter);
		}
		
		this.app.use(expressErrorHandler);
	}

	public listen(port: number) {
		this.server.listen(port, () => {
			logger.info(`${this.currentApp} Server listening at port ${port}`);
		});
	}
}
export default Application;