def hello_world():
    print("Hello, World!")


def add_numbers(num1, num2):
    print(num1 + num2)


def multiply_by_ten(number):
    return number * 10


def greet(name="Guest"):
    print(f"Hello, {name}!")


def outer_function():
    def inner_function():
        print("I am the inner function!")
    inner_function()


def check_even_odd(numbers):
    for number in numbers:
        if number % 2 == 0:
            print("Even")
        else:
            print("Odd")


