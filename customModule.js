// late 2018

exports.customFunctionName = (someParameter) => {
	console.log(`the parameter has been: ${someParameter}`)
};

exports.anotherCustomFunction = () => {
	console.log("this function does nothing")
};

// ----------------------------------------------------------------

// to use this module:

// const customModule = require("./customModule");
// or
// import customModule from "./customModule";

// customModule.customFunctionName("String")
// customModule.anotherCustomFunction()