import { Directive, Input, TemplateRef, ViewContainerRef, OnInit } from '@angular/core';

export class NgLetContext {
  $implicit: unknown = null;
  ngLet: unknown = null;
}

@Directive({
  selector: '[ngLet]',
})
export class NgLetDirective implements OnInit {
  private _context = new NgLetContext();

  @Input()
  set ngLet(value: unknown) {
    this._context.$implicit = this._context.ngLet = value;
  }

  constructor(private _vcr: ViewContainerRef, private _templateRef: TemplateRef<NgLetContext>) {}

  ngOnInit() {
    this._vcr.createEmbeddedView(this._templateRef, this._context);
  }
}
