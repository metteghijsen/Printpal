from flask import Flask

app = Flask(__name__)

@app.route("/")
@app.route("/message_send")
def home()