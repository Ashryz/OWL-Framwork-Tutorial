from odoo import http
from odoo.http import request

class ResPartner(http.Controller):

    @http.route('/owl/rpcService/res_partner', type='json',auth='user')
    def get_partner(self):
        return request.env['res.partner'].search_read([],['name','phone','email'],limit=10)