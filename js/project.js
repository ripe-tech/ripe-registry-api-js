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
        async listProjects(options = {}) {
            const url = this.baseUrl + "projects";
            const contents = await this.get(url, options);
            return contents;
        }
    };

export default ProjectAPI;
