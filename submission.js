
function summarizeGrades(assignments) {
  let sum = 0; //vaule has to be changed when grades are added 
  const count = assignments.length;//assign only once

  //The late penalty is 20 percentage points per day
  const LATE_PENALTY_PER_DAY = 20; //no need to be changed

   // Must be declared outside the loop because it is used after the loop.
  let lastGraded;

  for (var i = 0; i < count; i++) {
    const assignment = assignments[i]; //each loop get assigns once
    let grade = assignment.grade;

    if (assignment.daysLate > 0) {
      const latePenalty = assignment.daysLate * LATE_PENALTY_PER_DAY;

      //The minimum grade allowed is 0.
      grade = grade - latePenalty >= 0 ? grade - latePenalty: 0;
    }
    sum += grade;
    lastGraded = assignment;
  }
  return { average: sum/count, lastGraded: lastGraded.id };
}

// Example test
const assignments = [
  { id: "1234", grade: 80, daysLate: 2 },
  { id: "5678", grade: 50, daysLate: 0},
  { id: "9876", grade: 30, daysLate: 2},
];
console.log(summarizeGrades(assignments)); 

function makeCharacter(characterName){
    //private variables protected by the closure
    //farmingSkill and fishingSkill are declared inside makeCharacter() but are not included as properties of the returned object.
    let farmingSkill = 0;
    let fishingSkill = 0;

    let levelUp = function (skill) {
        if (skill === "farming" && farmingSkill < 10) {
            farmingSkill++;
        } else if (skill === "fishing" && fishingSkill < 10) { //to not make skill exceed level 10
            fishingSkill++;
        }

        // Other input is ignored.
        // There is no return statement.
    };

    let showSkill = function (skill) {
        if (skill === "farming") {
            return farmingSkill;
        } else if (skill === "fishing") {
            return fishingSkill;
        }

        // Other input returns undefined.
    };

    return {
        name,
        levelUp,
        showSkill
    }
}
