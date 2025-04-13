def manual_capitalize(user_str):
    return user_str[0].upper() + user_str[1:].lower()

print(manual_capitalize("hello world"))
print(manual_capitalize("pYTHON"))
print(manual_capitalize("geORGia"))
print(manual_capitalize("123abc"))
print(manual_capitalize("hELLO"))


def lower_or_upper(user_str, choice):
    if choice == "upper":
        print(user_str.upper())
    elif choice == "lower":
        print(user_str.lower())
    else:
        print("wrong choice")

lower_or_upper("Hello, World!", "upper")
lower_or_upper("Python Programming", "lower")
lower_or_upper("Test String", "random")


# es ver gavige

def big_sentance(name, surname, age, academy, role):
    f"Hello, my name is {name}, my surname is {surname}. I am {age} years old. I study at {academy}, my role is {role}."


print(big_sentance("dato","Zhamerashvili",11,"goal-oriented acdemy","student"))