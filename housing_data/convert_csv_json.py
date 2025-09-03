import csv
import json

# Read CSV file
with open("Indian_housing_Pune_data.csv", "r", encoding="utf-8") as f:
    reader = csv.DictReader(f)
    rows = list(reader)

# Write JSON file
with open("newhouse.json", "w", encoding="utf-8") as f:
    json.dump(rows, f, indent=4)

print("CSV converted to JSON successfully!")
