import sqlite3
from flask import Flask, jsonify, render_template, g

app = Flask(__name__)
app.database = "sample.db"

@app.route('/')
def index():
    return render_template('index.html', results=[], item='')

@app.route('/<item>')
def search(item):
    g.db = connect_db()
    curs = g.db.execute("SELECT * FROM shop_items WHERE name = '%s'" %item)
    results = [dict(name=row[0], quantity=row[1], price=row[2]) for row in curs.fetchall()]
    g.db.close()
    return render_template('index.html', results=results, item=item)

@app.route('/shopAPI')
def shopapi():
    g.db = connect_db()
    curs = g.db.execute("SELECT * FROM shop_items")
    cur2 = g.db.execute("SELECT * FROM employees")
    items = [{'items':[dict(name=row[0], quantity=row[1], price=row[2]) for row in curs.fetchall()]}]
    empls = [{'employees':[dict(username=row[0], password=row[1]) for row in cur2.fetchall()]}]
    return jsonify(items+empls)

@app.errorhandler(500)
def internal_server_error(error):
    return 'Error: %s' %error

def connect_db():
    return sqlite3.connect(app.database)

if __name__ == "__main__":
    app.run()
