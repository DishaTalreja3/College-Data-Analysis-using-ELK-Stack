import csv
import sys

# first arguments should be file name to change, the second argument will be new file name.

filetochange = sys.argv[1]
newfilename = sys.argv[2]

writer = csv.writer(open(newfilename.strip(), 'w'))
with open(filetochange.strip(), 'r') as f:
    reader = csv.reader(f, delimiter=',')
    header = next(reader)
    writer.writerow(header)
    rowlength = len(header)
    count = 0
    for row in reader:
        for i in range(rowlength):
            if row[i] == '' or row[i] == 'N/A':
                row[i] = 0
            elif any(map(str.isdigit, row[i])) and "$" in row[i]:
                row[i] = row[i].replace('$', '')
                row[i] = int(float((row[i]).replace(',', '')))
            else:
                continue

        writer.writerow(row)
