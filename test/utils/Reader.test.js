const Reader = require("../../lib/utils/Reader");

describe("Test para Reader", () => {
    test("Test para leer un archivo json", () => {
        const rawdata = Reader.readJsonFile("visualpartners.json");
        expect(rawdata).toBeDefined();
    });
});