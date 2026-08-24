#find the non-repeating character
s="hello world"
freq={}
for char in s:
    #counting the character
    if char==" ": # when we write hello world we have some space so space will skip
        continue
    if char in freq:
        freq[char]+=1
    else:
        freq[char]=1
#repeating 
for char in s:
    if char==" ":
        continue
    if char in freq:
        if freq[char]==1:
            print("non repeating character",char)
            break
else:
    print("no non repeating character")

#time and space complexity
#0(n)

#concepts on data structure
#list : A list a collection of ordered,mutable,and allows duplicate values ex: a=[1,2,3,4]
#set: a set is a collection of unordered,mutable and store unique values ex a={1,2,3}
# dict: a dict is a collection of key value pairs which is ordered,and mutable and store duplicate value for keys ex: a={1:"a",2:"b",c:"3"}
# tuple: a tuple is a collection of orderded, unmutalbe,allow duplicates values. ex: a=(1,2,3)

#1.If you need to store unique student IDs, which data structure would you choose and why?
#i would use set because it store unique values.and it will check membership checking

#2.If you need to store a student's name, email, and phone number together, which data structure would you choose and why?
#i would use dictionary so that we can access the name value by using key name



#dubugging challenge given problem
student=["ravi","anil","kiran","suresh"]
for i in range(len(student)):
    if student[i]=="kiran":
        print("Found")
    else:
        print("Not Found")
#solved debbing problem
student=["ravi","anil","kiran","suresh"]
for i in student:
    if i=="kiran":
        print("element Found")
        break
else:
    print("Not Found")

'''3. Debugging Challenge
1. What was the issue?
The else is inside the for loop and belongs to the if. Therefore, whenever the current student is not "Kiran", "Student not found" is printed.
So it prints "Student not found" multiple times.



2.How did you fix it?
I used for-else. The else executes only when the loop completes without finding "Kiran".
students = ["Ravi", "Anil", "Kiran", "Suresh"]

3.for student in students:
    if student == "Kiran":
        print("Student found:", student)
        break
else:
    print("Student not found")
Output:
Student found: Kiran
If "Kiran" is removed:
students = ["Ravi", "Anil", "Suresh"]
Output:
Student not found


   4. What I learned today:
I learned the differences between list, tuple, set, and dictionary. I also learned how for-else works and how to debug a logical error in a Python program.


   5. What I found difficult:
I initially found the for-else concept and the position of else difficult, but I understood that the for-else block executes only when the loop finishes without break.'''