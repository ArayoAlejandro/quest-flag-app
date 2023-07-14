import { connect } from 'mongoose'
export function connectToDatabase () {
  connect('mongodb+srv://flag:lFOUWlbhxv00Ub2M@cluster0.v79maj7.mongodb.net/app?retryWrites=true&w=majority')
}
