from flask import Flask, send_from_directory
from flask_cors import CORS
from .blueprints import pages, serve, event, admin


def create_app():
    app = Flask(__name__, static_url_path='', static_folder='templates')
    CORS(app)

    app.register_blueprint(pages.blueprint)
    app.register_blueprint(serve.blueprint)
    app.register_blueprint(event.blueprint)
    app.register_blueprint(admin.blueprint)

    return app
