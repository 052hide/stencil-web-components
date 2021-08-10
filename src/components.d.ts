/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { Props } from "./components/wc-button/type";
export namespace Components {
    interface WcButton {
        /**
          * fit button width to its parent width
         */
        "block": Props['block'];
        /**
          * size of button
         */
        "size": Props['size'];
        /**
          * theme of button
         */
        "theme": Props['theme'];
    }
}
declare global {
    interface HTMLWcButtonElement extends Components.WcButton, HTMLStencilElement {
    }
    var HTMLWcButtonElement: {
        prototype: HTMLWcButtonElement;
        new (): HTMLWcButtonElement;
    };
    interface HTMLElementTagNameMap {
        "wc-button": HTMLWcButtonElement;
    }
}
declare namespace LocalJSX {
    interface WcButton {
        /**
          * fit button width to its parent width
         */
        "block"?: Props['block'];
        /**
          * size of button
         */
        "size"?: Props['size'];
        /**
          * theme of button
         */
        "theme"?: Props['theme'];
    }
    interface IntrinsicElements {
        "wc-button": WcButton;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "wc-button": LocalJSX.WcButton & JSXBase.HTMLAttributes<HTMLWcButtonElement>;
        }
    }
}
