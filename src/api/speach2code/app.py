#!/usr/local/bin/python3
from flask import Flask
from flask import request as freq
import requests
import json
from common.utils import get_azure_token
from speach2text import speach2text
from text2code import text2code

key = 'e8777a6d7a534dd3a3de20dac3f8a2d6'

app = Flask(__name__)


@app.route('/')
def index():
    return 'Speach to Text api! ;-)'


@app.route('/speachToText/v1.0/toText', methods=['POST'])
def to_text():
    print('calling microsoft api')

    data = freq.data
    token = get_azure_token(key)
    # print(token)

    text_response = speach2text(token, data)
    print('text_response:', text_response)
    intent = text2code(token, text_response)
    return intent


if __name__ == '__main__':
    app.run(debug=True)
