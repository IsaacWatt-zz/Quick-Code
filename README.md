# Quick Code 🗣️💬
<table align="center">
    <tr>
        <td>
            <img src="https://github.com/IsaacWatt/Quick-Code/blob/master/src/img/logo.png" width="5000px">
        </td>
    </tr>
</table>

Quick Code is a web IDE created at **nwHacks2019** that converts spoken pseudo commands into JavaScript. 
The project was built in under 24 hours using **Node**, **React**, and **Python**. Our project used **Azure Cognitive Services** for voice recognition and natural language processing. Our backend was also hosted as a web service on Azure with credits provided by **Microsoft**.


The project was awarded Best hack using voice biometrics and conversational design, Best Domain Name, and the Wolfram Award

The projects **devpost** can be found <a href="https://devpost.com/software/quickcode">here</a>

## User interface 

The interface for Quick Code uses **RunKit** in order to visualize the code created - allowing users to modify their code on the spot, and run their program.
<table align="center">
    <tr>
        <td>
            <img src="https://github.com/IsaacWatt/Quick-Code/blob/master/docs/voice.png" width="400px">
        </td>
        <td>
            <img src="https://github.com/IsaacWatt/Quick-Code/blob/master/docs/UI.png" width="400px">
        </td>
        <td>
            <img src="https://github.com/IsaacWatt/Quick-Code/blob/master/docs/codegenerated.png" width="400px">
        </td>
    </tr>
</table>

## Supported Phrases
Our application uses **Azure LUIS** NLP in order to parse the command string into JSON contianing a `TopScoringIntent` along with its `entities`. This JSON is then parsed into JavaScript code which hopefully accomplishes what the user intended. 

### Example LUIS Response
The following is a condensed example of the response from LUIS when the user input is `make a for loop from 5 to 10`. 
```javascript
{
  "query": "make a for loop from 5 to 10",
  "topScoringIntent": {
    "intent": "for_loop",
    "score": 0.813771124
  },
  "entities": [
    {'type': "initial_statement", "entity": "5"},
    {'type': "loop_condition", "entity": "10"}, 
    {'type': "update_statement", "entity": "++"}, 
    {'type': "body", "entity": ""}
  ]
}
```
The response is then parsed in Node to create the following string which is embedded into RunKit: 
```javascript
for (let i = 5; i < 10; ++i) {
    
}
``` 
Note: Node keeps track of what line number the user is on, and how many lines the embedded code will use, so that it knows where to insert the next statement.

## What Next
`Quick Code` is still in its very early stages of development. Some ideas we have for the future include: 
<ul>
    <li>Support for a larget subset of JavaScript commands - including ES6 features</li>
    <li>Better language recognition - current implementation is quite restrictive as to tokens what tokens are generated</li>
    <li>Custom models - requires sufficiently more data</li>
    <li>Accounts support - Firebase</li>
</ul>

