# Quick Code
<table align="center">
    <tr>
        <td>
            <img src="https://github.com/IsaacWatt/Quick-Code/blob/master/src/components/logo.png" width="5000px">
        </td>
    </tr>
</table>

Quick Code is a web IDE created at **nwHacks2019** that converts spoken pseudo commands into JavaScript. 
The project was built in under 24 hours using **Node**, **React**, and **Python**. Our project used **Azure Cognitive Services** for voice recognition and natural language processing. Our backend was also hosted as a web service on Azure with credits provided by **Microsoft**.


The project was awarded Best hack using voice biometrics and conversational design, Best Domain Name (IDEasy), and the Wolfram Award

The projects **devpost** can be found <a href="https://devpost.com/software/quickcode">here</a>


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
```javascript
{

}
```



