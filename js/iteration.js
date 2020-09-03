/**
 * @class
 * @classdesc API for the Iteration entities, which represent the review process
 * in a project. It holds information relative to the discussion of changes and
 * revisions in a project.
 */
export const IterationAPI = superclass =>
    class extends superclass {
        /**
         * Returns all iterations for a given project.
         *
         * @memberof IterationAPI
         * @param {String} projectName The name of the project.
         * @returns {Promise} The iteration result list.
         */
        async listIterations(projectName) {
            const url = this.baseUrl + `projects/${projectName}/iterations`;
            const contents = await this.get(url);
            return contents;
        }

        /**
         * Returns the iteration with the provided id within a given project.
         *
         * @memberof IterationAPI
         * @param {String} projectName The name of the project.
         * @param {String} id The identifier of the iteration.
         * @returns {Promise} The iteration requested.
         */
        async getIteration(projectName, id) {
            const url = this.baseUrl + `projects/${projectName}/iterations/${id}`;
            const iteration = await this.get(url);
            return iteration;
        }

        /**
         * Creates a new iteration with the provided information within a given project.
         *
         * @memberof IterationAPI
         * @param {String} projectName The name of the project.
         * @param {Iteration} payload An object that contains information about an iteration.
         * @returns {Promise} The created iteration.
         */
        async createIteration(projectName, payload) {
            const url = this.baseUrl + `projects/${projectName}/iterations`;
            const iteration = await this.post(url, { dataJ: payload });
            return iteration;
        }

        /**
         * Updates the iteration with the provided information.
         *
         * @memberof IterationAPI
         * @param {String} projectName The name of the project.
         * @param {String} id The identified of the iteration.
         * @param {Object} payload An object that contains information about an iteration.
         * @returns {Promise} The updated iteration.
         */
        async updateIteration(projectName, id, payload) {
            const url = this.baseUrl + `projects/${projectName}/iterations/${id}`;
            const iteration = await this.put(url, { dataJ: payload });
            return iteration;
        }

        /**
         * Deletes the iteration within a given project with the provided identifier.
         *
         * @memberof IterationAPI
         * @param {String} projectName The name of the project.
         * @param {String} id The identifier of the iteration.
         * @returns {Promise} The deleted iteration.
         */
        async deleteIteration(projectName, id) {
            const url = this.baseUrl + `projects/${projectName}/iterations/${id}`;
            const iteration = await this.delete(url);
            return iteration;
        }
    };

export default IterationAPI;
