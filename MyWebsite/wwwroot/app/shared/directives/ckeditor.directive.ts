import { Directive, Input, Attribute, Output, EventEmitter, OnChanges } from "@angular/core";

declare var CKEDITOR: any;

@Directive({
    selector: "[ckeditor][id][ngModel]"
})
export class CKEditorDirective implements OnChanges {
    private ckeditor: any;
    @Input() config: any;
    @Input() ngModel: any;
    @Output() ngModelChange = new EventEmitter();

    constructor( @Attribute("id") private id: string) {
        if (CKEDITOR === undefined || !id) {
            throw new Error("The 'CKEDITOR' or the 'id' are not defined...");
        }
    }

    ngAfterViewInit() {
        if (this.ckeditor == null) {
            this.ckeditor = CKEDITOR.replace(this.id, this.config);
        }
        this.ckeditor.on("change", () => this.ngModelChange.emit(this.ckeditor.getData()));
        this.ckeditor.on("instanceReady", () => this.ckeditor.setData(this.ngModel));
    }

    ngOnChanges() {
        if (this.ckeditor) {
            this.ckeditor.setData(this.ngModel);
            this.ngModelChange.emit(this.ngModel);
        }
    }
}