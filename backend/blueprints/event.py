from flask import Blueprint, send_from_directory
from ..db import db_read, db_write

blueprint = Blueprint('event', __name__, url_prefix='/api/event')


@blueprint.route('/list')
def list_all_events():
    sql = '''SELECT * FROM Event ORDER BY event_start_time ASC'''
    return {'msg': 'Success', 'data': db_read(sql)}, 200


@blueprint.route('/serve_cover/<path:event_id>')
def serve_cover(event_id=''):
    return send_from_directory('event_cover', event_id)


@blueprint.route('/add')
def add_event():
    sql = '''INSERT INTO Event (event_title, event_start_time, event_end_time, 
    event_url, event_dept, event_creator) VALUES (%s, %s, %s, %s, %s, %s, %s)'''

    print(db_write(sql))
    return ''
