from flask import Blueprint, send_from_directory
from ..db import db_read, db_write

blueprint = Blueprint('admin', __name__, url_prefix='/api/admin')
