from flask import Flask, jsonify, request

app = Flask(__name__)

# This is a simple in-memory database for demonstration purposes.
# In a real-world application, you would use a proper database.
users = [
    {"username": "user1", "password": "password1"},
    {"username": "user2", "password": "password2"},
]

@app.route('/api/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    user = next((user for user in users if user['username'] == username and user['password'] == password), None)

    if user:
        return jsonify({"message": "Login successful"})
    else:
        return jsonify({"message": "Invalid credentials"}), 401

if __name__ == '__main__':
    app.run(debug=True)
