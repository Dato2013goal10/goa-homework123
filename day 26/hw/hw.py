
#პირობითი განცხადებედი - conditional statements

#გაყოფა
3/7
5/5
6/6
9/4
4/1
3/7
5/5
6/6
9/4
4/1

#მეტობა
4<5
6<7
8<9
6<54
4<5
6<7
8>9
6>54

4<=5
6<=7
8<=9
6<=54
4<=5
6<=7
8<=9
6<=54

#ნაკლებობა

4>5
6>7
8>9
6>54
4>5
6>7
8>9
6>54

4>=5
6>=7
8>=9
6>=54
4>=5
6>=7
8>=9
6>=54

#უდრის და არ უდრის

5==5
6==6
5.5000==5.5
8==8
7==7
5==5
6==6
5.5000==5.5
8==8
7==7

5!=5
6!=6
5.5000!=5.5
8!=8
7!=7
5!=5
6!=6
5.5000!=5.5
8!=8
7!=7

#მორჩა

for i in range(10):
    print("dato")

number=int(input("enter a number"))
if number >= 100:
    print("big number")
else:
    print("small number")

answer = int(input("enter your answer"))
while answer == 13:
    print("!congrats!")
else:
    print("try again")
    answer = int(input("enter your answer"))
    while answer == 13:
        print("!corect!")