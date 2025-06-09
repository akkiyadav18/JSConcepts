# STLC
- Software Testing life cycle

> Requirement Analysis --> Test planning --> Test design --> Test execution --> Defect/bug Reporting and tracking --> Test Closure 

# Test Plan
1. Prepare document for the :-
    - what to test 
    - how to test
    - when to test

2. Input 
  - Project Plan
  - Functional Requirements

3. Activities
    - Identify the resources
    - Team Formation
    - test Estimation
    - preparations of test plans
    - reviews on the test pllan
    - test plan sign-off

4. Out Come
- Test plan documement

# Test Designing 
1. writting the test cases 

2. Input
- Project plan 
- Functional Requirements
- Test Plan 
- Design Docs
- Use cases 

3. Activities
- preparation of Test Scenarios
- preparation of test cases
- reviews on test cases
- traceabilty Matrix
- test cases sign-off

4. Out Come
- Test Cases Document
- Traceability Matrix

# Test Executions
1. Input
- Functional Requirements
- Test Plan 
- Test Cases
- Build From Development Team 

2. Activities
- Executing Test Cases
- Preparation of Test Reports/Test log
- identifying defects

3. Out Come
- Status/ Test Reports 

# Defect Reporting & Tracking
1. Input
- Test Cases
- Test Report/Test log

2. Activities
- Preparation Of defect Reports
- Reporting defects to developers 

3.Out Come 
- Defect Report

# Test Closure/ Sign-Off 
1. Input
- Test Reports
- Defect Reports

2. Activities
- Analyzing Test Reports
- Analyzing bug Reporting
- Evaluating Exit Criteria 

3. Out Come
- Test Summary Reports 


# Test Plan Contents
- A test plan is document that describes the test scope , test strategy, objectives, schedule, deliverables and Resources Required to perform testing for a software product.

# Test plan template contents:
- Overview
- Scope
    - Inclusions
    - Test Environments
- Exclusions
- Test Strategy
- Defect Reporting Procedure
- Roles/Responsibilities
- Test Schedule
- Test Deliverables
- Pricing
- Entry and Exit Criteria
- Suspension and Resumption Criteria
- Tools
- Risks and Mitigations
- Approvals

# Use Case , Test Scenarios & Test Case
1. Use Case:
- Use case Describes the requirement
- Use Case Contains Three Items
    - **Actor** , Which is the user which can be a single person or a group of people, interacting with a process.
    - **Action**, which is to reach the final outcome
    - **Goal / Outcome** , which is the successfull user outcome

2. Test Scenario
- possible area to be tested (**what to Test**)

3. Test Case
- Step by step actions to be performed to validate functionality of applications (How to test).
- Test Case Contains Test steps, Expected result and Actual result

# Use Case VS Test Case
- Use Case — Describes functional requirement, prepared by Business
    Analyst(BA).
- Test Case — Describes Test Steps/ Procedure, prepared by Test Engineer.

# Test Scenario VS Test Case
- test Sceanrio is 'What to be tested ' and Test Case is 'How to be tested'

# Test Suite
- Test Suite is group of test cases which belongs to same category

# Test Case
- A test Case is a set of actions executed to validate particular feature or functionality of your software application

# Requirement Teaceabiltiy Matrix (RTM)
- RTM describes the mapping of requirement's with the test cases.
- The Main purpose of RTM is to see that all test cases are covered so that no functioality should miss while doing software testing.


# Test Execution
- During this phase test team will carry out the testing based on the test plans and the test
cases prepared.
- Entry Criteria: Test cases , Test Data & Test Plan
- Activities:
    - Test cases are executed based on the test planning.
    - Status of test cases are marked, like Passed, Failed, Blocked, Run, and others.
    - Documentation of test results and log defects for failed cases is done.
    - All the blocked and failed test cases are assigned bug ids.
    - Retesting once the defects are fixed.
    - Defects are tracked till closure.
- Deliverables: Provides defect and test case execution report with completed results.

# Defects/ Bugs 
- any mismatched functionality found in a application is called as Defect/Bug/Issue.
- During Test Execution test engineers are reporting mismatched as defects to developers through templates or using tools

# Defect Categorization
- Severity - Blocker, critical , Major, Minor
- Priority - P1, P2, P3

- Severity is the seriousness of the defect and how much impact on the busiess workflow

# BUG Life Cycle 
> New --> open --> Resolved --> Re- testing --> Closed

# Test Metrics
- No. Of Requirements
- Avg. No. of Test Cases written Per Requirement
- Total No.of Test Cases written for all Requirement
- Total No. Of test cases Executed
- No.of Test Cases Passed
- No.of Test Cases Failed
- No.of Test cases Blocked
- No. Of Test Cases Un Executed
- Total No. Of Defects Identified
- Critical Defects Count
- Higher Defects Count
- Medium Defects Count
- Low Defects Count
- Customer Defects
- No.of defects found in UAT

# Princple in Sodtware Testing
- Start Software testing at early stages, Means From the beginning when you get the requirements. 
- Test the Software in order to find the defects
- Highly impossible to give a free software to the customer.
- Should not to do Exhaustive Testing. Means we should not use the same Type of data For testing every time.
- Testing is context based  Means Decide What types of testing should be conducted based on type of application
- We should follow the concept of Pesticide Paradox. Means if you are executing same cases for longer run, they won't find any defects. we have to keep update test cases in every cycle/realease in order to find more defects.
- We should follow defect clustering. Means some of the modules contains most of the defects. We can identify such risky modules 80% of the problems are found in 20% of the modules.
