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
        async getProjects() {
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
         * @param {Object} body An object that contains information about a project, such as:
         * - 'name' - The unique project's name, used to identify and differentiate from the other projects.
         * - 'description' - The project's description, containing information about the project.
         * - 'client' -  The client's name that represents the client on which this project is destined to.
         * - 'manager' - The person managing the project, identified by its e-mail.
         * @returns {Promise} The created project.
         */
        async createProject(body) {
            const url = this.baseUrl + "projects";
            const project = await this.post(url, { dataJ: body });
            return project;
        }

        /**
         * Updates the project with the provided information.
         *
         * @memberof ProjectAPI
         * @param {String} name The name of the project.
         * @param {Object} body An object that contains the updated information about the project, such as:
         * - 'name' - The unique project's name, used to identify and differentiate from the other projects.
         * - 'description' - The project's description, containing information about the project.
         * - 'client' -  The client's name that represents the client on which this project is destined to.
         * - 'manager' - The person managing the project, identified by its e-mail.
         * @returns {Promise} The updated project.
         */
        async updateProject(name, body) {
            const url = this.baseUrl + `projects/${name}`;
            const project = await this.post(url, { dataJ: body });
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
        async getProjectIterations(name) {
            const url = this.baseUrl + `projects/${name}/iterations`;
            const contents = await this.get(url);
            return contents;
        }
    };

export default ProjectAPI;
