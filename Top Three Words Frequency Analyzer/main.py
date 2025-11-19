# Exercise:
# Write a Python program that reads a text file, finds the three most frequent words, and prints them in descending order of frequency.

f = open(r"C:\Users\diogo\Documents\GitHub\DummyProjects\Top Three Words Frequency Analyzer\file.txt")

words = {}

for i in f.read().split():
    if i in words:
        words[i] = words.get(i) + 1
    else:
        words[i] = 1


for i in words:
    print(words.get(i))

print(sorted(words.items(), key=lambda x: x[1], reverse=True)[:3])