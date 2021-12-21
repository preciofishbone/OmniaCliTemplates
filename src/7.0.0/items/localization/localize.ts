export module $outputname$ {

    //The namespace must be unique so it does not unexpectedly overide other existing localization! 
    
    //Normally, you can just use one central localization for your entire web service.

    //If you want to create different localization files for different features
    //You could share a root namespace to easily maintain
    //For example: namespace "MyWonderfulService.FeatureA" and namespace "MyWonderfulService.FeatureB"


    //so .... is the below namespace unique enough? :-) 
    //If you change it now, remember to update the same namespace in other language files too.
    export const namespace = "$outputname$"; 
    export interface locInterface {
        Labels: {
            Label1: string,
            Label2: string
        },
        Features: {
            Feature1: string,
            Feature2: string
        }
    }
}