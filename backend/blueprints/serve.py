from flask import Blueprint, send_from_directory

blueprint = Blueprint('serve', __name__)


@blueprint.route('/<path:filename>')
def serve_template_files(filename):
    return send_from_directory('templates', filename)


@blueprint.route('/static/js/<path:filename>')
def serve_static_js(filename):
    return send_from_directory('templates/static/js', filename)


@blueprint.route('/static/css/<path:filename>')
def serve_static_css(filename):
    return send_from_directory('templates/static/css', filename)


@blueprint.route('/static/media/<path:filename>')
def serve_static_media(filename):
    return send_from_directory('templates/static/media', filename)
