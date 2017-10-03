"""
randomsite REST API for random words.

/api/v1/random/

Maxwell Morgan <mjmor@umich.edu>
"""
import random

import flask
import randomsite

RANDOM_WORDS = ["whoa", "tacos", "nice", "sliver", "manifest", "colloquial",
                "inheritance", "silly", "niche"]


@randomsite.app.route('/api/v1/random/', methods=["GET"])
def get_random():
    """Return a random word from a list of words."""
    data = {}
    random_idx = random.randint(0, len(RANDOM_WORDS) - 1)
    data["random_word"] = RANDOM_WORDS[random_idx]
    return flask.jsonify(**data)
