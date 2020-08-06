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
         * @param {Object} payload An object that contains information about an iteration, such as:
         * - 'name' - The iteration's name.
         * - 'project' - The project in which the iteration belongs to, identified by its name.
         * - 'number' - The number of times the iteration was updated.
         * - 'owner' -  The person who started the iteration and is responsible for the iteration changes, identified by its e-mail.
         * - 'reviewer' - The person who is set as reviewer. This person is the responsible for the review of the iteration and decide to approve or reject the iteration, identified by its e-mail.
         * - 'description' - The iteration's description, used as field to describe and in general add more information about the changes in the iteration.
         * - 'tags' - An array that contains the tags that categorize the iteration.
         * - 'files' - An array that contains the iteration's attached files.
         * - 'messages' - A array that contains the messages sent back and forth between the iteration's owner and reviewer through the iteration's duration.
         * - 'status'- The iteration's current status, can have three values: "opened", "approved" or "rejected".
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
         * @param {Object} payload An object that contains information about an iteration, such as:
         * - 'name' - The iteration's name.
         * - 'project' - The project in which the iteration belongs to, identified by its name.
         * - 'number' - The number of times the iteration was updated.
         * - 'owner' -  The person who started the iteration and is responsible for the iteration changes, identified by its e-mail.
         * - 'reviewer' - The person who is set as reviewer. This person is the responsible for the review of the iteration and decide to approve or reject the iteration, identified by its e-mail.
         * - 'description' - The iteration's description, used as field to describe and in general add more information about the changes in the iteration.
         * - 'tags' - An array that contains the tags that categorize the iteration.
         * - 'files' - An array that contains the iteration's attached files.
         * - 'messages' - A array that contains the messages sent back and forth between the iteration's owner and reviewer through the iteration's duration.
         * - 'status'- The iteration's current status, can have three values: "opened", "approved" or "rejected".
         * @returns {Promise} The updated iteration.
         */
        async updateIteration(id, payload) {
            const url = this.baseUrl + `iterations/${id}`;
            const iteration = await this.post(url, { dataJ: payload });
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
