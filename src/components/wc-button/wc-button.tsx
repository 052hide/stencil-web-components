import { Component, Prop, State, Event, EventEmitter, Host, h } from '@stencil/core'
import { WcButtonProps } from './type'

const baseClassName = () => 'relative inline-flex items-center border border-transparent shadow-sm transition duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2'

const themeClassName = (theme: WcButtonProps['theme'], disabled: WcButtonProps['disabled']) => {
  if (theme === 'primary') {
    return `bg-indigo-600 text-white ${disabled ? '' : 'hover:bg-indigo-700 focus:ring-indigo-500'}`
  } else if (theme === 'secondary') {
    return `text-indigo-700 bg-indigo-100 ${disabled ? '' : 'hover:bg-indigo-200 focus:ring-indigo-500'}`
  } else {
    return ''
  }
}

const sizeClassName = (size: WcButtonProps['size']) => {
  if (size === 'xs') {
    return 'px-2.5 py-1.5 text-xs rounded'
  } else if (size === 'sm') {
    return 'px-3 py-2 text-sm leading-4 rounded-md'
  } else if (size === 'base') {
    return 'px-4 py-2 text-sm rounded-md'
  } else if (size === 'lg') {
    return 'px-4 py-2 text-base rounded-md'
  } else if (size === 'xl') {
    return 'px-6 py-3 text-base rounded-md'
  } else {
    return ''
  }
}

const widthClassName = (block: WcButtonProps['block']) => {
  return block ? 'flex flex-row justify-center items-center w-full' : ''
}

const disabledClassName = (disabled: WcButtonProps['disabled']) => {
  return disabled ? 'opacity-50 cursor-not-allowed' : ''
}

@Component({
  tag: 'wc-button',
  styleUrls: ['../../global/app.css'],
  shadow: true,
})
export class WcButton {
  /**
   * html button type
   */
  @Prop() htmlType: WcButtonProps['htmlType']

  /**
   * button disabled
   */
  @Prop() disabled: WcButtonProps['disabled']

  /**
   * show loading icon
   */
  @Prop() loading: WcButtonProps['loading']

  /**
   * theme of button
   */
  @Prop() theme: WcButtonProps['theme']

  /**
   * size of button
   */
  @Prop() size: WcButtonProps['size']

  /**
   * fit button width to its parent width
   */
  @Prop() block: WcButtonProps['block']

  @State() inProgress: boolean

  /**
   * click event emit
   */
  @Event() clicked: EventEmitter

  private handleClickSelf = () => {
    this.inProgress = true
    setTimeout(() => {
      this.inProgress = false
    }, 500) // 二度押し防止
    this.clicked.emit()
  }

  render() {
    return (
      <Host>
        <button
          type={this.htmlType}
          disabled={this.disabled || this.inProgress}
          class={`${baseClassName()}, ${themeClassName(this.theme, this.disabled)} ${sizeClassName(this.size)} ${widthClassName(this.block)} ${disabledClassName(this.disabled)}`}
          onClick={this.handleClickSelf}
        >
          <slot />
          {this.loading && (
            <span class="absolute inset-y-0 right-0 flex flex-row justify-center items-center px-4">
              <svg class="animate-spin h-5 w-5" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path
                  class="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            </span>
          )}
        </button>
      </Host>
    )
  }
}
