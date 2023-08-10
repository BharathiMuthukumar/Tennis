import "./tracer";
import Application from "./app";

export const app = new Application(process.env.CURRENT_APP);
app.listen(parseInt(process.env.SERVER_PORT));
