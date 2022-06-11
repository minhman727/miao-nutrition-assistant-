from src.constants.enums import Activity, Gender

def bmr_calculator(percentBodyFat, weight, height, gender, age):
    if percentBodyFat:
        return 370 + 21.60 * weight * (1 - percentBodyFat / 100)
    else:
        if gender == Gender.FEMALE:
            return 10.00 * weight + 6.25 * height * 100 - 5 * age - 161
        if gender == Gender.MALE:
            return 10.00 * weight + 6.25 * height * 100 - 5 * age + 5

def bmi_calculator(weight, height):
    return weight / (height * height)

def tdee_calculator(bmr, activity):
    if activity == "Rarely":
        constNumber = 1.20
    if activity == "Occasionally":
        constNumber = 1.375
    if activity == "Sometimes":
        constNumber = 1.55
    if activity == "Normally":
        constNumber = 1.725
    if activity == "Always":
        constNumber = 1.90

    return int(constNumber * bmr)