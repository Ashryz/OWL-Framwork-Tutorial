from odoo import models, fields


class TodoTasks(models.Model):
    _name = 'todo.tasks'
    _description = 'To-DO Tasks'
    _order = 'create_date DESC'

    name = fields.Char(string='Task Name')
    color = fields.Char()
    completed = fields.Boolean()