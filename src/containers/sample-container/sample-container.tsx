import { Component, Method, h } from '@stencil/core'

@Component({
  tag: 'sample-container',
  styleUrls: ['../../global/app.css'],
  shadow: true,
})
export class SampleContainer {
  /**
   * click event
   */
  @Method()
  async handleClicked() {
    console.log('handleClicked')
  }

  render() {
    return (
      <div>
        <wc-button html-type="button" disabled={false} loading={true} theme="primary" size="base" block={true} onClicked={this.handleClicked}>
          Button
        </wc-button>
      </div>
    )
  }
}
