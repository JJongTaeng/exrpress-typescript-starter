import * as express from "express";
import morgan from 'morgan';
import { config } from 'dotenv';

config(); // env 환경 설정


const app: express.Application = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
  res.send('hello world');
});

app.listen(3000, () => {
  console.log('### Server Start : http://localhost:3000');
})