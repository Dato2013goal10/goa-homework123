def addition(num1,num2):
    print(num1 + num2)

addition(4,8)



def find_maximum(numbers):
    maximum = numbers[0]
    for num in numbers:
        if num > maximum:
            maximum = num
    return maximum

numbers = [23, 71, 32, 64, 75]
print(find_maximum(numbers))