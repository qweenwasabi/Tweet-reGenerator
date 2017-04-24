import routes from './routes'
import ejs from 'ejs'
import path from 'path'
import logger from 'morgan'
import bodyParser from 'body-parser'

const server = express()

server.set('views' , path.join(_dirname, 'views'))
server.set('view engine', 'ejs')

server.use(loffer('dev'))
server.use(express.static(path.join(_dirname + 'src/public')))
server.use(bodyParser.urlencoded({extended: true}))

server.use('/', routes)

server.listen(process.env.PORT || 8080)
module.exports = server 
