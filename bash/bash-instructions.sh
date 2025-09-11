##### some basic searching/exploring operations ####

# cat bash-instructions.sh --- it will print all info in the file
# less bash-instructions.sh ---- it will open a part of the file, you can travel through, push "q" button to exit
# head -n 3 bash-instructions.sh --- it will shown typed lines from top of the file
# tail -n 3 bash-instructions.  --- it will shown typed lines from bottom of the file 


#### find a value from a file ####

# grep -i(if you want to search case-unsensitive) <filename>


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

### checking for the file is exists ### 

#file="test-file.txt"

# if [[ -f "$file" ]]; then
#     echo "var"
# else
#     echo "aranan $file adlı dosya yok, oluşturuluyor..."
#     touch "$file"
#     echo "dosya oluşturuldu"
# fi


####  echo -e use ####

# echo "satır1 \nsatır2 \nsatır3 \nsatır4"
# echo -e "satır1 \nsatır2 \nsatır3 \nsatır4"


### using inputs in functions ###

# greet(){
#     local name=$2
#     echo "selam $name"
# }

# echo "selam adın soyadın?"
# read answer
# greet $answer


##### using parameters in funtions ####

# greet(){
#     echo "$1 $2"
# }

# echo "selam adın soyadın?"
# read answer
# greet $answer


#### show all files from a different folder ###


# mkdir newfolder
# cd newfolder
# touch ahmet.txt mehmet.txt cmd.cmd
# cd ..

# ls -a newfolder

#### filter to see folder files ###3

# ls testfolder | grep -i .txt -- "|" the pipe element will send ls output to grep input, it will filter only .txt files



#### find a file from somewhere with certain name and put something in it ####

### it will write "test2" to testfolder/(search test2 case-unsensitive from testfolder files) path
# $ echo test2 >> testfolder/"$(ls testfolder | grep -i test2)"
## syntax
# $ echo <desired-text> >> <foldername>/"$(ls <foldername> | grep -i <search-word>)"


### find files with searched name and merge them to new file ###

# cat $(ls <foldername> | grep -i <search-word>) > <target-file>
# cat $(ls | grep -i test) > merged.txt


#### find line, word and char count #######

# wc <filename> -- will output = counts (line)(word)(char)(filename) 


### find matching words and change it ####

## syntax
# sed 's/<search-word>/<new-word>/' <filename>
# sed 's/test/kest/' test2.txt --- it will return "kest" word for all "test" words in the test2.txt file

# it will print many kest word as test2 word bottom to test2.txt file
# echo -e "\n$(sed 's/test2/kest/' test2.txt)" >> test2.

### sed -i 's/test2/kest' test2.txt -- 
# it will change all test2 words to kest in test2.txt file directly
# but it will include only for first matches, 
# for example the test2.txt file will look like this: 

# test2 test2     that sed -i .. code will only change to kest test2
# test2                                                   kest
# test2                                                   kest

# if you want to change all test2 words, you have to use global on regex as
# sed -i 's/test2/kest/g' test2.txt
# it will change to for kest words

### if you want to search case-insestive searchs like tEst2, use --> 's///gI'

### if you want to change the file while keeping the original, use sed -i.bak '..'

### you can search a word by line number like -- sed -i/non '3s///' <filename> -- it will search on third line

### you can print lines which are matched with your search word as:
# sed -n 's///p' <filename>


### date object ###

### this code will print you date as Thu, Sep 11, 2025 11:04:46 AM
# now=$(date)
# echo $now
#-- or without variable
#date -- only this cant print the time

## you can format date like
# date +"%Y-%m-%d %H:%M:%S" -- this single line is enough to print formatted date

# only have year  -- year=$(date +"%Y") --or more

#### find many files with searching word and write something ####

# -- it will search .txt files in testfolder folder and will add processed to bottom
# you can prefer useing with new line or be sure that there is an empty line for new inputs
# for file in testfolder/*.txt; do
#   echo -e "\nprocessed" >> $file
#   done



