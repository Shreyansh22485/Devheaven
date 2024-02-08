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


then select enter the following fields "height,weight,age,gender" (example given below) then click the send option.</br> 

```
{
    "height":15,
    "weight":50,
    "age":12,
    "gender": "male"
}
```

Then wait for a 1 min and the ouput will be generated on the bakend terminal.
