from flask import Blueprint, send_from_directory

blueprint = Blueprint('pages', __name__)


@blueprint.route('/')
@blueprint.route('/events')
def route_pages():
    return send_from_directory('templates', 'index.html')
