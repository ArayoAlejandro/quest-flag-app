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

export const ScoreAll = model('ScoreAll', scoreSchema)
export const ScoreEurope = model('ScoreEurope', scoreSchema)
export const ScoreAmerica = model('ScoreAmerica', scoreSchema)
export const ScoreOceania = model('ScoreOcenia', scoreSchema)
export const ScoreAsia = model('ScoreAsia', scoreSchema)
export const ScoreAfrica = model('ScoreAfrica', scoreSchema)
