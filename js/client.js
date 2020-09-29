/**
 * @class
 * @classdesc API for the Client entities, which represent some brand or company.
 */
export const ClientAPI = superclass =>
    class extends superclass {
        /**
         * Returns all clients in the registry.
         *
         * @memberof ClientAPI
         * @param {Object} options An object of options to configure the query and
         * its results.
         * @returns {Promise} The client result list.
         */
        async listClients(options = {}) {
            const url = this.baseUrl + "clients";
            const contents = await this.get(url, options);
            return contents;
        }

        /**
         * Returns the client with the provided name.
         *
         * @memberof ClientAPI
         * @param {String} name The name of the client.
         * @returns {Promise} The client requested.
         */
        async getClient(name) {
            const url = this.baseUrl + `clients/${name}`;
            const client = await this.get(url);
            return client;
        }

        /**
         * Creates a new client with the provided information.
         *
         * @memberof ClientAPI
         * @param {Client} payload An object that contains information about a client.
         * @returns {Promise} The created client.
         */
        async createClient(payload) {
            const url = this.baseUrl + "clients";
            const client = await this.post(url, { dataJ: payload });
            return client;
        }

        /**
         * Updates the client with the provided information.
         *
         * @memberof ClientAPI
         * @param {String} name The name of the client.
         * @param {Object} payload An object that contains information about a client.
         * @returns {Promise} The updated client.
         */
        async updateClient(name, payload) {
            const url = this.baseUrl + `clients/${name}`;
            const client = await this.put(url, { dataJ: payload });
            return client;
        }

        /**
         * Deletes the client with the provided name.
         *
         * @memberof ClientAPI
         * @param {String} name The name of the client.
         * @returns {Promise} Empty response.
         */
        async deleteClient(name) {
            const url = this.baseUrl + `clients/${name}`;
            const client = await this.delete(url);
            return client;
        }

        /**
         * Returns the projects of the provided client.
         *
         * @memberof ClientAPI
         * @param {String} name The name of the client.
         * @param {Object} options An object of options to configure the query and
         * its results.
         * @returns {Promise} The client's projects result list.
         */
        async listProjectsClient(name, options = {}) {
            const url = this.baseUrl + `clients/${name}/projects`;
            const contents = await this.get(url, options);
            return contents;
        }

        /**
         * Returns a project of the provided client.
         *
         * @memberof ClientAPI
         * @param {String} name The name of the client.
         * @param {String} project The name of the project.
         * @returns {Promise} The requested client's project.
         */
        async getProjectClient(name, project) {
            const url = this.baseUrl + `clients/${name}/projects/${project}`;
            const projectContent = await this.get(url);
            return projectContent;
        }

        /**
         * Creates a new project for the provided client.
         *
         * @memberof ClientAPI
         * @param {String} name The name of the client.
         * @param {Project} payload An object that contains information about a project.
         * @returns {Promise} The newly created client's project.
         */
        async createProjectClient(name, payload) {
            const url = this.baseUrl + `clients/${name}/projects`;
            const projectContent = await this.post(url, { dataJ: payload });
            return projectContent;
        }

        /**
         * Updates a project of the provided client.
         *
         * @memberof ClientAPI
         * @param {String} name The name of the client.
         * @param {String} project The name of the project.
         * @param {Object} payload An object that contains information about a project.
         * @returns {Promise} The updated client's project.
         */
        async updateProjectClient(name, project, payload) {
            const url = this.baseUrl + `clients/${name}/projects/${project}`;
            const projectContent = await this.put(url, { dataJ: payload });
            return projectContent;
        }

        /**
         * Deletes a project of the provided client.
         *
         * @memberof ClientAPI
         * @param {String} name The name of the client.
         * @param {String} project The name of the project.
         * @returns {Promise} Empty response.
         */
        async deleteProjectClient(name, project) {
            const url = this.baseUrl + `clients/${name}/projects/${project}`;
            const projectContent = await this.delete(url);
            return projectContent;
        }

        /**
         * Returns a client's project iterations.
         *
         * @memberof ClientAPI
         * @param {String} name The name of the client.
         * @param {String} project The name of the project.
         * @param {Object} options An object of options to configure the query and
         * its results.
         * @returns {Promise} The client's project iterations result list.
         */
        async listIterationsProject(name, project, options = {}) {
            const url = this.baseUrl + `clients/${name}/projects/${project}/iterations`;
            const contents = await this.get(url, options);
            return contents;
        }

        /**
         * Returns a client's project iteration.
         *
         * @memberof ClientAPI
         * @param {String} name The name of the client.
         * @param {String} project The name of the project.
         * @param {String} iteration The name of the iteration.
         * @returns {Promise} The requested client's project iteration.
         */
        async getIterationProject(name, project, iteration) {
            const url =
                this.baseUrl + `clients/${name}/projects/${project}/iterations/${iteration}`;
            const iterationContent = await this.get(url);
            return iterationContent;
        }

        /**
         * Creates a new iteration for the provided project.
         *
         * @memberof ClientAPI
         * @param {String} name The name of the client.
         * @param {String} project The name of the project.
         * @param {Iteration} payload An object that contains information about an iteration.
         * @returns {Promise} The newly created iteration.
         */
        async createIterationProject(name, project, payload) {
            const url = this.baseUrl + `clients/${name}/projects/${project}/iterations`;
            const iterationContent = await this.post(url, { dataJ: payload });
            return iterationContent;
        }

        /**
         * Updates an iteration of the provided project.
         *
         * @memberof ClientAPI
         * @param {String} name The name of the client.
         * @param {String} project The name of the project.
         * @param {String} iteration The name of the iteration.
         * @param {Object} payload An object that contains information about an iteration.
         * @returns {Promise} The updated iteration.
         */
        async updateIterationProject(name, project, iteration, payload) {
            const url =
                this.baseUrl + `clients/${name}/projects/${project}/iterations/${iteration}`;
            const iterationContent = await this.put(url, { dataJ: payload });
            return iterationContent;
        }

        /**
         * Deletes an iteration of the provided project.
         *
         * @memberof ClientAPI
         * @param {String} name The name of the client.
         * @param {String} project The name of the project.
         * @param {String} iteration The name of the iteration.
         * @returns {Promise} Empty response.
         */
        async deleteIterationProject(name, project, iteration) {
            const url =
                this.baseUrl + `clients/${name}/projects/${project}/iterations/${iteration}`;
            const iterationContent = await this.delete(url);
            return iterationContent;
        }

        /**
         * Returns an iteration's reviews.
         *
         * @memberof ClientAPI
         * @param {String} name The name of the client.
         * @param {String} project The name of the project.
         * @param {String} iteration The name of the iteration.
         * @param {Object} options An object of options to configure the query and
         * its results.
         * @returns {Promise} The iteration's reviews result list.
         */
        async listReviewsIteration(name, project, iteration, options = {}) {
            const url =
                this.baseUrl +
                `clients/${name}/projects/${project}/iterations/${iteration}/reviews`;
            const contents = await this.get(url, options);
            return contents;
        }

        /**
         * Returns an iteration's review.
         *
         * @memberof ClientAPI
         * @param {String} name The name of the client.
         * @param {String} project The name of the project.
         * @param {String} iteration The name of the iteration.
         * @param {String} review The name of the review.
         * @returns {Promise} The requested iteration's review.
         */
        async getReviewIteration(name, project, iteration, review) {
            const url =
                this.baseUrl +
                `clients/${name}/projects/${project}/iterations/${iteration}/reviews/${review}`;
            const reviewContent = await this.get(url);
            return reviewContent;
        }

        /**
         * Creates a new review for the provided iteration.
         *
         * @memberof ClientAPI
         * @param {String} name The name of the client.
         * @param {String} project The name of the project.
         * @param {String} iteration The name of the iteration.
         * @param {Review} payload An object that contains information about a review.
         * @returns {Promise} The newly created iteration.
         */
        async createReviewIteration(name, project, iteration, payload) {
            const url =
                this.baseUrl +
                `clients/${name}/projects/${project}/iterations/${iteration}/reviews`;
            const reviewContent = await this.post(url, { dataJ: payload });
            return reviewContent;
        }

        /**
         * Updates a review of the provided iteration.
         *
         * @memberof ClientAPI
         * @param {String} name The name of the client.
         * @param {String} project The name of the project.
         * @param {String} iteration The name of the iteration.
         * @param {String} review The name of the review.
         * @param {Object} payload An object that contains information about a review.
         * @returns {Promise} The updated review.
         */
        async updateReviewIteration(name, project, iteration, review, payload) {
            const url =
                this.baseUrl +
                `clients/${name}/projects/${project}/iterations/${iteration}/reviews/${review}`;
            const reviewContent = await this.put(url, { dataJ: payload });
            return reviewContent;
        }

        /**
         * Deletes a review of the provided review.
         *
         * @memberof ClientAPI
         * @param {String} name The name of the client.
         * @param {String} project The name of the project.
         * @param {String} iteration The name of the iteration.
         * @param {String} review The name of the review.
         * @returns {Promise} Empty response.
         */
        async deleteReviewIteration(name, project, iteration, review) {
            const url =
                this.baseUrl +
                `clients/${name}/projects/${project}/iterations/${iteration}/reviews/${review}`;
            const reviewContent = await this.delete(url);
            return reviewContent;
        }
    };

export default ClientAPI;
