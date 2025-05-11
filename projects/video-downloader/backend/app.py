from flask import Flask , request,jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app) # enable cross-orgin resource sharing

@app.route("/download",methods=["POST"])
def download_video():
    data = request.json
    url = data.get("url")
    quality = data.get('quality','highest') #default to highest quality
    platform = data.get("platform")

    if platform == 'youtube':
        try:
            yt = YouTube(url)
            stream = yt.streams.filter(res=quality).first() or yt.streams.get_highest_resolution()
            download_path = stream.download(output_path='downloads/')
            return jsonify({"message": f"Downloaded: {download_path}", "status": "success"}), 200
        except Exception as e:
            return jsonify({"message": str(e), "status": "error"}), 400
    else:
        return jsonify({"message": "Platform not supported yet.", "status": "error"}), 400

    # placholder logic for downloading videos
    response = {
        "message":f"Downloading {platform} video from {url} in {quality} quality .",
        "status": "succes"
    }
    return jsonify(response),200

if __name__ == "__main__":
    app.run(debug=True)
