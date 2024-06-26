export default function iterateThroughObject(reportWithIterator) {
  const employees = [];

  // eslint-disable-next-line no-restricted-syntax
  for (const employee of reportWithIterator) {
    employees.push(employee);
  }

  return employees.join(' | ');
}
cat > 11-createEmployeesObject.js
export default function createEmployeesObject(departmentName, employees) {
  return {
    [`${departmentName}`]: employees,
  };
}
