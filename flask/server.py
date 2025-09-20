from flask import Flask, jsonify,render_template,request

app = Flask(__name__)

@app.route('/',methods=['GET'])

def index():
    data = {
        "message": "merhaba",
        "title": "başlık",
        "header": "hasan"
    }
    message= "merhaba"
    return render_template('index.html',data = data)


@app.route('/api',methods=['POST'])

def getPost():
    data = request.data.decode('utf-8')
    print(data)
    return {"gelen": data}

if __name__ == "__main__":
    app.run(debug=True)
