from flask import Flask, render_template

app = Flask(__name__)

photos = [
    {"file": "activity1.jpg", "caption": "Science Fair"},
    {"file": "activity2.jpg", "caption": "Group Activity"},
    {"file": "activity3.jpg", "caption": "Class Picture"}
]

@app.route("/")
def home():
    return render_template("photos.html", photos=photos)

if __name__ == "__main__":
    app.run(debug=True)