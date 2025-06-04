from flask import Flask, request, jsonify
from flask_cors import CORS
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import os
from datetime import datetime

app = Flask(__name__)
CORS(app)

# Email configuration
SMTP_SERVER = "smtp.gmail.com"
SMTP_PORT = 587
SENDER_EMAIL = "tanishqgoyal590@gmail.com"
SENDER_PASSWORD = os.getenv("EMAIL_PASSWORD")  # Set this in environment variables

def send_confirmation_email(signer_email, signer_name):
    try:
        msg = MIMEMultipart()
        msg['From'] = SENDER_EMAIL
        msg['To'] = signer_email
        msg['Subject'] = "Thank you for signing the Net Zero Petition!"

        body = f"""
        Dear {signer_name},

        Thank you for signing the Net Zero Petition! Your commitment to climate action is crucial.

        Together, we can make a difference in achieving net zero emissions.

        Best regards,
        Tanishq Goyal
        Climate Action Campaign
        """

        msg.attach(MIMEText(body, 'plain'))

        server = smtplib.SMTP(SMTP_SERVER, SMTP_PORT)
        server.starttls()
        server.login(SENDER_EMAIL, SENDER_PASSWORD)
        server.send_message(msg)
        server.quit()
        return True
    except Exception as e:
        print(f"Error sending email: {e}")
        return False

@app.route('/api/petition', methods=['POST'])
def sign_petition():
    data = request.get_json()
    name = data.get('name')
    email = data.get('email')
    
    if not name or not email:
        return jsonify({'error': 'Name and email required'}), 400
    
    # Store signature (you could add database storage here)
    signature = {
        'name': name,
        'email': email,
        'timestamp': datetime.now().isoformat()
    }
    
    # Send confirmation email
    email_sent = send_confirmation_email(email, name)
    
    return jsonify({
        'message': 'Thank you for signing!',
        'email_sent': email_sent
    }), 200

if __name__ == '__main__':
    app.run(port=5000, debug=True) 