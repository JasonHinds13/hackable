import sqlite3

with sqlite3.connect("sample.db") as connection:
    c = connection.cursor()
    c.execute("""CREATE TABLE shop_items(name TEXT, quantitiy TEXT, price TEXT)""")
    c.execute("""CREATE TABLE employees(username TEXT, password TEXT)""")
    c.execute('INSERT INTO shop_items VALUES("water", "40", "100")')
    c.execute('INSERT INTO shop_items VALUES("juice", "40", "110")')
    c.execute('INSERT INTO shop_items VALUES("candy", "100", "10")')
    c.execute('INSERT INTO employees VALUES("itsjasonh", "badword")')
    c.execute('INSERT INTO employees VALUES("theeguy9", "badpassword")')
    c.execute('INSERT INTO employees VALUES("newguy29", "pass123")')

