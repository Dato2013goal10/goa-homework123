def first_and_last(lst):
    return [lst[0], lst[-1]] if lst else None

def max_of_three(a, b, c):
    return max(a, b, c)

def reverse_string(s):
    reversed_str = ""
    for char in s:
        reversed_str = char + reversed_str
    return reversed_str

#testing
print(first_and_last([1, 2, 3, 4, 5]))  
print(max_of_three(10, 25, 7))  
print(reverse_string("hello"))  

print("hello world")