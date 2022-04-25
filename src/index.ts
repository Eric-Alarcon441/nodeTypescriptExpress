import express from 'express';
import diaryRoutes from './routes/diaries';
const app = express();

app.use(express.json());

const PORT = 3000;

app.get('/ping', (_req, res) => {
	console.log('someone pinget here!!' + new Date().toLocaleDateString());
	res.send('pong');
});

app.use('/api/diaries', diaryRoutes);

app.listen(PORT, () => {
	console.log(`server running on http://localhost:${PORT}`);
});
