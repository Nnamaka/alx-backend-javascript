const getListStudentIds = (ArrayObj) => {
  if (!Array.isArray(ArrayObj)) {
    return [];
  }
  return ArrayObj.map((studentId) => studentId.id);
};

export default getListStudentIds;
