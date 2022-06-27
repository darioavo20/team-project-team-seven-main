from heapq import merge
from csvreader import csv_reader
import firebase_admin

from firebase_admin import credentials
from firebase_admin import firestore

cred = credentials.Certificate('pythonScripts /team-7-site-59ff2-firebase-adminsdkServiceKey.json')
firebase_admin.initialize_app(cred,{'projectID': "team-7-site-59ff2",})
db = firestore.client()


customers_ref = db.collection('customers')
customer = customers_ref.stream()

cust_ref = customers_ref.document('id')




for doc in customer:
  print(f'{doc.id} => {doc.to_dict()}')

reader = csv_reader()
all_rows = reader.read_file("pythonScripts /customerDatabase.csv")


for row in all_rows:
  print(row)
'''
  new_customer_ref = customers_ref.document()
  new_customer_ref.set({
    'firstName' : row['\ufeffFirst Name'],
    'lastName'  : row['Last Name'],
    'numOfRecordVisits': row['Number of Recorded Visits '],
    'rewardPoints': row['Reward Points '],
    'preferredPaymentType': row['Preferred Payment Type '],
    'customerID' : row['Customer ID'],
    'email'     : row['Email '],
    'username'  : row['Username'],
  })
 
'''










