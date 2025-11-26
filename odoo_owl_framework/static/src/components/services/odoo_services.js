/** @odoo-module **/

import { registry } from "@web/core/registry";
import { Layout } from "@web/search/layout";
import { useService } from "@web/core/utils/hooks";
import { getDefaultConfig } from "@web/views/view";
import { ConfirmationDialog } from "@web/core/confirmation_dialog/confirmation_dialog"


const { Component, useSubEnv, useState } = owl;

export class OwlOdooServices extends Component {

    setup(){
        super.setup();
        this.display = {
            controlPanel: {"top-right": false, "bottom-right": false}
        }

        useSubEnv({
            config: {
                ...getDefaultConfig(),
                ...this.env.config,
            }
        })

        this.cookie = useService("cookie")
        
        if (this.cookie.current.dark_mode == undefined){
            this.cookie.setCookie("dark_mode",false)
        }

        this.state = useState({
            dark_mode: this.cookie.current.dark_mode,
            data: []
        })
        

    }

    showNotification(){
        const notif = this.env.services.notification
        console.log(notif);
        
        notif.add("this sample test notifications ",{
            title:"Owl Notifications",
            type: "info", //info,warrning,danger,success
            sticky: true, //default false to disappear auto
        })        
    }

    showDialog(){
        const dialog = this.env.services.dialog
        console.log(dialog)
        dialog.add(ConfirmationDialog, {
            title: "Dialog Services",
            body: "Are you sure you want to continue this action ?",
            confirm: ()=>{
                console.log("confirmed")
            },
            cancel: () => {
                console.log("cancelled")

            }
        })
    }

    showEffect(){
        const effect = this.env.services.effect
        effect.add({
            type: "rainbow_man",
            message: "this odoo services effect"
        })
    }
    
    setCookiesServices(){
        if (this.cookie.current.dark_mode == "false"){
            this.cookie.setCookie("dark_mode",true)
        } else {
            this.cookie.setCookie("dark_mode",false)
        }

        this.state.dark_mode = this.cookie.current.dark_mode
    }

    async getHttpService(){
        const http = this.env.services.http
        const data = await http.get("https://dummyjson.com/products")
        this.state.data = data.products.slice(0, 10)
    }


}
OwlOdooServices.template = "odoo_owl_framework.OdooServicesTemplate";
OwlOdooServices.components = { Layout };
registry.category("actions").add("odoo_owl_framework.odoo_service",OwlOdooServices);    