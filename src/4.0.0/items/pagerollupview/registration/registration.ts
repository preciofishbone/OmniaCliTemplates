
import { Guid } from '@omnia/fx/models';
import { Topics} from '@omnia/wcm';

Topics.registerPageRollupView.publish({
    id: new Guid("$guid3$"),
    title: '$outputname$',
    viewElement: '$element$-view',
    settingsElement: '$element$-settings',
    supportClassicPaging: true,
    supportScrollPaging: true
});
