export default function FormField({ html, state: { attrs } }) {
    const { id } = attrs
    return html`
        <div class="flex flex-col">
            <div
                class="flex align-items-baseline justify-content-between mbe-3"
            >
                <label for="${id}"><slot name="label"></slot></label>
                <!-- any error messages -->
            </div>
            <slot></slot>
        </div>
    `
}
