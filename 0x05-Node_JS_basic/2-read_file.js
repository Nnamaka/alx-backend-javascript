const fs = require('fs');

function countStudents(fileName) {
  const students = {};
  const fields = {};
  let length = 0;

  try {
    const fileContents = fs.readFileSync(fileName, 'utf-8');
    const lines = fileContents.toString().split('\n');

    for (let i = 1; i < lines.length; i += 1) {
      length += 1;
      const line = lines[i].toString().split(',');

      if (Object.prototype.hasOwnProperty.call(fields, line[3])) {
        fields[line[3]] += 1;
      } else {
        fields[line[3]] = 1;
      }

      if (Object.prototype.hasOwnProperty.call(students, line[3])) {
        students[line[3]].push(line[0]);
      } else {
        students[line[3]] = [line[0]];
      }
    }

    console.log(`Number of students: ${length - 1}`);

    const entries = Object.entries(fields);
    const scholars = Object.entries(students);
    const putout = [];

    for (let i = 0; i < entries.length; i += 1) {
      if (!(entries[i][0] === 'undefined')) {
        putout.push(
          `Number of students in ${entries[i][0].replace('\r', '')}: ${
            entries[i][1]
          }. List: ${scholars[i][1].join(', ')}`,
        );
      }
    }

    for (const a of putout) console.log(a);
  } catch (error) {
    throw Error(`Cannot load the database${error}`);
  }
}

module.exports = countStudents;
