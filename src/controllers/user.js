import connectToDatabase from '../db/db';

export const getAllUsers = async () => {
    try {
        const { User } = await connectToDatabase()
        const user = await User.findAll()
        return {
          statusCode: 200,
          body: JSON.stringify(user)
        }
      } catch (err) {
        return {
          statusCode: err.statusCode || 500,
          headers: { 'Content-Type': 'application/json' },
          body: 'Could not fetch user data.'
        }
      }
}

export const createAUser = async (event) => {
    try {
        const { User } = await connectToDatabase()
        const user = await User.create(JSON.parse(event.body))
        return {
          statusCode: 200,
          body: JSON.stringify(user)
        }
      } catch (err) {
        return {
          statusCode: err.statusCode || 500,
          headers: { 'Content-Type': 'application/json' },
          body: 'Could not create the user.'
        }
      }
}
