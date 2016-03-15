var Calculator;
(function (Calculator) {
    angular.module('Calculator', []);
    var CalcController = (function () {
        function CalcController() {
        }
        CalcController.prototype.calc = function (num1, num2) {
        };
        return CalcController;
    }());
    angular.module('Calculator').controller('calcController', CalcController);
})(Calculator || (Calculator = {}));
;
//# sourceMappingURL=app.js.map