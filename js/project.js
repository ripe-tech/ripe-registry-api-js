/**
 * @class
 * @classdesc API for the Project entities, which represent a client's project.
 *  The project also has a Person responsible for its management.
 */
export const ProjectAPI = superclass =>
    class extends superclass {
        /**
         * Returns all projects in the registry.
         *
         * @memberof ProjectAPI
         * @param {Object} options An object of options to configure the query and
         * its results.
         * @returns {Promise} The project result list.
         */
        async listProjects(options) {
            const url = this.baseUrl + "projects";
            const contents = await this.get(url, options);
            return contents;
        }

        /**
         * Returns the project with the provided name.
         *
         * @memberof ProjectAPI
         * @param {String} name The name of the project.
         * @returns {Promise} The project requested.
         */
        async getProject(name) {
            const url = this.baseUrl + `projects/${name}`;
            const project = await this.get(url);
            return project;
        }

        /**
         * Creates a new project with the provided information.
         *
         * @memberof ProjectAPI
         * @param {Project} payload An object that contains information about a project.
         * @returns {Promise} The created project.
         */
        async createProject(payload) {
            const url = this.baseUrl + "projects";
            const project = await this.post(url, { dataJ: payload });
            return project;
        }

        /**
         * Updates the project with the provided information.
         *
         * @memberof ProjectAPI
         * @param {String} name The name of the project.
         * @param {Object} payload An object that contains the updated information about the project.
         * @returns {Promise} The updated project.
         */
        async updateProject(name, payload) {
            const url = this.baseUrl + `projects/${name}`;
            const project = await this.put(url, { dataJ: payload });
            return project;
        }

        /**
         * Deletes the project with the provided name.
         *
         * @memberof ProjectAPI
         * @param {String} name The name of the project.
         * @returns {Promise} The deleted project.
         */
        async deleteProject(name) {
            const url = this.baseUrl + `projects/${name}`;
            const project = await this.delete(url);
            return project;
        }

        /**
         * Returns the iterations of the provided project.
         *
         * @memberof ProjectAPI
         * @param {String} name The name of the project.
         * @param {Object} options An object of options to configure the query and
         * its results.
         * @returns {Promise} The project's iterations result list.
         */
        async listIterationsProject(name, options) {
            const url = this.baseUrl + `projects/${name}/iterations`;
            const iterations = await this.get(url, options);
            return iterations;
        }

        /**
         * Returns the iteration with the provided id within a given project.
         *
         * @memberof ProjectAPI
         * @param {String} name The name of the project.
         * @param {String} id The identifier of the iteration.
         * @returns {Promise} The iteration requested.
         */
        async getIterationProject(name, id) {
            const url = this.baseUrl + `projects/${name}/iterations/${id}`;
            const iteration = await this.get(url);
            return iteration;
        }

        /**
         * Creates a new iteration with the provided information within a given project.
         *
         * @memberof ProjectAPI
         * @param {String} name The name of the project.
         * @param {Iteration} payload An object that contains information about an iteration.
         * @returns {Promise} The created iteration.
         */
        async createIterationProject(name, payload) {
            const url = this.baseUrl + `projects/${name}/iterations`;
            const iteration = await this.post(url, { dataJ: payload });
            return iteration;
        }

        /**
         * Updates the iteration with the provided information.
         *
         * @memberof ProjectAPI
         * @param {String} name The name of the project.
         * @param {String} id The identified of the iteration.
         * @param {Object} payload An object that contains information about an iteration.
         * @returns {Promise} The updated iteration.
         */
        async updateIterationProject(name, id, payload) {
            const url = this.baseUrl + `projects/${name}/iterations/${id}`;
            const iteration = await this.put(url, { dataJ: payload });
            return iteration;
        }

        /**
         * Deletes the iteration within a given project with the provided identifier.
         *
         * @memberof ProjectAPI
         * @param {String} name The name of the project.
         * @param {String} id The identifier of the iteration.
         * @returns {Promise} The deleted iteration.
         */
        async deleteIterationProject(name, id) {
            const url = this.baseUrl + `projects/${name}/iterations/${id}`;
            const iteration = await this.delete(url);
            return iteration;
        }
    };

export default ProjectAPI;
