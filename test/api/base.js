const assert = require("assert");
const ripe = require("../..");

describe("API", function() {
    it("should be able to instantiate the API", async () => {
        const api = new ripe.API();

        assert.strictEqual(Boolean(api.baseUrl), true);
        assert.strictEqual(api.token, null);
    });
});
