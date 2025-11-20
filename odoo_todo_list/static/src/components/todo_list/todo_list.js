/** @odoo-module **/

import { registry } from "@web/core/registry";
const { Component, useState } = owl;

export class TodoList extends Component {

    setup(){
        this.state = useState({value:1})
    }

}
TodoList.template = 'odoo_todo_list.todo_list_owl_template';
registry.category("actions").add("odoo_todo_list.action_todo_list_owl", TodoList);