#from ast import Return
#----------------------------------------------------------------------------
# Created By  : Daniel Mejia
# Created Date: June 2022
# version ='1.0'
# For UTEP CS 4381/5381 - Summer 2022 Only
# ---------------------------------------------------------------------------
import csv
class csv_reader:

    def __init__(self):
        pass

    def read_file(self,csvFile):
        fulldict = []
        with open(csvFile, newline='') as csvfile:
            reader = csv.DictReader(csvfile)
            for row in reader:
                fulldict.append(row)
            return fulldict
