# upper
sentance = "hello my name is dato"
print(sentance.upper())

name = input("please enter your name ")
print(name.upper())

def convert_to_uppercase(arr):
    res = []
    for i in arr:
        res.append(i.upper())
    return res
print(convert_to_uppercase(['hello','hi']))

# lower
sentance1 = "You Are My Friend"
print(sentance1.lower())

email = input("please enter your email ")
print(email.lower())

def convert_to_lower(word):
    return word.lower()

print(convert_to_lower("HeLlo WoRlD"))

# capitalize

sentence2 = input("Enter a sentence: ")
print(sentence2[:1].upper() + sentence2[1:])

words = ["hello","bye","world"]
capitalized_words = [word.capitalize() for word in words]
print(capitalized_words)

def capitalize(somthing):
    return somthing[0].upper() + somthing[1:]

print(capitalize("sigma"))

# find

word = "Python"
print(word.find("P"))

string = input("please enter a string ")
substring = input("please enter a substring to look for ")

position = string.find(substring)

if position != -1:
    print("found substring")
else:
    print("found nothing")