const getStudentIdsSum = (students) => {
  const id = students.reduce(
    (idx, item) => idx + item.id, 0,
  );
  return id;
};

export default getStudentIdsSum;
