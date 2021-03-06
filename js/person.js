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
         * @returns {Promise} Empty response.
         */
        async deletePerson(email) {
            const url = this.baseUrl + `people/${email}`;
            const person = await this.delete(url);
            return person;
        }
    };

export default PersonAPI;
