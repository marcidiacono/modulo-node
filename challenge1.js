const str1 = `{
    "first_prop" : "Una cadena de texto",
    "second_prop" : 125.30,
    "third_prop" : [
        {
            "sub_prop_1" : "Descripción - 1",
            "sub_prop_2" : 200
        },
        {
            "sub_prop_1" : "Descripción - 2",
            "sub_prop_2" : 100
        }
    ],
    "forth_prop" : true,
    "fifth_prop" : null,
    "sixth_prop" : [ 12, 33, 45]
}`;

const str2 = `{
    "first_prop" : "Una cadena de texto",
    "second_prop" : 125.30,
    "third_prop" : [
        {
            "sub_prop_1" : "Descripción - 1"
        },
        {
            "sub_prop_1" : "Descripción - 2",
            "sub_prop_2" : 100,
            "sub_prop_3" : false
        },
        {
            "sub_prop_1" : true,
            "sub_prop_2" : null,
            "sub_prop_3" : "hola"
        }
    ],
    "fourth_prop" : true,
    "fifth_prop" : [
        {
            "sub_prop_1" : "Descripción - 1",
            "sub_prop_2" : 200
        },
        {
            "sub_prop_1" : "Descripción - 2",
            "sub_prop_2" : false
        }

    ],
    "sixth_prop" : null
}`;

str3 = `[
    {"first_prop" : "Una cadena de texto",
    "second_prop" : 125.30},
    {"first_prop" : "Una cadena de texto",
    "second_prop" : 125.30},
    {"first_prop" : "Una cadena de texto",
    "second_prop" : 125.30}
]
`

let obj = getObj(str1);
console.log(obj);

function getObj(str) {
    let obj = {};
    let appendK = true;
    let appendV = false;
    let key = "";
    let value = "";
    let arr = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "{") {
            let result = content(str.slice(i), "{", "}");
            obj = getObj(result);
            i = i + result.length;
        }
        if (str[i] === "[") {
            let result = content(str.slice(i), "[", "]");
            arr = getArray(result);
            i = i + result.length;
        }
        if (str[i] === ':') {
            i = i + 1;
            appendK = false;
            appendV = true;
        }
        if (str[i] === ",") {
            i = i + 1;
            appendK = true;
            appendV = false;
            key = key.trim().slice(1, -1);
            value = value.trim();
            if (typeof(arr) === "object") {
                obj[key] = new Object(arr);
                arr = '';
            } else {
                obj[key] = getValue(value);
            }
            key = "";
            value = "";
        }
        if (appendK) {
            key += str[i];
        }
        if (appendV) {
            value += str[i];
        }
    } 
    key = key.trim().slice(1, -1);
    value = value.trim();
    if(key) {
        if (typeof(arr) === "object") {
            obj[key] = new Object(arr);
            arr = '';
        } else {
            obj[key] = getValue(value);
        }
    }
    return obj;
}

function getArray(str) {
    let arr = [];
    let obj = {};
    if (str.includes("{") || str.includes("[")) {
        for (let i = 0; i < str.length; i++) {
            if (str[i] === "{") {
                let result = content(str.slice(i), "{", "}");
                obj = getObj(result);
                i = i + result.length;
                arr.push(obj);
            }
            if (str[i] === "[") {
                let result = content(str.slice(i), "[", "]");
                let arrAux = getArray(result);
                i = i + result.length;
                arr.push(arrAux);
            }
        }
    } else {
        arr = (str.split(",")).map( element => {
            return getValue(element);
        });
    }
    return arr;
}

function content(str, bof, eof) {
    const stack = [bof]; 
    for (let i = 1; i < str.length; i++) {
        if (str[i] === bof) {
            stack.push(bof);
        }
        if (str[i] === eof) {
            stack.pop();
        }
        if (stack.length == 0) {
            return str.slice(1, i);
        }
    } 
}

function getValue(value) {
    if (value.includes('"')) {
        return String(value.slice(1, -1));
    }
    if (value === "true" || value === "false") {
        return value === "true";
    }
    if (value === "null") {
        return null;
    }
    return Number(value); 
}