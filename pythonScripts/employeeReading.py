
from heapq import merge
from csvreader import csv_reader
import firebase_admin

from firebase_admin import credentials
from firebase_admin import firestore


cred = credentials.Certificate('pythonScripts /team-7-site-59ff2-firebase-adminsdkServiceKey.json')
firebase_admin.initialize_app(cred,{'projectID': "team-7-site-59ff2",})

db = firestore.client()

employee_ref = db.collection('employees')
emp = employee_ref.stream()

emp_ref = employee_ref.document('id')



for doc in emp:
  print(f'{doc.id} => {doc.to_dict()}')

reader = csv_reader()
all_rows = reader.read_file("pythonScripts /employeeDatabase.csv")



for row in all_rows:
  print(row)
  '''
  new_emp_ref = employee_ref.document()
  new_emp_ref.set({
    'firstName' : row['\ufeffFirst Name '],
    'lastName'  : row['Last Name '],
    'employeeStatus': row['Employee Status'],
    'title' : row['Title(ROLE)'],
    'payRate' : row['Pay-Rate'],
    'gender' :  row['Gender'],
    'hireDate' :  row['Hire-Date'],
    'email' : row['Email'],
    'phoneNumber' : row['PhoneNumber'],
  })
'''










