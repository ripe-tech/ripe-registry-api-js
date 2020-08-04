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
         * @returns {Promise} The person result list.
         */
        async listPersons() {
            const url = this.baseUrl + "people";
            const contents = await this.get(url);
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
         * @param {Object} body An object that contains information about a person, such as:
         * - 'name' - The name of the person.
         * - 'email' - The e-mail of the person.
         * - 'company' - The person's current place of work.
         * - 'position' - The person's current position/title hold in his/hers company.
         * - 'phone' - The person's current phone number.
         * - 'platformeID' - The person's Platforme username.
         * @returns {Promise} The created person.
         */
        async createPerson(body) {
            const url = this.baseUrl + "people";
            const person = await this.post(url, { dataJ: body });
            return person;
        }

        /**
         * Updates the person with the provided information.
         *
         * @memberof PersonAPI
         * @param {String} email The e-mail of the person.
         * @param {Object} body An object that contains information about a person, such as:
         * - 'name' - The name of the person.
         * - 'company' - The person's current place of work.
         * - 'position' - The person's current position/title hold in his/hers company.
         * - 'phone' - The person's current phone number.
         * - 'platformeID' - The person's Platforme username.
         * @returns {Promise} The updated person.
         */
        async updatePerson(email, body) {
            const url = this.baseUrl + `people/${email}`;
            const person = await this.put(url, { dataJ: body });
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
         * @returns {Promise} The person's projects result list.
         */
        async listPersonProjects(email) {
            const url = this.baseUrl + `people/${email}/projects`;
            const contents = await this.get(url);
            return contents;
        }

        /**
         * Returns the clients of the provided person.
         *
         * @memberof PersonAPI
         * @param {String} email The e-mail of the person.
         * @returns {Promise} The person's clients result list.
         */
        async listPersonClients(email) {
            const url = this.baseUrl + `persons/${email}/clients`;
            const contents = await this.get(url);
            return contents;
        }
    };

export default PersonAPI;
