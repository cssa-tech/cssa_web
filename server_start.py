from backend import create_app
from backend.init_db import init_db
import os

if __name__ == '__main__':
    if os.environ.get('WERKZEUG_RUN_MAIN') != 'true':
        init_db()
        print('Tables created')

    app = create_app()
    app.run(debug=True)
