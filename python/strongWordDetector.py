word = input("Word: ")

w = word.strip()
if not w:
    print("Word Required....")

c = len(w)
Cletters = 0
Lletters = 0
digits = 0
simbols = 0


for i in w:
    if i.isupper():
        Cletters += 1
    elif i.islower():
        Lletters += 1
    elif i.isdigit():
        digits += 1
    else:
        simbols += 1

print(f"c {c}, Cletters {Cletters}, Lletters {Lletters}, digits {digits}, simbols {simbols}")

if c <= 5:
    print("weak word")
if c >= 5 and Cletters > 1 and digits > 1:
    print("mid word")
if c >= 8 and Cletters > 1 and digits > 1 and Lletters > 1 and simbols > 1:
    print("strong word")
    


