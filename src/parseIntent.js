
/*
  template: string containing javascript expressions
  obj: an object whose fields may be used in templates js expressions
*/
function embedObject(template, obj) {
  var keys = Object.keys(obj);
  var func = Function(...keys, "return `" + template + "`;");
  return func(...keys.map(k => obj[k]));
}

function getEntitiyData(entities, field) {
  let returnField = "";
  entities.forEach(function(el) {
    returnField = (el.type == field) ? el.entity : returnField;
  });
  return returnField;
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
    "\t ${body}",
  "}"];
let else_statement =
  ["else {",
    "\t ${body}",
  "}"];

/* loops */
let for_loop =
  ["for (let i = ${initial_statement}, i < ${loop_condition}, i${update_statement} ) {",
      "\t ${body}",
    "}" ];
let while_loop =
  ["while (${condition}) {",
    "\t ${body}",
  "}" ];

/* misc */
let comment = ["/* ${body} */"];

export default function (LUIS_json, dataObj) {
    let theIntent = LUIS_json.topScoringIntent; // for_loop, if_statement, ... 
    let entities = LUIS_json.entities; // array of json used to fill body -> interested in entitiy and type

    let dataArr = dataObj.arrayData;
    let position = dataObj.position; // where to insert code

    let makeCode = []; // code array needs to be inserted after dataArr[position] and
                       // dataArr must be flattened
    switch(theIntent) {
      case "define_function":
        define_function.forEach(function(el) {
          makeCode.push(embedObject(el, {name : getEntitiyData(entities, "name") })); 
        });
        break;

      case "define_variable":
        define_variable.forEach(function(el) {
          makeCode.push(embedObject(el, {
            name : getEntitiyData(entities, "name"), 
            value: getEntitiyData(entities, "value")
          })); 
        });
        break;

        case "if_statement":
          if_statement.forEach(function(el) {
            makeCode.push(embedObject(el, {
              condition : getEntitiyData(entities, "condition"), 
              body: getEntitiyData(entities, "body")
            })); 
          });
          break;

        case "else_statement":
          else_statement.forEach(function(el) {
            makeCode.push(embedObject(el, {
              body: getEntitiyData(entities, "body")
            })); 
          });
          break;

        case "for_loop":
          for_loop.forEach(function(el) {
            makeCode.push(embedObject(el, {
              initial_statement: getEntitiyData(entities, "initial_statement"), 
              loop_condition: getEntitiyData(entities, "loop_condition"), 
              update_statement: getEntitiyData(entities, "update_statement"), 
              body: getEntitiyData(entities, "body")
            })); 
          });
          break;
          
        case "while_loop":
          while_loop.forEach(function(el) {
            makeCode.push(embedObject(el, {
              condition: getEntitiyData(entities, "condition"), 
              comment: getEntitiyData(entities, "body")
            })); 
          });
          break;

        case "comment":
          comment.forEach(function(el) {
            makeCode.push(embedObject(el, {
              body: getEntitiyData(entities, "body")
            })); 
          });
          break;
      default:
        // goto case
        position = getEntitiyData(entities, "body");
        return {
          dataArr: dataArr,
          currPosition: Number(position)
        }
    }

    // 
    // want to put makeCode at position ${position} of dataArr
    //

    let finalArr = dataArr.length == 0 ? makeCode : finalArr.splice(position, 0, ...makeCode);;

    return {
      arrayData: finalArr,
      position: position + makeCode.length
    }
}