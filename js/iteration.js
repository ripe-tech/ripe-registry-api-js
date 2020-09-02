/**
 * @class
 * @classdesc API for the Iteration entities, which represent the review process
 * in a project. It holds information relative to the discussion of changes and
 * revisions in a project.
 */
export const IterationAPI = superclass =>
    class extends superclass {
        /**
         * Returns all iterations in the registry.
         *
         * @memberof IterationAPI
         * @returns {Promise} The iteration result list.
         */
        async listIterations() {
            const url = this.baseUrl + "iterations";
            const contents = await this.get(url);
            return contents;
        }

        /**
         * Returns the iteration with the provided id.
         *
         * @memberof IterationAPI
         * @param {String} id The identifier of the iteration.
         * @returns {Promise} The iteration requested.
         */
        async getIteration(id) {
            const url = this.baseUrl + `iterations/${id}`;
            const iteration = await this.get(url);
            return iteration;
        }

        /**
         * Creates a new iteration with the provided information.
         *
         * @memberof IterationAPI
         * @param {Iteration} payload An object that contains information about an iteration.
         * @returns {Promise} The created iteration.
         */
        async createIteration(payload) {
            const url = this.baseUrl + "iterations";
            const iteration = await this.post(url, { dataJ: payload });
            return iteration;
        }

        /**
         * Updates the iteration with the provided information.
         *
         * @memberof IterationAPI
         * @param {String} id The identified of the iteration.
         * @param {Object} payload An object that contains information about an iteration.
         * @returns {Promise} The updated iteration.
         */
        async updateIteration(id, payload) {
            const url = this.baseUrl + `iterations/${id}`;
            const iteration = await this.put(url, { dataJ: payload });
            return iteration;
        }

        /**
         * Deletes the iteration with the provided identifier.
         *
         * @memberof IterationAPI
         * @param {String} id The identifier of the iteration.
         * @returns {Promise} The deleted iteration.
         */
        async deleteIteration(id) {
            const url = this.baseUrl + `iterations/${id}`;
            const iteration = await this.delete(url);
            return iteration;
        }
    };

export default IterationAPI;
