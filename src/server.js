import { createServer } from 'http'

import app from './graphql/app'

(async () => {
    const server = createServer(app.callback())
})()