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
- this technique  will be used if we have more condtions and corresponding actions
- we deal with combination of inputs



# Decision Table Example
• Take an example of transferring money online to an account which is already added and
approved.
1. Here the conditions to transfer money are
    - Account already approved
    - OTP (one time password) matched
    - Sufficient money in the account

 2. And the actions performed are
    - Transfer money
    - Show a message as insufficient amount
    - Block the transaction incase of suspicious transaction


# State Transition
- in this changes in input condition change the state of the application
- the tesvhnique allow the tester to test the behavior of an UAT
- the tester can perform this action by entering various input conditions in a sequence 


#  Error Guessing 
- it is one of the testing techniques used to find bugs in a software application based on tester's prior experience 
- a software testing technique where tester use their knowledge, intution and past experience to anticipate potetenial error or defects in the application.
- we don't follow any specific rules
- it depends on Tester Analytical Skills and experience 

 **Some of the examples are:**
- Submitting a form without entering values.
- Entering invalid values such as entering alphabets in the numeric field.




