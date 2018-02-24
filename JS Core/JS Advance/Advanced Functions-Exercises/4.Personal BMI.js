function solve(name,age,weight,height){
    let resultInfo = {}
    let bmi = Math.round(weight / Math.pow(height / 100,2))
    let status = bmi <= 18.5 ? "underweight" :
                 bmi > 18.5 && bmi <= 24.9 ? "normal" :
                 bmi > 24.9 && bmi <= 29.9 ? "overweight" : "obese"
    
    if(status !== "obese"){
        resultInfo = {'name': name, 
        'personalInfo': 
            {'age': age, 'weight': weight, 'height': height}, 
        'BMI': bmi, 
        "status": status}
    } else {
        resultInfo = {'name': name, 
        'personalInfo': 
            {'age': age, 'weight': weight, 'height': height}, 
        'BMI': bmi, 
        'status': status,
        'recommendation': 'admission required'}
    }
    
    return resultInfo
}

solve('Peter', 29, 75, 182)