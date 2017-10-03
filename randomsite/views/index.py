"""
Randomsite index (main) view.

URLs include:
/

Maxwell Morgan <mjmor@umich.edu>
"""
import flask
import randomsite


@randomsite.app.route('/', methods=["GET"])
def show_index():
    """Display / route."""
    return flask.render_template("index.html")
