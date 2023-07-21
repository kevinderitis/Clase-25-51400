import { Command } from 'commander';
import dotenv from 'dotenv';

const program = new Command();

program
    .option('--mode <mode>', 'Modo de trabajo', 'development')

program.parse()

const environment = program.opts().mode || 'development';

dotenv.config({
    path: environment === 'development' ? './.env.development' : './.env.production'
})


export default {
    port: process.env.PORT,
    db: process.env.DATABASE,
    apiKey: process.env.API_KEY
}