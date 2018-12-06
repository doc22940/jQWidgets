/// <reference path="../jqwidgets.d.ts" />
import { EventEmitter, ElementRef, OnChanges, SimpleChanges } from '@angular/core';
export declare class jqxToolBarComponent implements OnChanges {
    attrDisabled: boolean;
    attrInitTools: (type?: string, index?: number, tool?: any, menuToolIninitialization?: boolean) => void;
    attrMinimizeWidth: number;
    attrMinWidth: number | string;
    attrMaxWidth: number | string;
    attrRtl: boolean;
    attrTools: any;
    attrTheme: string;
    attrWidth: string | number;
    attrHeight: string | number;
    autoCreate: boolean;
    properties: string[];
    host: any;
    elementRef: ElementRef;
    widgetObject: jqwidgets.jqxToolBar;
    constructor(containerElement: ElementRef);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): boolean;
    arraysEqual(attrValue: any, hostValue: any): boolean;
    manageAttributes(): any;
    moveClasses(parentEl: HTMLElement, childEl: HTMLElement): void;
    moveStyles(parentEl: HTMLElement, childEl: HTMLElement): void;
    createComponent(options?: any): void;
    createWidget(options?: any): void;
    __updateRect__(): void;
    setOptions(options: any): void;
    disabled(arg?: boolean): any;
    height(arg?: string | number): any;
    initTools(arg?: (type?: string, index?: number, tool?: any, menuToolIninitialization?: boolean) => void): any;
    minimizeWidth(arg?: number): any;
    minWidth(arg?: number | string): any;
    maxWidth(arg?: number | string): any;
    rtl(arg?: boolean): any;
    tools(arg?: string): any;
    theme(arg?: string): any;
    width(arg?: string | number): any;
    addTool(type: string, position: string, separator: boolean, menuToolIninitialization: (type?: string, tool?: any, menuToolIninitialization?: boolean) => void): void;
    disableTool(index: number, disable: boolean): void;
    destroy(): void;
    destroyTool(index: number): void;
    getTools(): Array<jqwidgets.ToolBarToolItem>;
    render(): void;
    refresh(): void;
    onClose: EventEmitter<{}>;
    onOpen: EventEmitter<{}>;
    __wireEvents__(): void;
}