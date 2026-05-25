<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simple Calculator</title>
    <style>
        body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: #f0f2f5;
            font-family: Arial, sans-serif;
            margin: 0;
        }

        .calculator {
            background-color: #333;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
            width: 300px;
        }

        #display {
            width: 100%;
            height: 50px;
            background-color: #fff;
            font-size: 24px;
            text-align: right;
            padding: 5px 10px;
            border: none;
            border-radius: 5px;
            box-sizing: border-box;
            margin-bottom: 15px;
        }

        .buttons {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 10px;
        }

        button {
            padding: 15px;
            font-size: 18px;
            cursor: pointer;
            border: none;
            border-radius: 5px;
            background-color: #e0e0e0;
            transition: background 0.2s;
        }

        button:hover {
            background-color: #d4d4d4;
        }

        button.operator {
            background-color: #ff9500;
            color: white;
        }

        button.operator:hover {
            background-color: #e08500;
        }

        button.clear {
            background-color: #ff3b30;
            color: white;
        }

        button.clear:hover {
            background-color: #d32f2f;
        }
    </style>
</head>
<body>

    <div class="calculator">
        <input type="text" id="display" readonly>

        <div class="buttons">
            <button class="clear" onclick="clearDisplay()">C</button>
            <button onclick="appendToDisplay('/')" class="operator">/</button>
            <button onclick="appendToDisplay('*')" class="operator">*</button>
            <button onclick="appendToDisplay('-')" class="operator">-</button>

            <button onclick="appendToDisplay('7')">7</button>
            <button onclick="appendToDisplay('8')">8</button>
            <button onclick="appendToDisplay('9')">9</button>
            <button onclick="appendToDisplay('+')" class="operator">+</button>

            <button onclick="appendToDisplay('4')">4</button>
            <button onclick="appendToDisplay('5')">5</button>
            <button onclick="appendToDisplay('6')">6</button>
            <button onclick="calculate()" class="operator" style="grid-row: span 2; height: 100%;">=</button>

            <button onclick="appendToDisplay('1')">1</button>
            <button onclick="appendToDisplay('2')">2</button>
            <button onclick="appendToDisplay('3')">3</button>

            <button onclick="appendToDisplay('0')" style="grid-column: span 2;">0</button>
            <button onclick="appendToDisplay('.')">.</button>
        </div>
    </div>

    <script>
        const display = document.getElementById('display');
        function appendToDisplay(input) {
            display.value += input;
        }
        function clearDisplay() {
            display.value = '';
        }
        function calculate() {
            try {
              
                display.value = eval(display.value);
            } catch (error) {
                display.value = "Error";
            }
        }
    </script>

</body>
</html>
