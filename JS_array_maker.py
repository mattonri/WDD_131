import csv

input_csv = './data/spells.csv'
output_js = 'spells.js'

# def csv_to_js_array(input_csv, output_js):
#     with open(input_csv, newline='', encoding='utf-8') as csvfile:
#         reader = csv.DictReader(csvfile)
#         spells_list = []

#         for row in reader:
#             description = row['description'].replace('***', '<strong>').replace('***', '</strong>')

#             js_object = f"""
# {{
#     name: "{row['name']}",
#     casting_time: "{row['casting_time']}",
#     casting_time_misc: "{row['casting_time_misc']}",
#     component_material: "{row['component_material']}",
#     component_semantic: {true if row['component_semantic'] == 'S' else false},
#     component_verbal: {true if row['component_verbal'] == 'V' else false},
#     component_misc: "{row['component_misc']}",
#     description: `{description}`,
#     duration: "{row['duration']}",
#     level: "{row['level']}",
#     range: "{row['range']}",
#     range_area: "{row['range_area']}",
#     school: "{row['school']}",
#     school_ritual: "{row['school_ritual']}"
# }}
# """
#             spells_list.append(js_object.strip())

#     with open(output_js, 'w', encoding='utf-8') as jsfile:
#         jsfile.write('const spells = [\n')
#         jsfile.write(',\n'.join(spells_list))
#         jsfile.write('\n];\n')

# csv_to_js_array(input_csv, output_js)


def csv_to_js_array(input_csv, output_js):
    with open(input_csv, newline='', encoding='utf-8') as csvfile:
        reader = csv.DictReader(csvfile)
        items_list = []

        for row in reader:
            description = row['description'].replace('***', '<strong>').replace('***', '</strong>')

            js_object = f"""
{{
    name: "{row['name']}",
    description: `{description}`,
    rarity: "{row['rarity']}",
    attunement: "{row['attunement']}",
    type: "{row['type']}"
}}
"""
            items_list.append(js_object.strip())

    with open(output_js, 'w', encoding='utf-8') as jsfile:
        jsfile.write('const items = [\n')
        jsfile.write(',\n'.join(items_list))
        jsfile.write('\n];\n')

csv_to_js_array(input_csv, output_js)

