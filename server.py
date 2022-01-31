from flask import Flask, render_template, request
app = Flask(__name__)

@app.route('/')
def hello_world():
    return render_template('main.html')

@app.route('/types')
def types():
    return render_template('types.html')