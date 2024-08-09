import CustomElement from '@enhance/custom-element'
import slugify from 'slugify'

export default class ArticleEditForm extends CustomElement {
    #form = this.querySelector('#edit-form > form')

    #slugHasInitialVal = false
    #slugIsDirty = false

    connectedCallback() {
        this.#slugHasInitialVal = Boolean(this.#form.slug.value)

        this.#form.title.addEventListener('input', this.#handleTitleInput)
        this.#form.slug.addEventListener('change', this.#handleSlugChange)
    }

    #handleTitleInput = (e) => {
        const { slug } = this.#form
        if (!this.#slugHasInitialVal && !this.#slugIsDirty) {
            slug.value = slugify(e.target.value, { lower: true })
        }
    }

    #handleSlugChange = (e) => {
        this.#slugIsDirty = true
    }

    render({ html, state: { attrs } }) {
        return html`
            <enhance-form id="edit-form" method="post" action="/articles">
                <form-field id="title">
                    <span slot="label">Title</span>
                    <form-input id="title" name="title"></form-input>
                </form-field>
                <form-field id="slug">
                    <span slot="label">Slug</span>
                    <form-input id="slug" name="slug"></form-input>
                </form-field>

                <div class="mbs2">
                    <enhance-submit-button>
                        <span slot="label">Save</span>
                    </enhance-submit-button>
                </div>
            </enhance-form>
        `
    }
}

customElements.define('article-edit-form', ArticleEditForm)
