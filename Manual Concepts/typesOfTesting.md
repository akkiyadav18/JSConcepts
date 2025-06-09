# what is System Testing ?
- GUI testing
- Usability Testing
- Functional Testing
- Non-Functional Testing  

# GUI Testing 
- Graphical User Interface is a process of testing the user interface f an application 
- a graphical user Interface includes all the elements such as menu , checkbox, colors, fonts , icons and images 

# GUI Testing Checklist 
- testing the size , positions, width , height of the elements
- testing the error message that are getting displayed 
- testing the different sections of the screen
- testing of the font whether it is readable or not 
- testing of the screen on different resolutions with the help of zooming in and zoom out 
- testing the colors of the fonts
- teting of the spelling 

# Usability Testing 
- this testing validates application provided context sensitive help or not to the user
- check how easily the end usess are able to understand and operate the application is called usability testing 

# Functional Testing 
- Functionality is nothing but behaviour of the application
- functional testing talks about how your feature should work 

# Types of Functional Testing 
- Object properties Testing - check the properties of objects present on the application
- database Testing - data manipulation language operations (insert, delete, select, update  )
- Error Handling - verify  error messages while performingh incorrect actions
- calculation / manipulation testing - verify calculations happening in the applications 
- links existence & Manipulation testing - where exactly the links are placed --> links existence, links are navigating to proper page or not 
- cookies & sessions - cookies and temporary files created by browser while browsing the pages through internet 

# Non - Functinoal Testing 
- Once the application functionality is stable then we do Non - funtional testing 
- foucs on performance , load it can take and security etc 
- this testing is based on client expectations

# Types of Non-Functional testing
- Performance Testing - speed of the applications 
  - Load Testing 
  - Stress Testing
  - volume testing 
- Security testing 
- recover testing 
- compatibility testing - applications should be compatible with different environments
- configurations testing 
- garbage testing - remove extra or unwanted features/functionlity 

# Software Testing Terminology
- **Regression Testing** - testing conducts on modified build make sure there will not be impact on existing functionality because of the changes like adding/deleting/modifying features.
  
  - **Unit Regression Testing** - testing only the changes/modifications done by the developers
  - **Regional Regression Testing** - testing the modified modules along with the impacted modules/ impact analysis meeting conducts to identify modules with QA and Dev
  - **Full Regression** - testing the main feature & remaining part of the applications

- **Re-Testing** - whenever the dev fixed a bug , tester will test the bug fix is called re-testing. Tester close the bug if it worked otherwise re-open and send to developer

- **Smoke testing** - Smoke testing is done to make sure the build we received from the dev teams is testable/Stable or not. it is performed by both Developer and tester, build may be either stable or unstable
- **Sanity Testing** - verifying the basic functionality is working without going deeper after the build,its performed by  tester alone, it is relativly stable .

- **Exploratory testing** - we have to explore the application, understand completely and test it , understand the application identify all possible scenarios document it then use it for testing . we do this testing when there is no requirement.

- **Adhoc Testing** - testing application randomly without any test cases or any business requirement document, Adhoc testing is an informal testing type with an aim to break the system . this testing is usually an unplanned activity, tester has to have knowledge of application

- **Monkey/Gorilla Testing** - Testing application randomly without any test cases or any BRS, Adhoc testing is an informal teting type with an aim to break the system. tester do not have knowledge of application. 

# Positive Testing
- testing the applications with valid inputs is called as Positive Testing. it checks whether an aplication behaves as expected with positive inputs

# Negative Testing
- Testing the application with invalid inputs is called Negative Testing. i checks whether an aplication behaves as expected with the negative inputs 


# Positive V/s Negative Test Cases
• Requirement:
  — For Example if a text box is listed as a feature and in FRS it is mentioned as Text box accept
     6 - 20 characters and only alphabets.
  
  • Positive Test Cases:
  - Textbox accepts 6 characters.
  - Textbox accepts upto 20 chars length.
  - Textbox accepts any value in between 6-20 chars length.
  - Textbox accepts all alphabets.

  • Negative Test Cases:
  - Textbox should not accept l" than 6 chars.
  - Textbox should not accept chars more than 20 chars.
  - Textbox should not accept special characters.
  - Textbox should not accept numerical.

# End to End Testing
- Testing the overall functionalitites of the system including the data integration among all modules  is called end-to-end testing.

> login--> Add Customer --> delete customer --> logout 

# End-To-End Test
1. Login
2. Add New customer
3. Edit Customer
4. Delete Customer
5. Logout


# Globalization And Localization Testing
- Globalization Testing- performed to ensure the sytem or software application can run in any clutural or local environment. is to enure that it supports every language and different attributes.

- Localization Testing - Performed to check system or software application for a specific geographical and cultural environment. localized product only supports the apecific kind of language and is usable only in specific region.

