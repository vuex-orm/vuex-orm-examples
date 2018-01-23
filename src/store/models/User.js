import { Model } from '@vuex-orm/core'
import Todo from './Todo'

export default class User extends Model {
  static entity = 'users'

  static fields () {
    return {
      id: this.attr(null),
      name: this.attr(''),
      todos: this.hasMany(Todo, 'user_id')
    }
  }
}
