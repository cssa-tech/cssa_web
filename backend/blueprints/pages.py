from flask import Blueprint, send_from_directory

blueprint = Blueprint('pages', __name__)


@blueprint.route('/')
@blueprint.route('/events')
@blueprint.route('/')
@blueprint.route('/shiwu')
@blueprint.route('/media')
@blueprint.route('/business')
@blueprint.route('/about')
@blueprint.route('/apply')
@blueprint.route('/events')
@blueprint.route('/new_event')
@blueprint.route('/resources')
@blueprint.route('/Hr')
@blueprint.route('/Wenti')
@blueprint.route('/Wenlian')
@blueprint.route('/CareerDev')
@blueprint.route('/Grad')
@blueprint.route('/Tech')
@blueprint.route('/LockerRoom')
def route_pages():
    return send_from_directory('templates', 'index.html')
