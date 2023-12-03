import os
os.environ["OPENAI_API_KEY"] = "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"
import openai
from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_restful import Api

app = Flask(__name__)
CORS(app)
api = Api(app)

@app.route('/api', methods=['POST'])
def api():
    # situation = request.form.get('aesthetic') #outfit they want
    # clothing_items = request.form.get('occasion') #database of clothing items (keywords)
    data = request.get_json()
    aesthetic = data.get('aesthetic')
    occasion = data.get('occasion')


    #prompt = "Given the aesthetic and occasion generate 5 to 10 : " + data 
    prompt = "Given the aesthetic in {name: name, id: id} format, return the ids of the clothing items in an outfit that would best fit the given situation in the format of [id1, id2, ...]. Output nothing other than these ids: \n Clothes:" + aesthetic + "\n Situation: " + occasion
    
    #response = prompt
    response = openai.ChatCompletion.create(
        model="gpt-4",
        messages=[
            {"role": "system", "content": prompt},
        ]
    )
    print(response["choices"])
    print(jsonify({"response": response["choices"][0]["message"]["content"]}))
    return jsonify({"response": response["choices"][0]["message"]["content"]})
