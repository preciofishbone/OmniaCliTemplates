
import { FontAwesomeIcon, AdminNavigationBuiltInCategory } from '@omnia/fx/models';
import { Topics } from '@omnia/fx';


Topics.Admin.registerNavigationNode.publish({
    title: '$outputname$',
    category: AdminNavigationBuiltInCategory.Tenant,
    elementToRender: "$element$",
    icon: new FontAwesomeIcon("far fa-smile-beam"),
    weight: 1000
});


