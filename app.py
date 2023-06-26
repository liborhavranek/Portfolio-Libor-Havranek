from flask import Flask, render_template
from flask_frozen import Freezer

app = Flask(__name__)
freezer = Freezer(app)


@app.route("/")
def hello_world():
    return render_template("index.html")


if __name__ == "__main__":
    app.config['FREEZER_DESTINATION'] = 'build'
    app.config['FREEZER_REMOVE_EXTRA_FILES'] = False  # Preserve other static files
    freezer.freeze()
    app.run(debug=True)
