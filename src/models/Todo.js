import { Model } from '@vuex-orm/core'
import User from './User'

export default class Todo extends Model {
  static entity = 'todos'

  static fields () {
    return {
      id: this.increment(),
      user_id: this.number(0),
      title: this.string(''),
      done: this.boolean(false),
      assignee: this.belongsTo(User, 'user_id')
    }
  }
}
