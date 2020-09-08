const app = new Vue ({
   el: '#app',
    data: {
        title: 'Todo List Application',
        todos: [],
        newTodo: null
    },
    mounted() {
      if(localStorage.getItem('todos')) {
          try{
             this.todos = JSON.parse(localStorage.getItem('todos'))
          } catch(e) {
            localStorage.removeItem('todos')
          }
      }
    },
    methods: {
        addTodo: function () {
            if(!this.newTodo) {
                return ;
            }
            this.todos.push(this.newTodo)
            this.newTodo = ''
            this.saveTodo()
        },
        deleteTodo: function (index) {
            this.todos.splice(index, 1)
            this.saveTodo()
        },
        saveTodo: function () {
            const parsed = JSON.stringify(this.todos)
            localStorage.setItem('todos', parsed)
        }
    }

})