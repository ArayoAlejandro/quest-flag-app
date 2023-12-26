import { connect } from 'mongoose'
import 'dotenv/config'

export function connectToDatabase () {
  connect(process.env.MONGODB_URI as string)
}
