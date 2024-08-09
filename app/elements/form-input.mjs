export default function FormInput({ html, state }) {
    const { attrs = {} } = state
    const {
        description = '',
        errors = '',
        form = '',
        id = '',
        label = '',
        max = '',
        maxlength = '',
        min = '',
        minlength = '',
        name = '',
        pattern = '',
        placeholder = '',
        size = '',
        step = '',
        value = '',
        type = '',
    } = attrs

    const booleanAttr = (attrs, attr) =>
        Object.keys(attrs).includes(attr) ? attr : ''

    const autocomplete = booleanAttr(attrs, 'autocomplete')
    const autofocus = booleanAttr(attrs, 'autofocus')
    const disabled = booleanAttr(attrs, 'disabled')
    const readonly = booleanAttr(attrs, 'readonly')
    const required = booleanAttr(attrs, 'required')

    return html`
        <style>
            :host {
                --_accent: var(--accent, royalblue);
                --_error: var(--error, crimson);
                --_fore: var(--fore, currentColor);
                --_back: var(--back, white);
            }
            :host input {
                background-color: var(--_back);
                border-color: var(--_fore);
            }
            :host input:focus {
                transition: outline 0.15s ease-in;
            }
            :host .errors {
                color: var(--_error);
            }
            :host p:not(.errors) {
                color: var(--_fore);
            }
        </style>
        <input
            class="p-2 flex-grow si-100 font-light radius0 border-solid mbe-2 border1 select-none"
            ${id ? `id="${id}"` : ''}
            ${name || id ? `name="${name || id}"` : ''}
            ${max ? `max="${max}"` : ''}
            ${maxlength ? `maxlength="${maxlength}"` : ''}
            ${min ? `min="${min}"` : ''}
            ${minlength ? `minlength="${minlength}"` : ''}
            ${pattern ? `pattern="${pattern}"` : ''}
            ${placeholder ? `placeholder="${placeholder}"` : ''}
            ${size ? `size="${size}"` : ''}
            ${step ? `step="${step}"` : ''}
            ${type ? `type="${type}"` : ''}
            ${value ? `value="${value}"` : ''}
            ${autocomplete ? 'autocomplete' : ''}
            ${autofocus ? 'autofocus' : ''}
            ${disabled ? 'disabled' : ''}
            ${readonly ? 'readonly' : ''}
            ${required ? 'required' : ''}
        />
    `
}
