/** @odoo-module **/

import { registry } from "@web/core/registry";
import { CharField } from "@web/views/fields/char/char_field"


class UserNameField extends CharField {

    setup(){
        super.setup();
    }

    get emailDomain (){
        const { email } = this.props.record.data
        return email ? email.split('@')[1] : ''
    }

}
UserNameField.template = "odoo_owl_framework.UserNameFieldTemplate";
UserNameField.supportedTypes = ["char"];
UserNameField.components = {CharField}

registry.category("fields").add("user_name", UserNameField);