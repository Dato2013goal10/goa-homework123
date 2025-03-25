# 4) შედარების ოპერატორები - 10 მაგალითი თითოეულზე

# > ოპერატორი
print(5 > 3)  # True
print(10 > 20)  # False
print(100 > 99)  # True
print(0 > -1)  # True
print(50 > 50)  # False
print(7 > 3)  # True
print(-5 > -10)  # True
print(8 > 8)  # False
print(2 > 0)  # True
print(-1 > 1)  # False

# >= ოპერატორი
print(5 >= 3)  # True
print(10 >= 10)  # True
print(100 >= 99)  # True
print(0 >= 0)  # True
print(50 >= 51)  # False
print(7 >= 3)  # True
print(-5 >= -5)  # True
print(8 >= 9)  # False
print(2 >= 2)  # True
print(-1 >= 1)  # False

# < ოპერატორი
print(5 < 3)  # False
print(10 < 20)  # True
print(100 < 99)  # False
print(0 < -1)  # False
print(50 < 50)  # False
print(7 < 3)  # False
print(-5 < -10)  # False
print(8 < 8)  # False
print(2 < 0)  # False
print(-1 < 1)  # True

# <= ოპერატორი
print(5 <= 3)  # False
print(10 <= 20)  # True
print(100 <= 100)  # True
print(0 <= -1)  # False
print(50 <= 50)  # True
print(7 <= 3)  # False
print(-5 <= -10)  # False
print(8 <= 8)  # True
print(2 <= 0)  # False
print(-1 <= 1)  # True

# != ოპერატორი
print(5 != 3)  # True
print(10 != 10)  # False
print(100 != 99)  # True
print(0 != -1)  # True
print(50 != 50)  # False
print(7 != 3)  # True
print(-5 != -5)  # False
print(8 != 9)  # True
print(2 != 2)  # False
print(-1 != 1)  # True

# == ოპერატორი
print(5 == 3)  # False
print(10 == 10)  # True
print(100 == 99)  # False
print(0 == -1)  # False
print(50 == 50)  # True
print(7 == 3)  # False
print(-5 == -5)  # True
print(8 == 9)  # False
print(2 == 2)  # True
print(-1 == 1)  # False

# 5) for ციკლი, რომელიც დაბეჭდავს თქვენს სახელს 10-ჯერ
for _ in range(10):
    print("David")

# 6) while ციკლი, სანამ მომხმარებელი სწორ რიცხვს არ შემოიტანს
answer = 7  # აქ შეგიძლიათ თქვენთვის სასურველი რიცხვი ჩაწეროთ
while True:
    guess = int(input("შეიყვანეთ რიცხვი: "))
    if guess == answer:
        print("სწორია!")
        break
    else:
        print("ცადეთ თავიდან!")

# 7) რიცხვის შემოტანა და შემოწმება
number = int(input("შეიყვანეთ რიცხვი: "))
if number >= 100:
    print("big number")
else:
    print("small number")
