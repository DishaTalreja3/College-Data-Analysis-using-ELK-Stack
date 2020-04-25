import csv
writer = csv.writer(open('college-tuition-data-cleaned.csv', 'wb'))
with open('/Users/akshay/Desktop/Sql-nosql/dataset/college-tuition-data.csv', 'rb') as f:
    reader = csv.reader(f, delimiter=',')
    header = next(reader)
    writer.writerow(header)
    rowlength = len(header)
    for row in reader:
        for i in range(rowlength):
            if row[i] == '':
                row[i] = 0
        writer.writerow(row)

#     writer.writerow([
#         row[0],
#         row[1],
#         int(float((row[2]).replace(',', ''))) if row[2] != '' else 0,
#         int(float((row[3]).replace(',', ''))) if row[3] != '' else 0,
#         int(float((row[4]).replace(',', ''))) if row[4] != '' else 0,
#         int(float((row[5]).replace(',', ''))) if row[5] != '' else 0,
#         int(float((row[6]).replace(',', ''))) if row[6] != '' else 0,
#         int(float((row[7]).replace(',', ''))) if row[7] != '' else 0,
#     ])
