_ = require('lodash')

class ToDo {
  create() {
    this.$tasks = this.model.at('tasks')

    // Initialize tasks data
    this.$tasks.set([])
    console.log("Tasks initialized:", this.$tasks.get())
  }

  addTask(task) {
    console.log("Adding task:", task)
    // Add a new task to the list
    this.$tasks.push(task)
    console.log("Tasks after adding:", this.$tasks.get())
  }

  removeTask(index) {
    // Remove task at the given index
    const tasks = this.$tasks.get()
    tasks.splice(index, 1)
    this.$tasks.set(tasks)
  }

  completeTask(index) {
    const tasks = this.$tasks.get()
    tasks[index].completed = !tasks[index].completed; // Toggle the completion state
    this.$tasks.set(tasks)
    console.log("Tasks after adding:", this.$tasks.get())

  }

  updateTask(index, updatedTask) {
    // Update task at the given index
    const tasks = this.$tasks.get()
    tasks[index] = updatedTask
    this.$tasks.set(tasks)
  }
}

ToDo.prototype.name = 'to-list'
ToDo.prototype.view = __dirname

module.exports = ToDo
