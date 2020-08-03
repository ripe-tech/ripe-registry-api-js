const assert = require("assert");
const ripe = require("../..");

describe("PersonAPI", function() {
    it("should be able to construct a new person", async () => {
        const api = new ripe.API();
        const person = await api.createPerson({
            name: "Jason A. Barton",
            email: "jasonA@email.com",
            company: "Star Bright Investment Group",
            position: "Engineering technician",
            phone: "682-503-4335"
        });
        assert.strictEqual(person.name, "Jason A. Barton");
        assert.strictEqual(person.email, "jasonA@email.com");
        assert.strictEqual(person.company, "Star Bright Investment Group");
        assert.strictEqual(person.position, "Engineering technician");
        assert.strictEqual(person.phone, "682-503-4335");

        await api.deletePerson("jasonA@email.com");
    });

    it("should be able to list the existing person", async () => {
        const api = new ripe.API();
        await api.createPerson({
            name: "Jason B. Barton",
            email: "jasonB@email.com",
            company: "Star Bright Investment Group",
            position: "Engineering technician",
            phone: "682-503-4335"
        });

        const person = await api.getPerson("jasonB@email.com");
        assert.strictEqual(person.name, "Jason B. Barton");
        assert.strictEqual(person.email, "jasonB@email.com");
        assert.strictEqual(person.company, "Star Bright Investment Group");
        assert.strictEqual(person.position, "Engineering technician");
        assert.strictEqual(person.phone, "682-503-4335");

        await api.deletePerson("jasonB@email.com");
    });

    it("should be able to update an existing person", async () => {
        const api = new ripe.API();
        await api.createPerson({
            name: "Jason C. Barton",
            email: "jasonC@email.com",
            company: "Star Bright Investment Group",
            position: "Engineering technician",
            phone: "682-503-4335"
        });

        const person = await api.updatePerson("jasonC@email.com", {
            position: "Engineering manager"
        });
        assert.strictEqual(person.name, "Jason C. Barton");
        assert.strictEqual(person.email, "jasonC@email.com");
        assert.strictEqual(person.company, "Star Bright Investment Group");
        assert.strictEqual(person.position, "Engineering manager");
        assert.strictEqual(person.phone, "682-503-4335");

        await api.deletePerson("jasonC@email.com");
    });

    it("should be able to delete an existing person", async () => {
        const api = new ripe.API();
        await api.createPerson({
            name: "Jason D. Barton",
            email: "jasonD@email.com",
            company: "Star Bright Investment Group",
            position: "Engineering technician",
            phone: "682-503-4335"
        });

        const person = await api.deletePerson("jasonD@email.com");
        assert.strictEqual(person.name, "Jason D. Barton");
        assert.strictEqual(person.email, "jasonD@email.com");
        assert.strictEqual(person.company, "Star Bright Investment Group");
        assert.strictEqual(person.position, "Engineering technician");
        assert.strictEqual(person.phone, "682-503-4335");
    });
});
