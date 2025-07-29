import './config/env.config';
import app from './app';
import AppLanguage from './src/constants/app.language';


const PORT = process.env.PORT || 9090;
console.log(PORT);

app.listen(PORT, () => console.log(AppLanguage.serverUpAndRunning));