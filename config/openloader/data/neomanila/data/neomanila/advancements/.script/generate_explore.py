#!/usr/bin/python
import csv
import os


def main():
    with open('explore.template.txt', 'r') as templateFile:
        template = templateFile.read()

    chain = {}

    with open('explore.data.csv', 'r') as dataFile:
        reader = csv.reader(dataFile, delimiter=",")
        sortedlist = sorted(reader, key=lambda row: row[4])
        for i, line in enumerate(sortedlist):
            process(template, line[0], line[1],
                    line[2], line[3], line[4], line[5], chain)


def process(template, parent, biome, icon, biome_id, reward, category, chain):
    if not os.path.isdir('./../explore/' + parent):
        os.mkdir('./../explore/' + parent)

    biomePath = './../explore/' + parent + '/' + biome_id + '.json'
    if os.path.exists(biomePath):
        os.remove(biomePath)

    origParent = parent
    if parent in chain:
        parent = parent + '/' + chain[parent]
        del chain[origParent]
    chain[origParent] = biome_id

    hidden = "true"
    if "1_common" in reward:
        hidden = "false"

    frame = "task"
    if "4_veryrare" in reward:
        frame = "challenge"

    biomeString = template.replace("%BIOME%", biome).replace(
        "%ICON%", icon).replace("%BIOME_ID%", biome_id).replace("%REWARD%", reward).replace("%PARENT%", parent).replace("%HIDDEN%", hidden).replace("%CATEGORY%", category).replace("%FRAME%", frame)

    with open(biomePath, 'w') as biomeFile:
        biomeFile.write(biomeString)


if __name__ == '__main__':
    main()
