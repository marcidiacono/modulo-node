const Todos = require("./index");
const assert = require("assert").strict

describe("test de integración", function() {
    it("debería ser posible agregar una tarea y completarla", function() {
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
    it("otra prueba", function() {
        
    })
});

