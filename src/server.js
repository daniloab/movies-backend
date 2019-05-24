import "@babel/polyfill";
import { createServer } from 'http'

import app from './graphql/app'

(async () => {
    const server = createServer(app.callback())

    server.listen(process.env.GRAPHQL_PORT, () => {        
        console.log(`App running and listening on port ${process.env.GRAPHQL_PORT} ...`);
        console.log(`GraphQL Server is now running on http://localhost:${process.env.GRAPHQL_PORT}/graphql`);
    })
})()