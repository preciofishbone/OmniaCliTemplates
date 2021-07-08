import { Component } from 'vue-property-decorator';
import { vueCustomElement, IWebComponentInstance, WebComponentBootstrapper } from "@omnia/fx";
import { StyleFlow, VueComponentBase, BlockSettingsReader, ThemeManager, MediaProviderComponentBase } from '@omnia/fx/ux';
import { $outputname$Styles } from './$outputname$Styles.css';
import { Guid, ImageInformation, MediaPickerEnums, MediaPickerImageTransformationResult, MediaPickerVideo, VideoInformation } from '@omnia/fx-models';

@Component
export class $outputname$Provider extends MediaProviderComponentBase implements IWebComponentInstance {



  mounted() {
    WebComponentBootstrapper.registerElementInstance(this, this.$el);
  }

  beforeSaved(resultToBeSaved: MediaPickerImageTransformationResult | VideoInformation): Promise<MediaPickerVideo | MediaPickerImageTransformationResult> {
    return new Promise<MediaPickerImageTransformationResult>((resolve) => {
      resolve(resultToBeSaved as MediaPickerImageTransformationResult);
    });
  }


  private saveImage() {
    let base64Image; //Get the base 64 image here
    let selectedImageInfomation: ImageInformation = {
      mediaType: MediaPickerEnums.OmniaMediaTypes.Image,
      base64: base64Image,
      sizeInBytes: 10051,
      fileName: "sampleFileName-" + Guid.newGuid().toString() + ".png",
      altText: ""
    };
    let transformImageResolvablePromise = this.transformImage(selectedImageInfomation);
    transformImageResolvablePromise.promise.then((resultToBeSaved: MediaPickerImageTransformationResult) => {
      this.save(resultToBeSaved);
    });

  }

  render(h) {
    return this.renderBase(h, () => {
        /**Call this.saveImage() when image is selected*/
      let retElement = (<div>
        
      </div>);
      return retElement;
    })
  }
}

WebComponentBootstrapper.registerElement((manifest) => {
  vueCustomElement(manifest.elementName, $outputname$Provider);
});