import urllib.request
import urllib.parse

host = 'https://zidv2.market.alicloudapi.com'
path = '/idcheck/Post'
method = 'POST'
appcode = 'b1fc4d32fee2461c8d52cabcc64107e1'
querys = ''
bodys = {}

url = host + path

bodys['cardNo'] = '330329199001021122'
bodys['realName'] = '李四'

post_data = urllib.parse.urlencode(bodys).encode('utf-8')

request = urllib.request.Request(url, post_data)
request.add_header('Authorization', 'APPCODE ' + appcode)
request.add_header(
    'Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8')

response = urllib.request.urlopen(request)
result = response.read().decode('utf-8')

print(result)
