/** @odoo-module **/

import { registry } from "@web/core/registry";
import { kanbanView } from "@web/views/kanban/kanban_view";
import { KanbanController } from "@web/views/kanban/kanban_controller";
import { useService } from "@web/core/utils/hooks";

const { onWillStart } = owl;

class ResPartnerKanbanController extends KanbanController {

    setup(){
        super.setup();
        this.orm = useService("orm")

        onWillStart( async () => {
            this.customerLocations = await this.orm.readGroup("res.partner",[],["state_id"], ["state_id"])
        })
    }

    selectLocation(state){
        const id = state[0]
        const name = state[1]
        this.env.searchModel.setDomainParts({
            state: {
                domain: [["state_id", "=", id]],
                facetLabel: name
            }
        })
    }
}
ResPartnerKanbanController.template = "odoo_owl_framework.ResPartnerKanbanView";
export const resPartnerKanbanView = {
    ...kanbanView,
    Controller: ResPartnerKanbanController

}
registry.category("views").add("res_partner_kanban_view", resPartnerKanbanView)