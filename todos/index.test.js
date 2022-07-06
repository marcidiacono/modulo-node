const Todos = require("./index");
const assert = require("assert").strict
const fs = require("fs");

describe("test de integración", function() {
    it("Debería ser posible agregar una tarea y completarla", function() {
        let todos = new Todos();
        assert.strictEqual(todos.list().length, 0);
        todos.add("Lavar los platos");
        assert.strictEqual(todos.list().length, 1);
        assert.deepStrictEqual(todos.list(), [{title: "Lavar los platos", completed: false}]);
        todos.add("Estudiar Node.js");
        assert.strictEqual(todos.list().length, 2);
        assert.deepStrictEqual(todos.list(), [
            {title: "Lavar los platos", completed: false},
            {title: "Estudiar Node.js", completed: false}
        ]);
        todos.complete("Lavar los platos");
        assert.deepStrictEqual(todos.list(), [
            {title: "Lavar los platos", completed: true},
            {title: "Estudiar Node.js", completed: false}
        ]);
    });
});

describe("complete() tests", function() {
    it("Debería fallar si no hay tareas en TODOs", function() {
        let todos = new Todos();
        const expectedError = new Error("No hay tareas agregadas.");
        assert.throws(() => {
            todos.complete("Algo que no existe");
        }, expectedError);
    });
});

describe("saveToFile() tests", function() {
    it("Debería guardarse un TODO simple", function(done) {
        let todos = new Todos();
        todos.add("Grabar la sesión");
        todos.saveToFile(err => {
            assert.strictEqual(fs.existsSync("todos.csv"), true);
            let expectedContent = "Title,Completed\nGrabar la sesión, false\n";
            let content = fs.readFileSync("todos.csv").toString();
            assert.strictEqual(content, expectedContent);
            done(err);
        }); 
    });
});

describe("saveToFilePromise() tests", function() {
    it("Debería guardarse un TODO simple", function() {
        let todos = new Todos();
        todos.add("Grabar la sesión");
        return todos.saveToFilePromise().then(() => {
            assert.strictEqual(fs.existsSync("todos.csv"), true);
            let expectedContent = "Title,Completed\nGrabar la sesión, false\n";
            let content = fs.readFileSync("todos.csv").toString();
            assert.strictEqual(content, expectedContent);
        });
    });
});

describe("saveToFileAsyncAwait() tests", function() {
    beforeEach(function() {
        this.todos = new Todos();
        this.todos.add("Grabar la sesión");
    });

    it("Debería guardarse un TODO simple", async function() {
        await this.todos.saveToFileAsyncAwait();
        assert.strictEqual(fs.existsSync("todos.csv"), true);
        let expectedContent = "Title,Completed\nGrabar la sesión, false\n";
        let content = fs.readFileSync("todos.csv").toString();
        assert.strictEqual(content, expectedContent);
    });
});


describe("", function() {
    before(function() {
        // Este código se ejecutará una vez antes de la primer prueba.
    })

    it("", function() {

    });
    it("", function() {

    });
    it("", function() {

    });
    it("", function() {

    });
});