
const { exportAllDeclaration, toBindingIdentifierName } = require("@babel/types")
const { describe } = require("yargs")
const Employee = require("../lib/employee.js")

describe("Employee", () => {
  const mockEmployee = {
    name: 'Kevin',
    id: '6233',
    email: 'lam.kevin91@gmail.com',
  }

  describe("Testing Constructor for new object", () => {
    it("should create a new employee object", () => {
      const workerOne = new Employee(mockEmployee)
      expect(workerOne).toBe(Employee)
    })
    it("Should output the values of the object", () => {
      const workerOne = new Employee(mockEmployee)
      expect(workerOne).toEqual({
        name: 'Kevin',
        id: '6233'
        email: 'lam.kevin91@gmail.com',
      })
    })
  })

  describe("Testing the employee methods", () => {
    it('should return the id when the getId() method is called', () => {
      const workerOne = new Employee(mockEmployee)
      expect(workerOne.getId()).toEqual(6233)
    })
    it('should return the name of the employee when the getName() function is called', () => {
      const workerOne = new Employee(mockEmployee)
      expect(workerOne.getName()).toEqual('Kevin')
    })
    it('should return the name of the employee when the getEmail() function is called', () => {
      const workerOne = new Employee(mockEmployee)
      expect(workerOne.getEmail()).toEqual('lam.kevin91@gmail.com')
    })
    it('should return the role of the employee when the getRole() function is called', () => {
      const workerOne = new Employee(mockEmployee)
      expect(workerOne.getRole()).toEqual('Employee')
    })
  })
})