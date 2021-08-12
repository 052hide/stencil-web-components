import { Component, State, Method, h } from '@stencil/core'

@Component({
  tag: 'sample-container',
  styleUrls: ['../../global/app.css'],
  shadow: true,
})
export class SampleContainer {
  @State() value: string = ''

  /**
   * click event
   */
  @Method()
  async handleClicked() {
    console.log('handleClicked')
  }

  /**
   * input event
   */
  @Method()
  async handleInput(event: CustomEvent<string>) {
    this.value = event.detail
  }

  render() {
    return (
      <div>
        <wc-button html-type="button" disabled={false} loading={true} theme="primary" size="base" block={true} onClicked={this.handleClicked}>
          Button
        </wc-button>
        <wc-input name="input" placeholder="placeholder" disabled={true} value={this.value} onChangeValue={event => this.handleInput(event)} />
        {this.value}
      </div>
    )
  }
}
