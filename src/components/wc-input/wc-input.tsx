import { Component, Prop, Event, EventEmitter, Host, h } from '@stencil/core'
import { WcInputProps } from './type'

@Component({
  tag: 'wc-input',
  styleUrls: ['../../global/app.css'],
  shadow: true,
})
export class WcInput {
  /**
   * name of input
   */
  @Prop() name: WcInputProps['name']

  /**
   * label of input
   */
  @Prop() label: WcInputProps['label']

  /**
   * placeholder of input
   */
  @Prop() placeholder: WcInputProps['placeholder']

  /**
   * input disabled
   */
  @Prop() disabled: WcInputProps['disabled']

  /**
   * value of input
   */
  @Prop() value: WcInputProps['value']

  /**
   * click event emit
   */
  @Event() changeValue: EventEmitter<string>

  private handleChange(event: InputEvent) {
    this.changeValue.emit((event.target as HTMLInputElement).value)
  }

  render() {
    return (
      <Host>
        <div>
          <label htmlFor={this.name} class="sr-only">
            {this.label}
          </label>
          <input
            type="text"
            name={this.name}
            id={this.name}
            placeholder={this.placeholder}
            disabled={this.disabled}
            value={this.value}
            onInput={(event: InputEvent) => this.handleChange(event)}
            class="block py-2 px-3 w-full shadow-sm border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 disabled:bg-gray-300 sm:text-sm"
          />
        </div>
      </Host>
    )
  }
}
