Hi, I am Sivakkumar.

This React project is related to elderly people healthcare.

In this project I used technologies like 
1. React js
2. CSS - (Grid and Flex)
3. Client Side storage --> Local Storage to store the datas.

Components used:
1. Home Component.
2. Medicine Component.
3. Activities Component.
4. Appointment Component.
5. History Component.

Home Component:
1. It contains Header, Profile Section, Nav Section (to navigate between 4 Tab Section), Below Nav Section there is a tab section
which by default will display Medicine Section.
2. User can navigate between different section by clicking nav buttons.
3. In profile section user profile and their details are displayed.

Medicine Section:
1. In this section user can see all the medical contitions with their prescribed medicine name.
2. There is a Plus button (add button) to add a new card.
3. On clicking the add button a form will appeare In which user can enter the disease name and tablets in the given input.
4. On clicking add button in the form, the data will be stored in the client side local storage, and a new card with the entered details will be created.
5. each card will have a delete and edit button.
6. On clicking the delete button in the card, that card will be deleted.
7. On clinking the edit button user can edit / update the existing content of the card.

Activities Section:
1. In the "Activities" tab, users can find a collection of YouTube videos featuring simple yoga asanas. 
2. These videos allow users to access and follow along with the yoga routines.
3. Additionally, the app suggests morning and evening walking as beneficial activities for the elderly.

Appointment Section:
1. In this section user can book an appointment by clicking Book Appointment button.
2. In the form user need to enter the Hospital name, Doctor Name and the date of appointment.
3. On clicking the create button, appointment data wil be stroed in the client side local storage and a new card will appeare with the entered details.
4. Each card wil have one of the follwing status
    1. Upcoming Appointment.
    2. Cancled Appointment.
    3. Completed Appointment.
5. As soon as the new appointment card gets created it's status will be "upcoming appointment".
6. Each card has three buttons
    1. tick button.
    2. cancel button.
    3. delete button.
7. If the user wish to cancel the appointment user can do so by clicking cancel button.
8. It will chage the background color to red, and the status will be updated to "Canceled Appointment" indicating the appoinment has been canceled.
9. For completed appointments user can update the status to "Completed Appointment" by clicking the tick button.
10. Now the completed appointment card background color will change to "Green Color" indicating "Completed Appointments".
11. Deleting an appointment removes the appointmetn card completely.
12. utilize the filter option to view upcoming, canceled, or all appointments.


History Section:
1. The "Medical History" tab stores a comprehensive record of the elderly user's medical history. 
2. It includes information about their present and past medical conditions, medications, allergies, and surgical history. 
3. This feature enables caregivers and healthcare providers to have a holistic view of the individual's health background.

Author: Sivakkumar T