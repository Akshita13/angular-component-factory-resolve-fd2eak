import {
  Component,
  ViewContainerRef,
  ComponentFactoryResolver
} from "@angular/core";
import { HelloComponent } from "./hello.component";
@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular 5";
  componentRef;
  constructor(
    public viewContainerRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {}

  onButtonClick() {
    let cFactory = this.componentFactoryResolver.resolveComponentFactory(
      HelloComponent
    );

    if (this.componentRef) {
      this.componentRef=null
      this.viewContainerRef.clear();
      this.viewContainerRef.detach();
      return;
    }
    this.componentRef = this.viewContainerRef.createComponent(cFactory);

    this.componentRef.instance.name = "Created Dynamically haha";
  }

  ngOnInit() {}
}
