import { Model } from 'vuex-orm'
import User from './User'

export default class Todo extends Model {
  static entity = 'todos'

  static fields () {
    return {
      id: this.attr(null),
      user_id: this.attr(null),
      title: this.attr(''),
      done: this.attr(false),
      assignee: this.belongsTo(User, 'user_id')
    }
  }
}
