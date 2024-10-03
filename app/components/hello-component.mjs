import CustomElement from '@enhance/custom-element'

export default class HelloComponent extends CustomElement {
    render({ html }) {
        console.log('HelloComponent:render()');

        return html`
            <div>Hello!</div>
        `
    }
}

customElements.define('hello-component', HelloComponent)
