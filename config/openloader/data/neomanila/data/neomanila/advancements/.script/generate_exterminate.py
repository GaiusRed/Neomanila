#!/usr/bin/python
import csv
import os


def main():
    with open('exterminate.template.txt', 'r') as templateFile:
        template = templateFile.read()

    chain = {}

    with open('exterminate.data.csv', 'r') as dataFile:
        reader = csv.reader(dataFile, delimiter=",")
        sortedlist = sorted(reader, key=lambda row: row[3])
        for i, line in enumerate(sortedlist):
            process(template, line[0], line[1],
                    line[2], line[3], line[4], line[5], chain)


def process(template, parent, mob, mob_id, reward, icon, mob_package, chain):
    if not os.path.isdir('./../exterminate/' + parent):
        os.mkdir('./../exterminate/' + parent)

    mobPath = './../exterminate/' + parent + '/' + mob_id + '.json'
    if os.path.exists(mobPath):
        os.remove(mobPath)

    origParent = parent
    if parent in chain:
        parent = parent + '/' + chain[parent]
        del chain[origParent]
    chain[origParent] = mob_id

    hidden = "true"
    if "0_verycommon" in reward:
        hidden = "false"
    if "1_common" in reward:
        hidden = "false"

    if icon == "":
        icon = mob_id + "_spawn_egg"

    if mob_package == "":
        mob_package = "minecraft"

    frame = "task"
    if "4_veryrare" in reward:
        frame = "challenge"

    mobString = template.replace("%MOB%", mob).replace(
        "%ICON%", icon).replace("%MOB_ID%", mob_id).replace("%REWARD%", reward).replace("%PARENT%", parent).replace("%HIDDEN%", hidden).replace("%MOB_PACK%", mob_package).replace("%FRAME%", frame)

    with open(mobPath, 'w') as mobFile:
        mobFile.write(mobString)


if __name__ == '__main__':
    main()
