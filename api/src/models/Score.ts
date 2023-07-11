import { Schema, model } from 'mongoose'

const scoreSchema = new Schema({
  name: String,
  score: Number
})

scoreSchema.set('toJSON', {
  transform: (_document, returnedObject) => {
    returnedObject.id = returnedObject._id
    delete returnedObject._id
    delete returnedObject.__v
  }
})

export const Score = model('Score', scoreSchema)
