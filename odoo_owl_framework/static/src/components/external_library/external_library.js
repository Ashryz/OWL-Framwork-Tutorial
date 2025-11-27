/** @odoo-module **/

import { registry } from "@web/core/registry";
import { loadJS, loadCSS } from "@web/core/assets";

const { Component, onWillStart, onMounted, useRef } = owl ;

export class ExternalLibrary extends Component {

    setup(){
        this.phone = useRef("phone")
        this.iti

        onWillStart(async() => {
            await loadJS("https://cdn.jsdelivr.net/npm/intl-tel-input@25.12.5/build/js/intlTelInput.min.js")
            await loadCSS("https://cdn.jsdelivr.net/npm/intl-tel-input@25.12.5/build/css/intlTelInput.css") 
        })

        onMounted(() => {
            this.iti = intlTelInput(this.phone.el,{
                    initialCountry: "eg",
                    strictMode: true,
                    loadUtils: () => import("https://cdn.jsdelivr.net/npm/intl-tel-input@25.12.5/build/js/utils.js"),
                })
        })
    }

    chekNumberValid(){
        // if(!this.iti.isValidNumber()){
        //     console.log("not valid")
        // }else {
        //     console.log("valid num ");
            
        // }
        console.log(this.iti)
    }
};

ExternalLibrary.template = "odoo_owl_framework.externalLibraryTemplate";

registry.category("actions").add("odoo_owl_framework.external_library",ExternalLibrary);