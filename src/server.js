import "@babel/polyfill";
import { createServer } from 'http'

import app from './graphql/app'

(async () => {
    const server = createServer(app.callback())

    server.listen(process.env.GRAPHQL_PORT, () => {        
        console.log(`App running and listening on ${process.env.URL} ...`);
    })
})()