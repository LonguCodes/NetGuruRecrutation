import {startApplication} from "./app";


startApplication()
    .then(() => {
        console.log('Server started on port 3000')
    })
    .catch(() => {
        console.error('Failed to start the server')
    })