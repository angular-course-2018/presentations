import * as express from 'express';
import * as cors from 'cors';

const app = express();
app.use(cors());
const port = 3000;


app.get('/profile/nn605g', (req, res) => setTimeout(() => res.json({username: 'Nabil Naffar', age: 30}), 3000));
app.get('/profile/error', (req, res) => setTimeout(() => res.status(404).send('user not found'), 3000));

// let counter = 0;
// app.get('/profile/ice-cream', (req, res) => setTimeout(() => {
//     if (counter === 2) {
//         res.status(200).send('ice-cream!');
//         counter = 0;
//     } else {
//         counter++;
//         res.status(400).send('oh owww...');
//     }
// }, 200));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
