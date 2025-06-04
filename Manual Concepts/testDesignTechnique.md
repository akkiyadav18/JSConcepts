# Testing Design Techniques
- Used to prepare data for testing
1. reduce the data
2. More coverage

# types of test Case/Data design techniques
1. Equivalence Class Partitioning (ECP)
2. Boundary Value Analysis (BVA)
3. Descision Table Based Testing
4. Decision Table Based Testing 
5. Error Guessing 

# Equivalence Class Partition (ECP)
- partition data into various Classes and we can select data according ti class then test.It reduce the number of test-cases and saves time for testing 
- **Value Check** / Classify/ Divide the data into multiple classes

> Enter a number: (Allow digits from 1-500)

- Normal Test Data --> 1,2,3 ---------500
- Divide values into equivalene classes --> -100 to 0 --> -50

- Test Data Using ECP --> -50, 30, 160, 250, 320, 450, 550

> Enter a number: (Allow only aplhabets)

- divides value into equivalence classes

- A..Z --> (Valid) ----------------------------------> XYZ
- a..z --> (Invalid) ----------------------------------> zyz
- Special character --> (Invalid) ----------------------------------> @#$$%
- Spaces --> 250 (Invalid) ----------------------------------> Xy_z
- Numbers --> 320 (Invalid) ---------------------------------->1234


# Boundary Value Analysis 
- BVA  technique used to check boundaries of the input 
- Enter a age = (Allow digits from 18--35)
- Min = 18 (pass)
- Min-1 =17 (Fail)
- Min+l =19 (Pass)
- Max = 35 (Pass)
- Max-l (Pass)
- Max+l (Fail)

# Input Domain Testing
- The value will be verified in the text box/input fields 

# Descision Table 
- Deision Table is also called as Cause-Effect Table.
-   






