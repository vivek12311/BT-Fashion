from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/api/generate_outfit', methods=['POST'])
def generate_outfit():
    data = request.get_json()
    aesthetic = data.get('aesthetic')
    occasion = data.get('occasion')

    # Placeholder logic for demonstration purposes
    # You can replace this with your actual outfit generation logic
    outfit = f"Generated outfit for {aesthetic} on {occasion}"

    return jsonify({"outfit": outfit})

if __name__ == '__main__':
    app.run(debug=True)
