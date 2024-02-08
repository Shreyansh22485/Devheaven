function getBMICategory(bmi) {
    if (bmi < 18.5) {
        return "Underweight";
    } else if (bmi >= 18.5 && bmi < 25) {
        return "Normal weight";
    } else if (bmi >= 25 && bmi < 30) {
        return "Overweight";
    } else {
        return "Obese";
    }
}

// Function to suggest activities based on BMI category
function suggestActivities(bmiCategory) {
    const activities = {
        "Underweight": "squats, deadlifts, bench presses, and rows",
        "Normal weight": "brisk walking, cycling, or swimming",
        "Overweight": "brisk walking, jogging, cycling, or swimming",
        "Obese": "walking, cycling, using the elliptical machine, or swimming"
    };
    return activities[bmiCategory] || "No specific suggestions for this BMI category.";
}




export const  calculateFitnessData=async(age, weight, height, gender)=> {
    // Sample API endpoint URLs
    const bmiUrl = "https://fitness-calculator.p.rapidapi.com/bmi";
    const idealWeightUrl = "https://fitness-calculator.p.rapidapi.com/idealweight";

    const bmiParams = {
        age: age.toString(),
        weight: (weight).toString(),
        height: (height*10).toString()
    };

    // console.log(bmiParams);

    const idealWeightParams = {
        gender: gender.toLowerCase(),
        height: (height*10).toString()
    };

    const headers = {
        "X-RapidAPI-Key": "3e1beb56d1msh7b2ac753ab4343fp136a58jsn16908b1a7a07",
        "X-RapidAPI-Host": "fitness-calculator.p.rapidapi.com"
    };

    try {
        // Fetch BMI data
        const bmiResponse = await fetch(`${bmiUrl}?${new URLSearchParams(bmiParams)}`, { headers });
        const bmiData = await bmiResponse.json();
        // console.log(bmiData)
        const bmi = bmiData.data.bmi;
        const bmiCategory = getBMICategory(bmi);

        // Fetch ideal weight data
        const idealWeightResponse = await fetch(`${idealWeightUrl}?${new URLSearchParams(idealWeightParams)}`, { headers });
        const idealWeightData = await idealWeightResponse.json();
        // console.log(idealWeightData)
        const idealWeight = idealWeightData.data.Hamwi;

        // Determine activity suggestions
        const activitySuggestions = suggestActivities(bmiCategory);

        // Return calculated data
        return {
            bmi: bmi,
            idealWeight: idealWeight,
            bmiCategory: bmiCategory,
            activityCategory: activitySuggestions
        };
    } catch (error) {
        // console.error("Error fetching fitness data:", error);
        // throw new Error("Error fetching fitness data");
    }
}