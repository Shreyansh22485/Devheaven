# Devheaven
Team Name: RFID Bangers

Members: Satwik Garg, Saurav Haldar, Sarthak Saxena, Shreyansh srivastava
# Implementation
We have implemented an react website asks user to input their age,height,weight, and gender and then it outputs their BMI and Ideal Weight using the Fitness Caluator API and then it also output a matching random Gen1 pokemon whose BMI is very close to the user's BMI also it gives some exercise suggestions to user achieve their ideal weight mentioned above.
# How to Run
Navigate to Backend directory in terminal then enter :

npm i </br>
//install the backend dependencies</br>

npm run dev</br>
//start the backend server</br>

On a seperate terinal navigate to client directory then enter :</br>

npm i</br>
//install the client dependencies</br>

npm run dev</br>
//start the client server</br>

We did not get the chance to integrate the backend and frontend due to the time constraints but for now the code is running and can be checked using the postman tool</br>

In the postman tool select the POST option then enter the link : http://localhost:8080/api/auth/home</br>

then select the body option then select raw and change the format to json the enter an input in which enter a json object including "height,weight,age,gender" (example given below) then click the send option.</br> 

```
{
    "height":15,
    "weight":50,
    "age":12,
    "gender": "male"
}
```

Then wait for a 1 min and the ouput will be generated on the bakend terminal.
