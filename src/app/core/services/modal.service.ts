import { ComponentFactoryResolver, ComponentRef, Injectable, Type, ViewChild, ViewContainerRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(private componentFactory: ComponentFactoryResolver) { }

  public create(component: any, vcRef: ViewContainerRef, modalTitle: string, modalMessage: string) {
    vcRef.clear();
    const factory = this.componentFactory.resolveComponentFactory(component);
    const componentRef: ComponentRef<any> = vcRef.createComponent(factory);
    componentRef.instance.title = modalTitle;
    componentRef.instance.message = modalMessage;
    componentRef.instance.event = () => this.destroy(vcRef);
  }

  public destroy(vcRef: ViewContainerRef) {
    vcRef.clear();
  }
}
