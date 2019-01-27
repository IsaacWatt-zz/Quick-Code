import requests
import requests
url = 'https://westus.api.cognitive.microsoft.com/spid/v1.0'
data = {
  "query": {
    "bool": {
      "must": [
        {
          "text": {
            "record.document": "SOME_JOURNAL"
          }
        },
        {
          "text": {
            "record.articleTitle": "farmers"
          }
        }
      ],
      "must_not": [],
      "should": []
    }
  },
  "from": 0,
  "size": 50,
  "sort": [],
  "facets": {}
}
response = requests.post(url, data=data)