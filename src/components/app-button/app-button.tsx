import { Component, Prop, Host, h } from '@stencil/core'
import { Props } from './type'

const baseClassName = () => 'inline-flex items-center border border-transparent shadow-sm transition duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2'

const themeClassName = (theme: Props['theme']) => {
  if (theme === 'primary') {
    return 'bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-500'
  } else if (theme === 'secondary') {
    return 'text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:ring-indigo-500'
  } else {
    return ''
  }
}

const sizeClassName = (size: Props['size']) => {
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

const widthClassName = (block: Props['block']) => {
  return block ? 'flex flex-row justify-center items-center w-full' : ''
}

@Component({
  tag: 'app-button',
  styleUrls: ['../../global/app.css'],
  shadow: true,
})
export class AppButton {
  @Prop() theme: Props['theme']
  @Prop() size: Props['size']
  @Prop() block: Props['block']

  render() {
    return (
      <Host>
        <button class={`${baseClassName()}, ${themeClassName(this.theme)} ${sizeClassName(this.size)} ${widthClassName(this.block)}`}>
          <slot />
        </button>
      </Host>
    )
  }
}
