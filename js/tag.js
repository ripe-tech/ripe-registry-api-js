/**
 * @class
 * @classdesc API for the Tag entities, which give extra visual information about a given entity.
 */
export const TagAPI = superclass =>
    class extends superclass {
        /**
         * Returns all tags in the registry.
         *
         * @memberof TagAPI
         * @param {Object} options An object of options to configure the query and
         * its results.
         * @returns {Promise} The tag result list.
         */
        async listTags(options = {}) {
            const url = this.baseUrl + "tags";
            const contents = await this.get(url, options);
            return contents;
        }

        /**
         * Creates a new tag with the provided information.
         *
         * @memberof TagAPI
         * @param {Tag} payload An object that contains information about a tag.
         * @returns {Promise} The created person.
         */
        async createTag(payload) {
            const url = this.baseUrl + "tags";
            const tag = await this.post(url, { dataJ: payload });
            return tag;
        }

        /**
         * Returns the tag with the provided name.
         *
         * @memberof TagAPI
         * @param {String} name The name of the tag.
         * @returns {Promise} The tag requested.
         */
        async getTag(name) {
            const url = this.baseUrl + `tags/${name}`;
            const tag = await this.get(url);
            return tag;
        }

        /**
         * Updates the tag with the provided information.
         *
         * @memberof TagAPI
         * @param {String} name The name of the tag.
         * @param {Object} payload An object that contains information about a tag.
         * @returns {Promise} The updated tag.
         */
        async updateTag(name, payload) {
            const url = this.baseUrl + `tags/${name}`;
            const tag = await this.put(url, { dataJ: payload });
            return tag;
        }

        /**
         * Deletes the tag with the provided name.
         *
         * @memberof TagAPI
         * @param {String} name The name of the tag.
         * @returns {Promise} Empty response..
         */
        async deleteTag(name) {
            const url = this.baseUrl + `tags/${name}`;
            const tag = await this.delete(url);
            return tag;
        }
    };

export default TagAPI;
