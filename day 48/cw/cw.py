#Multiply
def multiply(a, b):
    return a * b

#Convert a Number to a String!
def number_to_string(num):
    return str(num)

#Even or Odd
def even_or_odd(number):
    if number % 2 == 0:
        return "Even"
    else:
        return "Odd"

#Reversed Strings
def solution(string):
    return solution [::-1]

#Return Negative
def make_negative( number ):
    if number > 0:
        return number * -1
    else:
        return number
    

#Opposite number
def opposite(number):
    return number * -1

#Convert boolean values to strings 'Yes' or 'No'
def bool_to_word(boolean):
    if boolean is True:
        return "Yes"
    else:
        return "No"

#Sum of positive
def positive_sum(arr):
    result = 0
    
    for i in arr:
        if i > 0:
            result = result + i
    
    return result