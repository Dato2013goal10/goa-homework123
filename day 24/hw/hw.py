
user_pasword = int(input("enter your pasword"))
while user_pasword != 12345678:
    user_pasword = int(input("try again"))
        



num1 = 0
while num1 != 10:
    num1 = num1 + 1
    print(num1)



num2 = 10
while num2 != 100:
    num2 = num2 + 1
    print(num2)



num3 = 20
while num3 != 10:
    num3 = num3 - 1
    print(num3)


num4 = 1000
while num4 != 100:
    num4 = num4 - 50
    print(num4)



#უსასრულო ციკლი ხდება როდესაც არასწორად დავწერთ კოდს რომ ვიყენებთ while loops 
#მაგალითად:

varieble = input(("enter a number"))
while varieble:
    if 20 < varieble:
        print("try again")
