import { Component } from "@angular/core";
import { Http, Headers } from "@angular/http";
import { ResultModel } from "./shared/models/result.model";

@Component({
    selector: "my-app",
    template: require("./app.component.html")
})
export class AppComponent {
    private api: string = "/api/editor";
    title = "Editor";
    message: string;
    content: string;
    ckeditorConfig: any = {
        height: "300px"
    };

    constructor(private http: Http) {
    }

    ngAfterViewInit() {
        this.http.get(this.api).subscribe(
            (response) => {
                let result: ResultModel = response.json();
                if (!result.IsSuccess) {
                    this.showMessage(result.Message);
                    this.clear();
                } else {
                    this.content = result.Data;
                }
            });
    }

    send(): void {
        this.clearMessage();
        let headers = new Headers({ "Content-Type": "application/json" });
        this.http.put(this.api, JSON.stringify(this.content), { headers: headers }).subscribe(
            (response) => {
                let result: ResultModel = response.json();
                if (!result.IsSuccess) {
                    this.showMessage(result.Message);
                } else {
                    this.showMessage(`Saved successfully`);
                }
            });
    }

    clear(): void {
        this.content = "";
    }

    clearMessage(): void {
        this.message = "";
    }

    showMessage(message: string): void {
        this.message = message;
    }
}