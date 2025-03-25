def big_sentance(name,surename,age,color):
    print(F"hello my name is {name} my surename is {surename} im {age} years old and my favourite color is {color}")

print(big_sentance("datuna","Zhamerashvili",11,"purple"))


def check_lowercase(user_str):
    if user_str.islower():
        print(f"{user_str}  is lowercase.")
    else:
        print(f"{user_str} - isnt lowercase")

check_lowercase("HH")
check_lowercase("lia")
check_lowercase("P")


def list_join(user_list, str_to_join):
    user_list.join(str_to_join)

print(list_join("hello","bye"))

def element_remover(user_list, index_to_remove):
    user_list.pop(index_to_remove)

element_remover([4,6,2,6].pop(2))