// ==================== TEST TEMPLATE ========================

// 🐼 In order to add a test create a file with .spec.js extention in "integration" folder.
// At the very top you can import your page objects or functions required for the test
import yourThing from "path/to/your/file";

describe("GROUP OF TESTS", () => {
  beforeEach(() => {
    // 🐼 Ideal place for things that are repetitive for each test
    // like visiting a page or loging in
  });

  it("should DO SOMETHING when SOMETHING HAPPENS", () => {});

  it("should DO SOMETHING ELSE when SOMETHING ELSE HAPPENS", () => {});
});