import { extendApi } from "@omnia/fx";
import { FontAwesomeIcon, AdminNavigationBuiltInCategory } from "@omnia/fx/models";


extendApi(api => api.fx.ux.admin.registration.navigationNode, api => {
    api.registerNavigationNode([
        {
            title: "$outputname$", // You can use localization, i.e., $Localize:Namespace.Something.Title; 
            category: AdminNavigationBuiltInCategory.Tenant,
            elementToRender: "$element$",
            icon: new FontAwesomeIcon("far fa-smile-beam"),
            weight: 1000
        }
    ])
})
