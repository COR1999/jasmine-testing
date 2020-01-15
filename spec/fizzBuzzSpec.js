describe("My FizzBuzz Function", function () {
    beforeEach(function () {
        fizz = new fizzBuzz();
    });
    describe("Checks value of fizzBuzz", function () {

        it("should exist", function () {
            expect(fizzBuzz).toBeDefined();
        });

        it("should return If the number is divisible by 3 and 5(15)", function () {
            var result = fizzBuzz(15)
            expect(result).toBe("FizzBuzz");
        });
        it("should return If the number is divisible by 3(9)", function () {
            var result = fizzBuzz(9);
            expect(result).toBe("Fizz");
        });
        it("should return If the number is divisible by 5(10)", function () {
            var result = fizzBuzz(10);
            expect(result).toBe("Buzz");
        });
        it("should return number(2)", function () {
            var result = fizzBuzz(2);
            expect(result).toBe(2);
        });
    });
});