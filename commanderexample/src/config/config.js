import dotenv from 'dotenv';

dotenv.config()

export default {
    port: process.env.PORT,
    mongoURL: process.env.MONGO_URL,
    githubAPIKey: process.env.GITHUB_API_KEY
}