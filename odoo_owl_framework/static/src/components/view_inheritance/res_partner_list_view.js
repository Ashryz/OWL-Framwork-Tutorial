/** @odoo-module **/

import { registry } from "@web/core/registry"
import { listView } from "@web/views/list/list_view"
import { ListController } from "@web/views/list/list_controller"
import { useService } from "@web/core/utils/hooks"

class ResPartnerListController extends ListController {
    setup(){
        super.setup()
        this.action = useService("action")
    }

    showSaleOrders(){
         const partnerIds = this.model.root.selection.map(rec => rec.resId);

         if (!partnerIds.length){
            return;
         }

        this.action.doAction({
            type: "ir.actions.act_window",
            name: "Customer SO",
            res_model: "sale.order",
            views: [[false,"list"], [false,"form"]],
            domain: [["partner_id","in",partnerIds]],

        })
    }


}

export const resPartnerListView = {
    ...listView,
    Controller: ResPartnerListController,
    buttonTemplate: "odoo_owl_framework.ResPartnerListView.Buttons",
}

registry.category("views").add("res_partner_list_view", resPartnerListView)