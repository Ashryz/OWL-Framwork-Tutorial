{
    "name": "Owl Framework",
    "summary": " ",
    "description": """ """,
    "author": " Tarek Ashry",
    "version": "16.0.1.0",
    "depends": [
        'base',
        'web',
    ],
    "data": [
        "views/res_partner_view.xml"
    ],
    "assets": {
        "web.assets_backend": [
            "odoo_owl_framework/static/src/components/*/**",
        ],
    },
    "application": True,
    "auto_install": False,
    'license': 'LGPL-3'
}
