
/*
  template: string containing javascript expressions
  obj: an object whose fields may be used in templates js expressions
*/
function embedObject(template, obj) {
  var keys = Object.keys(obj);
  var func = Function(...keys, "return `" + template + "`;");
  return func(...keys.map(k => obj[k]));
}

//
// Possible Pseudo commands below:
//

/* declarations */
let define_function =
  ["function ${name} () {",
    "",
  "}" ];
let define_variable = ["var ${name} = ${value};"];

/* control flow */
let if_statement =
  ["if (${condition}) {",
    "${body}",
  "}"];
let else_statement =
  ["else {",
    "${body}",
  "}"];

/* loops */
let for_loop =
  ["for (let i = ${initial_statement}, i < ${loop_condition}, i${update_statement} ) {",
      "${body}",
    "}" ];
let while_loop =
  ["while (${condition}) {",
    "${body}",
  "}" ];

/* misc */
let comment = ["/* ${comment} */"];
let goto = "";

export default function (LUIS_json, dataObj) {
    let theIntent = LUIS_json.topScoringIntent;
    let entities = LUIS_json.entities;

    let dataArr = dataObj.dataArr;
    let position = dataObj.currPosition; // where to insert code

    let makeCode = []; // code array needs to be inserted after dataArr[position] and
                       // dataArr must be flattened

    switch(theintent) {
      case "define_function":
        break;
      case "define_variable":
        // code block
        break;
      default:
        // code block
    }

    return {
      dataArr: ["var x;"],
      currPosition: dataArr.length
    }
}
