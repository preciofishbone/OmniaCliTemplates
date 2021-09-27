import { extendApi } from '@omnia/fx';
import { FontAwesomeIcon, AdminNavigationBuiltInCategory } from '@omnia/fx/models';


extendApi(api => api.fx.ux.admin.registration.navigationNode, api => {
    api.registerNavigationNode([
        {
            title: '$outputname$',
            category: AdminNavigationBuiltInCategory.Tenant,
            elementToRender: "$element$",
            icon: new FontAwesomeIcon("far fa-smile-beam"),
            weight: 1000
        }
    ])
})
