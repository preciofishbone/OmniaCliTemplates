import Component from 'vue-class-component';
import { VueComponentBase, DialogModel, ITransformerConfigs, ImageTransformer, OmniaTheming, StyleFlow } from '@omnia/fx/ux';
import { IWebComponentInstance, WebComponentBootstrapper, vueCustomElement, Inject, Utils, Localize } from '@omnia/fx';
import { IPageRollupViewInterface, PageDetailsQueryResult, LinkData, PageImage } from '@omnia/wcm/models';
import { $outputname$Settings } from './$outputname$Settings';
import { Prop } from 'vue-property-decorator';
import { SpacingSettings, MediaPickerVideoProviderResult, BuiltInEnterprisePropertyInternalNames } from '@omnia/fx-models';
import { PageRollupStore, PageQueryService } from '@omnia/wcm';
import { $outputname$Styles } from './$outputname$.css'

@Component
export class $outputname$Component extends VueComponentBase implements IWebComponentInstance, IPageRollupViewInterface<$outputname$Settings> {
    @Prop() pages: PageDetailsQueryResult[];
    @Prop() viewSettings: $outputname$Settings;
    @Prop() spacingSetting?: SpacingSettings;
    @Prop() noResultText?: string;
    @Prop() styles: any;
    @Prop() settingsKey: string;
    @Prop() linkData?: LinkData;
    @Prop() callback?: () => void;
    @Prop() uiSorting?: { enable: boolean; onClickSortBy?: (sortBy: string, desc: boolean) => Promise<any>; };

    @Inject(PageRollupStore) private pageRollupStore: PageRollupStore;
    @Inject(PageQueryService) private pageQueryServcie: PageQueryService;
    @Inject(OmniaTheming) private omniaTheming: OmniaTheming;

    @Localize("OWCM.PageRollup.Status") private loc;

    private defaultPageImageHtml = `<img src=${this.pageQueryServcie.getDefaultPageImageSrc()} />`;
    private $outputname$Classes = StyleFlow.use($outputname$Styles);

    private contentDialogModal: DialogModel = {
        visible: false
    }

    private selectedPageId: number = 0;

    mounted() {
        WebComponentBootstrapper.registerElementInstance(this, this.$el);
    }

    beforeDestroy() {

    }

    created() {

    }

    private onPageSelected(page: PageDetailsQueryResult, event: MouseEvent) {
        event.preventDefault();
        event.stopPropagation();

        this.selectedPageId = page.id;
        if (this.viewSettings.showContentAsDialog) {
            this.contentDialogModal.visible = true;

        } else {
            this.pageRollupStore.actions.navigate.dispatch(page.pageNavigationNode, page.id, page.url);
        }
    }

    renderDialogContent() {
        let h = this.$createElement;
        let mappings = this.viewSettings.pageDialogPropsMapping;
        return (
            <div>
                {this.contentDialogModal.visible && h("owcm-page-rollup-dialog-view", {
                    domProps: {
                        selectedProps: mappings ? mappings : {},
                        dialogModel: this.contentDialogModal,
                        pages: this.pages,
                        close: () => { this.callback(); }
                    },
                    attrs: {
                        selectedPageId: this.selectedPageId,
                        settingKey: this.settingsKey
                    }
                })}
            </div>
        )
    }

    private renderNewIcon(h, page: PageDetailsQueryResult) {
        if (!page.isNew) return null;
        return <v-chip tabindex={-1} class={'ma-0 mb-1 mr-1'} dark={true} text-color={this.omniaTheming.promoted.header.text.base} color={this.omniaTheming.promoted.header.primary.base} small>{this.loc.New}</v-chip>
    }

    private renderImage(h, page: PageDetailsQueryResult) {
        let pageImage: PageImage = page.properties[this.viewSettings.imageProp];
        let imageHTML = this.viewSettings.imageProp ? this.defaultPageImageHtml : '';
        if (pageImage) {
            try {
                let thumbnailUrl = (pageImage as MediaPickerVideoProviderResult).thumbnailUrl;
                if (thumbnailUrl) {
                    if (thumbnailUrl.match(/https:\/\/img\.youtube\.com\/vi\/(.)+\/hqdefault\.jpg/gm)) {
                        thumbnailUrl = thumbnailUrl.replace("/hqdefault.jpg", "/maxresdefault.jpg");
                    }
                    imageHTML = `<img src=${thumbnailUrl} />`
                }
                else {
                    let desiredRatio = { xRatio: 1, yRatio: 1 };

                    let ratio = pageImage.ratios ? pageImage.ratios.filter(r => r.xRatio == desiredRatio.xRatio && r.yRatio == desiredRatio.yRatio)[0] : null;
                    let transformerConfig: ITransformerConfigs = ratio ? { cropArea: ratio.ratioCropArea, cropRatio: { x: ratio.xRatio, y: ratio.yRatio }, elementId: Utils.generateGuid() } : { elementId: Utils.generateGuid() };
                    let svg = new ImageTransformer(pageImage.src, transformerConfig);
                    imageHTML = svg.getElementString();
                }
            } catch (ex) {
                console.log(`Cannot render page image of page with id ${page.id}`)
            }
        }

        return <a class={this.$outputname$Classes.imageWrapper} tabindex={-1} onClick={(event: MouseEvent) => { this.onPageSelected(page, event) }} href={page.url} domProps-innerHTML={imageHTML}></a>
    }

    private renderTitle(h, page: PageDetailsQueryResult) {
        return [
            this.renderNewIcon(h, page),
            <a tabindex={-1} onClick={(event: MouseEvent) => { this.onPageSelected(page, event) }} href={page.url}>{page.properties[BuiltInEnterprisePropertyInternalNames.Title] || page.url}</a>
        ];
    }

    private renderPages(h) {
        return this.pages.map(page =>
            <v-card>
                <v-card-text>
                    {this.renderImage(h, page)}
                    {this.renderTitle(h, page)}
                </v-card-text>
            </v-card>
        )
    }

    private renderNoResultText(h) {
        return <div>{this.noResultText}</div>;
    }

    render(h) {
        return (
            <div>
                {
                    !this.pages || this.pages.length == 0 ? this.renderNoResultText(h) : this.renderPages(h)
                }
                {this.contentDialogModal.visible && this.renderDialogContent()}
            </div>
        )
    }
}

WebComponentBootstrapper.registerElement((manifest) => {
    vueCustomElement(manifest.elementName, $outputname$Component);
});




