import firebase_admin
from firebase_admin import credentials
from firebase_admin import auth

from csvreader import csv_reader

cred = credentials.Certificate('pythonScripts /team-7-site-59ff2-firebase-adminsdkServiceKey.json')
firebase_admin.initialize_app(cred,{'projectID': "team-7-site-59ff2",})

reader = csv_reader()

# You can adjust the Users.csv file to have different roles
# Update the file to ensure it follows the format "+19151234567"
all_rows = reader.read_file("pythonScripts /Users.csv")
for row in all_rows:
    user = auth.create_user(
        email=row['\ufeffemail'],
        password=row['password'],
        display_name=row['display name'],
        phone_number=row['phone number'],
        email_verified=False,
        disabled=False
    )
    # You can change/add these as appropriate
    claim = {
        'role': row['role'],
    }
    auth.set_custom_user_claims(user.uid,claim)
    