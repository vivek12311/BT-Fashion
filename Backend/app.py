import os
os.environ["OPENAI_API_KEY"] = ""
import openai
from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_restful import Api

app = Flask(__name__)
CORS(app)
api = Api(app)

@app.route('/api', methods=['POST'])

def api():
    situation = request.form.get('user_data') #outfit they want
    clothing_items = request.form.get('clothes') #database of clothing items (keywords)

    #prompt = "Given the following clothing items and their respective number, return the numbers of the clothing items that best fit the given characteristics: " + data 
    prompt = "Given the following clothing items in {name: name, id: id} format, return the ids of the clothing items in an outfit that would best fit the given situation in the format of [id1, id2, ...]. Output nothing other than these ids: \n Clothes:" + clothing_items + "\n Situation: " + situation
    
    
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
