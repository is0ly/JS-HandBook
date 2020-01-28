// ? In computer science, type conversion, type casting, type coercion, and type juggling are different ways
// ? of changing an expression from one data type to another. An example would be the conversion of an integer
// ? value into a floating point value or its textual representation as a string, and vice versa.
// ? Type conversions can take advantage of certain features of type hierarchies or data representations.
// ? Two important aspects of a type conversion are whether it happens implicitly (automatically) or explicitly,
// ? and whether the underlying data representation is converted from one representation into another,
// ? or a given representation is merely reinterpreted as the representation of another data type.
// ? In general, both primitive and compound data types can be converted.

let language = "JavaScript";

if (language) {
    console.log(`The best language is ${language}`);
}

// * Falsy values - '', 0, null, undefined, NaN, false
console.log(Boolean(""));
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(NaN));
console.log(Boolean(false));

console.log(Boolean("null"));
console.log(Boolean([]));
console.log(Boolean({}));
console.log(Boolean(function() {}));

// =============================================================================================================

console.log(1 + "1"); // string  JS использует плюс как оператор конкатенации и приводит 1 к строковому формату
console.log("" + 1 + 0); // string То же что и выше
console.log("" - 1 + 0); // number -1 - Для строк не определён оператор минус (0 - 1 + 0) выполняет слева направо
console.log("3" * "8"); // number - для строк не определён оператор *
console.log(4 + 10 + "px"); //string
console.log("px" + 4 + 10); //string
console.log("42" - 2); //number
console.log("42px" - 2); //NaN
console.log(null + 2); // number
console.log(undefined + 42); //NaN

// == vs ===

console.log(2 == "2");
console.log(2 === "2");
console.log(undefined == null);
console.log(undefined === null);

console.log("0" == false); // Пытается всё привести к числу при ==
console.log("0" == 0);
console.log(0 == 0);
console.log(0 === 0);

//========================================================================================================
console.log(false == "");
console.log(false == []);
console.log(false == {});
console.log("" == 0);
console.log("" == []);
console.log("" == {});
console.log(0 == []);
console.log(0 == {});
console.log(0 == null);
