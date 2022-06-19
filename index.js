let createEmployeeRecord = function(employee) {
    return {
     firstName: employee[0],
     familyName: employee[1],
     title: employee[2],
     payPerHour: employee[3],
     timeInEvents: [],
     timeOutEvents: []
    }
}

let createEmployeeRecords = function(employeeRecord) {
    return employeeRecord.map(function(employee) {
        return createEmployeeRecord(employee)
    })
}

