var app = new Vue({
    el: '#app',
    data: {
        tasks: []
    },    
    methods: {
        addTask: function(e) {
            e.preventDefault()
            
            this.tasks.push({
                title: this.tasks.title,
                done: false
            })
            
            this.tasks.title = ''
        },
        deleteTask: function(task) {
            this.tasks.splice(this.tasks.indexOf(task), 1)
        }
    }
})