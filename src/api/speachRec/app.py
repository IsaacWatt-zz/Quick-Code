
#!/usr/local/bin/python3
from flask import Flask
from flask import request as freq
import requests
import json
from common.utils import get_azure_token
import http.client, urllib.request, urllib.parse, urllib.error, base64

headers = {
    # Request headers
    'Content-Type': 'application/octet-stream',
    'Ocp-Apim-Subscription-Key': 'a4ca67568e6d4321af729ff0cbeec27a',
}

params = urllib.parse.urlencode({
    # Request parameters
    'shortAudio': '{boolean}',
})

try:
    conn = http.client.HTTPSConnection('westus.api.cognitive.microsoft.com')
    conn.request("POST", "/spid/v1.0/identify?identificationProfileIds={identificationProfileIds}&%s" % params, "{body}", headers)
    response = conn.getresponse()
    data = response.read()
    print(data)
    conn.close()
except Exception as e:
    print("[Errno {0}] {1}".format(e.errno, e.strerror))
#import http.client, urllib.request, urllib.parse, urllib.error, base64
'''
key = 'a4ca67568e6d4321af729ff0cbeec27a'

app = Flask(__name__)


@app.route('/')
def index():
    return 'Voice Rec API'


@app.route('/recognition/v1.0/getUser', methods=['POST'])
def to_text():
    print('calling microsoft api')

    # todo: not sure yet! does this work?!
    print('data input:', freq.data)
    data = freq.data

    token = get_azure_token(key)
    print(token)

    #url = 'https://westus2.stt.speech.microsoft.com/speech/recognition/conversation/cognitiveservices/v1'
    url = 'https://westus.api.cognitive.microsoft.com/spid/v1.0/identify'
    headers = {
        # "Ocp-Apim-Subscription-Key": key,
        #'identificationProfileIds': 'Bearer {}'.format(token.decode('ascii')),
        #'shortAudio' : True,
        'Content-type': 'audio/wav; codecs=audio/pcm; samplerate=16000',
        'Ocp-Apim-Subscription-Key': 'a4ca67568e6d4321af729ff0cbeec27a',

        #'Accept': 'application/json',

        }
    params = {
    # Request parameters
    'shortAudio': 'True',


    }

    print('headers', headers)
    response = requests.post(url, data=data, headers=headers, params=params)
    print('response:', response.status_code)

    if response.status_code == 200:
        print(response.text)
        return response.text
    else:
        return 'Error:{}, {}, {}'.format(response.status_code, response.text, response.content)


if __name__ == '__main__':
    app.run(debug=True)
'''