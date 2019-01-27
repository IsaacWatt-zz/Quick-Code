#!/usr/local/bin/python3
from flask import Flask
from flask import request as freq
import requests
import json
from common.utils import get_azure_token

key = 'e8777a6d7a534dd3a3de20dac3f8a2d6'

app = Flask(__name__)


@app.route('/')
def index():
    return 'Speach to Text api! ;-)'


@app.route('/speachToText/v1.0/toText', methods=['POST'])
def to_text():
    print('calling microsoft api')

    # todo: not sure yet! does this work?!
    # print('data input:', freq.data)
    data = freq.data

    token = get_azure_token(key)
    print(token)

    url = 'https://westus2.stt.speech.microsoft.com/speech/recognition/conversation/cognitiveservices/v1'
    headers = {
        # "Ocp-Apim-Subscription-Key": key,
        'Authorization': 'Bearer {}'.format(token.decode('ascii')),
        'Content-type': 'audio/wav; codecs=audio/pcm; samplerate=16000',
        'Accept': 'application/json',

        }
    params = {
        'language': 'en-CA',
    }

    # print('headers', headers)
    response = requests.post(url, data=data, headers=headers, params=params)
    # print('response:', response.status_code)
    if response.status_code == 200:
        print(response.text)
        response_text = json.loads(response.text)
        return response_text['DisplayText']
    else:
        return 'Error:{}, {}, {}'.format(response.status_code, response.text, response.content)


if __name__ == '__main__':
    app.run(debug=True)
