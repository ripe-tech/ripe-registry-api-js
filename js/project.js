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
         * @returns {Promise} The project result list.
         */
        async listProjects() {
            const url = this.baseUrl + "projects";
            const contents = await this.get(url);
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
         * @returns {Promise} The project's iterations result list.
         */
        async listProjectIterations(name) {
            const url = this.baseUrl + `projects/${name}/iterations`;
            const contents = await this.get(url);
            return contents;
        }

        /**
         * Returns the iteration with the provided id within a given project.
         *
         * @memberof ProjectAPI
         * @param {String} name The name of the project.
         * @param {String} id The identifier of the iteration.
         * @returns {Promise} The iteration requested.
         */
        async getProjectIteration(name, id) {
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
        async createProjectIteration(name, payload) {
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
        async updateProjectIteration(name, id, payload) {
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
        async deleteProjectIteration(name, id) {
            const url = this.baseUrl + `projects/${name}/iterations/${id}`;
            const iteration = await this.delete(url);
            return iteration;
        }
    };

export default ProjectAPI;
