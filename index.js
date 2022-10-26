const dayjs = require('dayjs')

function ageCalc(date){
    const birthday = dayjs(date)
    const today = dayjs()

    const ageInYears = today.diff(birthday, "year")

    const nextBirthday = birthday.add(ageInYears + 1, 'year')
    const daysToNextBirthday = nextBirthday.diff(today, "day")

    console.log(`Current age: ${ageInYears}`)
    console.log(`Next birthday is the ${nextBirthday.format("DD/MMMM/YYYY")}`)
    console.log(`${daysToNextBirthday} days to complete ${ageInYears + 1} years old` )
}

ageCalc("1987/12/03");

