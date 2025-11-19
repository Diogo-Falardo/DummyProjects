# Exercise:

# Write a Python program that takes a list of integers and determines whether any three distinct numbers in the list sum exactly to zero.

# You only need to print True or False.

numbers = [3, -1, 4, -4, 2, -2, 7, -3, 5, -5, 8, -8, 0, 6, -6]


for n in numbers:
    for i in range(n + 1, len(numbers)):
        for j in range(i + 1, len(numbers)):
            if numbers[i] + numbers[j] + numbers[j] == 0:
                print(numbers[i], numbers[j], numbers[j], True)
                


