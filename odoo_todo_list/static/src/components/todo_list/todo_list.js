/** @odoo-module **/

import { registry } from "@web/core/registry";
const { Component, useState, onWillStart, useRef } = owl;
import { useService } from "@web/core/utils/hooks";
export class TodoList extends Component {

    setup(){
        this.state = useState({
            taskList: [],
            task: {name:"",color:"#ff00f0",completed:false},
            isEdit: false,
            activeId: false
        })
        this.orm = useService("orm");
        this.model = "todo.tasks";
        this.searchInput = useRef("search-input")

        onWillStart( async() => {
            await this.getAllTasks()
        })
    }

    async getAllTasks(){
        this.state.taskList = await this.orm.searchRead(this.model ,[],["name","color","completed"])
    }

    addTask(){
        this.resetForm()
        this.state.isEdit = false
        this.state.activeId = false
    }

    editTask(task){
        this.state.isEdit = true
        this.state.activeId = task.id
        this.state.task = {...task}
    }

    async saveTask(){
        if (!this.state.isEdit){
            await this.orm.create(this.model,[this.state.task])
        } else {
            await this.orm.write(this.model,[this.state.activeId],this.state.task)
        }
        await this.getAllTasks()
    }

    async toggleTaskCompleted(e, task){
        await this.orm.write(this.model,[task.id],{completed: e.target.checked})
        await this.getAllTasks()
    }

    async updateTaskColor(e, task){
        await this.orm.write(this.model,[task.id],{color: e.target.value})
        await this.getAllTasks()
    }


    async deleteTask(task){
        await this.orm.unlink(this.model,[task.id])
        await this.getAllTasks()
    }

    async searchTask(){
        const text = this.searchInput.el.value
        this.state.taskList = await this.orm.searchRead(this.model,[["name","ilike",text]], ["name","color","completed"])
    }

    resetForm(){
        this.state.task = {name:"",color:"#ff00f0",completed:false}
    }
}
TodoList.template = 'odoo_todo_list.todo_list_owl_template';
registry.category("actions").add("odoo_todo_list.action_todo_list_owl", TodoList);