from db import db_write
from datetime import datetime
from pytz import timezone, utc

sql = '''INSERT INTO Event (event_title, event_start_time, event_end_time, 
    event_url, event_dept, event_creator, has_cover) VALUES (%s, %s, %s, %s, %s, %s, %s)'''

tz = timezone('US/Central')

event_list = [
    ['CSSA 招新 Info Night',
     tz.localize(datetime(2024, 9, 3, 18)).astimezone(utc),
     tz.localize(datetime(2024, 9, 3, 21)).astimezone(utc),
     'https://mp.weixin.qq.com/s/Zed1gEVAtIHytEZILmHvWQ', 0, 1, 0],
    ['CSSA 招新',
     tz.localize(datetime(2024, 9, 4, 17)).astimezone(utc),
     tz.localize(datetime(2024, 9, 4, 21)).astimezone(utc),
     'https://mp.weixin.qq.com/s/sD5wIpoXmMAngimCHeGJ4Q', 0, 1, 1]
]

for event in event_list:
    db_write(sql, event)
