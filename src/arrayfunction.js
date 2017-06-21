(function () {

    var customStructure = function () {
        this.customHash = {};
    };

    customStructure.prototype = function () {
        return {
            insertElement: function (value, index) {
                if (this.customHash[value] == null) {
                    this.customHash[value] = [index];
                } else {
                    this.customHash[value].push(index);
                }
            },
            getElement: function (value, removeIndexFlag) {
                var returnValue = -1;
                if (this.customHash[value] != null && this.customHash[value].length > 0) {
                    returnValue = this.customHash[value][0];
                    this.customHash[value].shift();
                }
                return returnValue;
            },
            deleteElement: function (value) {
                if (this.customHash[value] != null) {
                    this.customHash[value] = null;
                }
            }
        };

    }();


    var dvResultContainer = document.getElementById('resultContainer');
    var dvErrorContainer = document.getElementById('errorContainer');
    var btnCalculate = document.getElementById('btnCalculate');
    var dvResult = document.getElementById('result');


    var executeCalc = function () {
        var inputArray = document.getElementById('array');
        var inputSum = document.getElementById('sum');
        
        var array = inputArray.value.replace(/\s/g, '').split(',');
        var sum = 0 + inputSum.value;

        var result = 0;
        var sumStructure = new customStructure();
        var tmpString = '';
        for (var i = 0; i < array.length; i++) {
            sumStructure.insertElement(+array[i]-0, i);
        }

        for (var i = 0; i < array.length; i++) {
            var currentValue = array[i];
            var complementValue = sum - currentValue;
            var searchedResult = sumStructure.getElement(complementValue);
            if (searchedResult > 0 && i != searchedResult) {
                var tmpString = '' + i + '-' + searchedResult;
                result += i;
                result += searchedResult;
                sumStructure.deleteElement(complementValue);
                sumStructure.deleteElement(currentValue);
            }
        }
        dvResultContainer.innerHTML = result;
        if (result) {
            changeVisibility(dvResultContainer, true);
            changeVisibility(dvErrorContainer, false);
        }
        else {
            changeVisibility(dvResultContainer, false);
            changeVisibility(dvErrorContainer, true);
        }
        changeVisibility(dvResult, true);
    };

    btnCalculate.addEventListener("click", executeCalc, false);    

    var changeVisibility = function (element, visibility) {
        if (visibility) {
            element.className = element.className.replace(/(?:^|\s)hidden(?!\S)/g, '');
        }
        else {
            if (!element.className.match(/(?:^|\s)hidden(?!\S)/)) {
                element.className += " hidden";
            }
        }
    };

})();