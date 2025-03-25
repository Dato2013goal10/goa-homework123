# #islower

# def check_lowercase(user_str):
#     if user_str.islower():
#         print(f"{user_str}  is lowercase.")
#     else:
#         print(f"{user_str} - isnt lowercase")

# check_lowercase("Hello")
# check_lowercase("good")
# check_lowercase("supercalifragilisticexpialidocious")

# def string_lowercase(str):
#     if str.islower():
#         print(True)
#     else:
#         print(False)


# string_lowercase("goa")

# user_prompted_str = input("please input a string ")

# if user_prompted_str.islower():
#     print("verifyed")
# else:
#     print("try again")


# #isupper

# def check_upper(user_str):
#     if user_str.isupper():
#         print("isnt uppercase")
#     else:
#         print("is uppercase")

# check_upper("Jamaica")

# def is_uppercase(str):
#     return str.isupper()

# print(is_uppercase("HELLO"))
# print(is_uppercase("Hello"))
# print(is_uppercase("hello"))

# def is_uppercase(str):
#     return str.isupper()

# user_input = input("Enter a string: ")

# if is_uppercase(user_input):
#     print("The string is in uppercase.")
# else:
#     print("The string is not in uppercase.")

# # swapcase

# string = "woRD"

# converted_string = string.swapcase

# print(converted_string)

# def swap_case(sentence):
#     return sentence.swapcase()

# sentence = "Hello World"
# result = swap_case(sentence)
# print(result) 

#F

def big_sentance(name,age):
    print(F"hello {name} you are welcome to the u{age} years old programing tournament")

print(big_sentance("datuna",11))

#split

def sentence_to_list(sentence):
    return sentence.split()

print(sentence_to_list("hello my name is dato"))