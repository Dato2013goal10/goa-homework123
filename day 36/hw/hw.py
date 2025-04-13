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


def find_char_index(string, char):
    try:
        return string.index(char)
    except ValueError:
        return -1  

string = "hello world"
char = "o"
index = find_char_index(string, char)
print(f"Index of '{char}': {index}")


def print_string_length():
    user_string = input("Enter a string: ")
    print(f"The length of the string is: {len(user_string)}")

print_string_length()

def count_the(paragraph):

    words = paragraph.lower().split()
    return words.count("the")

paragraph = "The quick brown fox jumped over the lazy dog. The dog was not happy."
print(count_the(paragraph))

def count_character_in_string(string):
    char = input("Enter a character to count: ")
    return string.count(char)

string = "hello world"
print(count_character_in_string(string))


def count_word_occurrences(text, word):
    words = text.lower().split()
    return words.count(word.lower())

text = "Python is a powerful language. I love Python programming."
word = "python"
print(count_word_occurrences(text, word))


