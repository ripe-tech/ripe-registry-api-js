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
         * @returns {Promise} The client result list.
         */
        async getClients() {
            const url = this.baseUrl + "clients";
            console.log(url);
            const contents = await this.get(url);
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
         * @param {Object} body An object that contains information about a client, such as:
         * - 'name' - The name of the client.
         * - 'website' - The client's website URL.
         * - 'accountManager' - The person that manages the client's account, identified by its e-mail.
         * - 'clientRepresentative' - The person representing the client, identified by its e-mail.
         * @returns {Promise} The created client.
         */
        async createClient(body) {
            const url = this.baseUrl + "clients";
            const client = await this.post(url, { dataJ: body });
            return client;
        }

        /**
         * Updates the client with the provided information.
         *
         * @memberof ClientAPI
         * @param {String} name The name of the client.
         * @param {Object} body An object that contains information about a client, such as:
         * - 'name' - The name of the client.
         * - 'website' - The client's website URL.
         * - 'accountManager' - The person that manages the client's account, identified by its e-mail.
         * - 'clientRepresentative' - The person representing the client, identified by its e-mail.
         * @returns {Promise} The updated client.
         */
        async updateClient(name, body) {
            const url = this.baseUrl + `clients/${name}`;
            const client = await this.post(url, { dataJ: body });
            return client;
        }

        /**
         * Deletes the client with the provided name.
         *
         * @memberof ClientAPI
         * @param {String} name The name of the client.
         * @returns {Promise} The deleted client.
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
         * @param {String} email name The name of the client.
         * @returns {Promise} The client's projects result list.
         */
        async getClientProjects(name) {
            const url = this.baseUrl + `clients/${name}/projects`;
            const contents = await this.get(url);
            return contents;
        }
    };

export default ClientAPI;
