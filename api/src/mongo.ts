import { connect } from 'mongoose'
import 'dotenv/config'

export function connectToDatabase () {
  connect(process.env.MONGODB as string)
}
