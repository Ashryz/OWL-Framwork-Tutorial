{
    "name": "TO-DO List",
    "summary": " ",
    "description": """ """,
    "author": " Tarek Ashry",
    "version": "16.0.1.0",
    "depends": [
        'base',
    ],
    "data": [
        'security/ir.model.access.csv',
        'views/todo_tasks_views.xml',
    ],
    "assets": {
        "web.assets_backend": [
            "odoo_todo_list/static/src/components/*/**",
        ],
    },
    "application": True,
    "auto_install": False,
    'license': 'LGPL-3'
}
