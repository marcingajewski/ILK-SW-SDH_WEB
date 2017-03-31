from flask import Flask, render_template, request, jsonify
import sqlite3

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('main.html')

@app.route('/_lastRecordSQlite')
def retrieveData():
    # command = request.args.get('command', 0, type=int)
    conn = sqlite3.connect('/usr/local/SmartDogHouse/tmpRAM/sdhdatabase.db')
    cursor = conn.execute("SELECT " +
                          "light1_lx, pres1_hPA, pres2_hPa, temp1_C, temp2_C, temp3_C, hum1_per, hum2_per, " +
                          "food, water, pir1, pir2, vol24V, cur24V_mA, pwr24V_W, pwrLED1, pwrFan1,pwrHeater1" +
                          " FROM table1second ORDER BY nb DESC LIMIT 1;")
    for row in cursor:
        conn.close()
        return jsonify(light1_lx=row[0], pres1_hPA=row[1], pres2_hPa=row[2], temp1_C=row[3],
                       temp2_C=row[4], temp3_C=row[5], hum1_per=row[6], hum2_per=row[7],
                       food=row[8], water=row[9], pir1=row[10], pir2=row[11],
                       vol24V=row[12], cur24V_mA=row[13], pwr24V_W=row[14], pwrLED1=row[15],
                       pwrFan1=row[14], pwrHeater1=row[15])

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
