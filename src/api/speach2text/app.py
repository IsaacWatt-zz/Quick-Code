#!/usr/local/bin/python3
from flask import Flask
import requests
import http.client, urllib.parse, json
from common.utils import get_azure_token

key = 'e8777a6d7a534dd3a3de20dac3f8a2d6'

app = Flask(__name__)


@app.route('/')
def index():
    return 'Speach to Text api! ;-)'


@app.route('/speachToText/v1.0/toText', methods=['GET'])
def to_text():
    print('calling microsoft api')
    # url = '
    # resp = requests.post(url=url, )
    # if resp.status_code != 200:
    #     # This means something went wrong.
    #     raise ApiError('GET /tasks/ {}'.format(resp.status_code))
    # for todo_item in resp.json():
    #     print('{} {}'.format(todo_item['id'], todo_item['summary']))

    token = get_azure_token(key)
    print(token)
    return 'Calling microsoft Speach to Text api'


if __name__ == '__main__':
    app.run(debug=True)
