import mongoose from 'mongoose'
import app from './app'
import config from './config/index'

async function bootstrap() {
  try {
    await mongoose.connect(config.database_url as string)
    app.listen(config.port, () => {
      console.log(`Application app listening on port ${config.port}`)
    })
    console.log('Database connect successfully!')
  } catch (err) {
    console.log('failed to connect', err)
  }
}

bootstrap()
