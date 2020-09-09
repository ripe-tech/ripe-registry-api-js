/**
 * @class
 * @classdesc API for the Person entities, which represent someone within
 * the ripe-registry ecosystem. It includes project managers, client
 * representatives, 3D builders, etc.
 */
export const PersonAPI = superclass =>
    class extends superclass {
        /**
         * Returns all persons in the registry.
         *
         * @memberof PersonAPI
         * @param {Object} options An object of options to configure the query and
         * its results.
         * @returns {Promise} The person result list.
         */
        async listPersons(options = {}) {
            const url = this.baseUrl + "people";
            const contents = await this.get(url, options);
            return contents;
        }

        /**
         * Returns the person with the provided e-mail.
         *
         * @memberof PersonAPI
         * @param {String} email The e-mail of the person.
         * @returns {Promise} The person requested.
         */
        async getPerson(email) {
            const url = this.baseUrl + `people/${email}`;
            const person = await this.get(url);
            return person;
        }

        /**
         * Creates a new person with the provided information.
         *
         * @memberof PersonAPI
         * @param {Person} payload An object that contains information about a person.
         * @returns {Promise} The created person.
         */
        async createPerson(payload) {
            const url = this.baseUrl + "people";
            const person = await this.post(url, { dataJ: payload });
            return person;
        }

        /**
         * Updates the person with the provided information.
         *
         * @memberof PersonAPI
         * @param {String} email The e-mail of the person.
         * @param {Object} payload An object that contains information about a person.
         * @returns {Promise} The updated person.
         */
        async updatePerson(email, payload) {
            const url = this.baseUrl + `people/${email}`;
            const person = await this.put(url, { dataJ: payload });
            return person;
        }

        /**
         * Deletes the person with the provided e-mail.
         *
         * @memberof PersonAPI
         * @param {String} email The e-mail of the person.
         * @returns {Promise} The deleted person.
         */
        async deletePerson(email) {
            const url = this.baseUrl + `people/${email}`;
            const person = await this.delete(url);
            return person;
        }

        /**
         * Returns the projects of the provided person.
         *
         * @memberof PersonAPI
         * @param {String} email The e-mail of the person.
         * @param {Object} options An object of options to configure the query and
         * its results.
         * @returns {Promise} The person's projects result list.
         */
        async listPersonProjects(email, options = {}) {
            const url = this.baseUrl + `people/${email}/projects`;
            const contents = await this.get(url, options);
            return contents;
        }

        /**
         * Returns the clients of the provided person.
         *
         * @memberof PersonAPI
         * @param {String} email The e-mail of the person.
         * @param {Object} options An object of options to configure the query and
         * its results.
         * @returns {Promise} The person's clients result list.
         */
        async listPersonClients(email, options = {}) {
            const url = this.baseUrl + `persons/${email}/clients`;
            const contents = await this.get(url, options);
            return contents;
        }
    };

export default PersonAPI;
