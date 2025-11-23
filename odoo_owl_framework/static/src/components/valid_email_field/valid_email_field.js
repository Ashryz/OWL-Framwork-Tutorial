/** @odoo-module **/

import { registry } from "@web/core/registry";
import { EmailField } from "@web/views/fields/email/email_field"


class ValidEmailField extends EmailField {

    setup(){
        super.setup();
    }
    get isValidEmail(){
        let re = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
        return re.test(this.props.value)

    }

}
ValidEmailField.template = "odoo_owl_framework.ValidEmailTemplate";
ValidEmailField.supportedTypes = ["char"];

registry.category("fields").add("valid_email", ValidEmailField);