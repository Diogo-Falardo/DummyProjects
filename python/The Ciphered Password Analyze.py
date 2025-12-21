# Receives a word or sentence from the user.
# Counts:
# how many uppercase letters
# how many lowercase letters
# how many digits
# how many vowels
# how many consonants
# how many symbols (anything not alphanumeric)

# Then computes a final score:
# UPPERCASE LETTER  → +2 points each  
# LOWERCASE LETTER  → +1 point each  
# DIGIT             → +3 points each  
# VOWEL             → +4 points each  
# CONSONANT         → (counts normally but has no special score weight) = 0
# SYMBOL            → −2 points each  

import string

text = input("Text: ")

UPPERCASE = 0
LOWERCASE = 0
DIGIT = 0       
VOWEL = 0                 
SYMBOL = 0        


# verify if its sentece or a word
type = ""

if " " in text:
    type = "sentence"
else:
    type = "word"

l = []
vowel = ["a","e","i","o","u"]

for i in text:
    if i.isupper():
        UPPERCASE += 1
        l.append(i)
    elif i.islower():
        LOWERCASE += 1
        l.append(i)
    elif i.isdigit():
        DIGIT += 1
    elif i in string.punctuation:
        SYMBOL += 1
    
# verify consoant or vowel
for i in l:
    if i.lower() in vowel:
        VOWEL += 1


score = (UPPERCASE * 2) + LOWERCASE + (DIGIT * 3) + (VOWEL * 4) + (SYMBOL * (-2))

print(f"{type.upper()}: {text}")
print(f"score: {score}")








