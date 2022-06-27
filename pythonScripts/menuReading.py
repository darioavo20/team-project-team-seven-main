
from heapq import merge
from csvreader import csv_reader
import firebase_admin

from firebase_admin import credentials
from firebase_admin import firestore


cred = credentials.Certificate('pythonScripts /team-7-site-59ff2-firebase-adminsdkServiceKey.json')
firebase_admin.initialize_app(cred,{'projectID': "team-7-site-59ff2",})

db = firestore.client()

menu_ref = db.collection('menuItems')
menu = menu_ref.stream()

men_ref = menu_ref.document('id')



for doc in menu:
  print(f'{doc.id} => {doc.to_dict()}')

reader = csv_reader()
all_rows = reader.read_file("pythonScripts /menu.csv")



for row in all_rows:
  print(row)
'''
  new_menu_ref = menu_ref.document()
  new_menu_ref.set({
    'itemName' : row['\ufeffname'],
    'spanishDescription'  : row['spanishDescription'],
    'englishDescription': row['englishDescription'],
    'ingredients': row['Ingredients '],
    'price': row['Price'],
    'type' : row['Type'],
  })
 


'''








