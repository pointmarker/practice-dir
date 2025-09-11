######  to make arithmetic operations, you have to use ((operation-here-without-blanks)) ######

# echo "bir sayı girin"
# read sayi1
# echo "bir tane daha"
# read sayi2

# echo $((sayi1+sayi2))


##### a simple if statement #####


# echo "enter an age"
# read AGE

# if [ $AGE -eq 18 ]; then
#     echo "you re an adult"
# else
#     echo "you re not an adult"
# fi



#### a semi simple if statement ####
#### important to have bracelets ";" give to statements ####

# echo "bir sayı girin"
# read sayi1
# echo "bir tane daha"
# read sayi2

# if [ $sayi1 -gt $sayi2 ]; then
#     echo "ilk sayı ikinciden büyük"
# elif [ $sayi1 -eq $sayi2 ]; then
#     echo "iki sayi eşit"
# else
#     echo "ikinci sayi ilkinden büyük"
# fi


#### for loop ####

# for i in {1..5}; do
#     echo $i
# done

### while loop ####

# count=1
# while [ $count -le 5 ]; do
#     echo "nasıl yani hala mı : $count"
#     ((count++))
# done

### 