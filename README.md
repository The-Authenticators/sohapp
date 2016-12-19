# Sohapp
An online payment manager app to help users stay on top of their payments and the business owner to get money back on time and keep track of payments.

[View prototype on InVision.](https://projects.invisionapp.com/share/Y29RL5C4J#/screens)

## For Admins
The app will allow administrators to track active loans, and easily contact users who have overdue repayments.

Administrators can use the app to keep track of the money they have lent. The administrator can immediately view outstanding repayments for the present month and all overdue repayments from previous months. Other views allow the business owner to view details on specific Users, and see loans and repayments by funding round.

### User stories
- As an administrator, I want to be able to track repayments automatically through an app, so that I can stop doing it manually using spreadsheets.
- As an administrator, I want to be able to visualise what fraction of the payments due in the last month have been made so that I can quickly understand the health of our monthly finances.
- As an administrator, I want to be able to see all overdue payments so that I can chase outstanding payments.
- As an administrator, I want to be able to see all details about a particular client, so that I can understand our business relationship.
- As an administrator, I want to be able to easily send reminders to clients who are overdue on payments, so that I don't have to spend lots of my own time pursuing outstanding debts.
- As an administrator, I want to be able to see aggregate details on all loans from a particular funding round, so that I can identify trends between rounds.

## For Users
Users can log in to see the amount of money they have loaned, and the proportion of this loan that they have repaid. The user can also track their transaction history, and use an integrated payment API to make further payments.

### User stories
- As a user, I want to be able to make a payment to the lender, so that I can pay off my loan.
- As a user, I need to be able to see how close I am to paying off my loan, so I know how long I need to make repayments for.
- As a user, I want to receive reminders to pay so I don't fall behind on my payments.
- As a _potential_ user, I want to be able to find the sign-up form so I can apply for a loan.

## UI concept
![Sohapp UI concept](/assets/ui-mockup.jpg)

## Building the prototype - project plan
#### Monday
- Build five html pages for the following sections:
  - login
  - dashboard
  - rounds
  - users
  - individual user  
- Identify patterns and repeat elements and build them separately for efficient team working
    - header: differentiates between the login page (no menu) and the rest of the pages(menu)
    - footer: *Sohil Corporation Copyright, All rights reserved, 2016*
    - General cards for users, rounds, monthly overview and overdue containing a heading and main content
    - Users and rounds individual cards with three main items (check out mockups for more details)
    - Progress bar (repeats twice in dashboard and individual user page)
    - Menu (as a dropdown list)
- Start using SCSS to style the different pages
- Write js for dropdown menu
