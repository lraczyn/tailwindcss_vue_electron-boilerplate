import sys 

from csv import writer 


with open('progress.csv', 'w') as csv_file: 
  csv_writer = writer(csv_file) 
  headers = ['Name', 'Score'] 
  csv_writer.writerow(headers) 
  
print("csv file created for leetcode") 