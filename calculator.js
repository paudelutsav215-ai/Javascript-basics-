<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mein JavaScript Taschenrechner</title>
    
    <!-- 🎨 Das Design (CSS) -->
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
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3); 
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

    <!-- 🏗️ Das Grundgerüst (HTML) -->
    <div class="calculator">
        <!-- Das Display ist 'readonly', damit man nicht mit der Handytastatur reinfuschen kann -->
        <input type="text" id="display" readonly>
        
        <div class="buttons">
            <!-- Reihe 1 -->
            <button class="clear" onclick="clearDisplay()">C</button>
            <button class="operator" onclick="appendToDisplay('/')">/</button>
            <button class="operator" onclick="appendToDisplay('*')">*</button>
            <button class="operator" onclick="appendToDisplay('-')">-</button>
            
            <!-- Reihe 2 -->
            <button onclick="appendToDisplay('7')">7</button>
            <button onclick="appendToDisplay('8')">8</button>
            <button onclick="appendToDisplay('9')">9</button>
            <button class="operator" onclick="appendToDisplay('+')">+</button>
            
            <!-- Reihe 3 -->
            <button onclick="appendToDisplay('4')">4</button>
            <button onclick="appendToDisplay('5')">5</button>
            <button onclick="appendToDisplay('6')">6</button>
            <button class="operator" onclick="calculate()">=</button>
            
            <!-- Reihe 4 -->
            <button onclick="appendToDisplay('1')">1</button>
            <button onclick="appendToDisplay('2')">2</button>
            <button onclick="appendToDisplay('3')">3</button>
            <button onclick="appendToDisplay('0')">0</button>
            
            <!-- Komma -->
            <button onclick="appendToDisplay('.')">.</button>
        </div>
    </div>

    <!-- 🧠 Die Logik (JavaScript) -->
    <script>
        const display = document.getElementById('display'); 

        function appendToDisplay(digit) { 
            display.value += digit; 
        } 

        function clearDisplay() { 
            display.value = ''; 
        } 

        function calculate() { 
            const toEval = display.value; 
            
            if (toEval !== undefined && toEval !== null && toEval.length > 0) { 
                let eva; 
                try { 
                    console.log(`Berechne Wert: '${display.value}'`); 
                    eva = eval(toEval); 
                } catch (error) { 
                    console.error("Fehler bei der Berechnung:", error); 
                } 
                
                display.value = eva !== undefined ? eva : "Error"; 
            } 
        }
    </script>
</body>
</html>
