import { Database } from '@vuex-orm/core'
import User from '@/models/User'
import Todo from '@/models/Todo'

const database = new Database()

database.register(User)
database.register(Todo)

export default database
