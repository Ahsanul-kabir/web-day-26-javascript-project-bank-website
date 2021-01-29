        // login button event handler
        const loginBtn = document.getElementById('login');
        loginBtn.addEventListener('click', function() {
            const loginArea = document.getElementById('login-area');
            loginArea.style.display = 'none';

            const taransactionArea = document.getElementById('transaction-area');
            taransactionArea.style.display = 'block';
        })

        //deposit button event handler
        const depositBtn = document.getElementById("addDeposit");
        depositBtn.addEventListener("click", function() {
            const depositAmount = document.getElementById("depositAmount").value;
            const depositNumber = parseFloat(depositAmount);

            updateSpanText("currentDeposit", depositNumber);
            updateSpanText("currentBalance", depositNumber);

            document.getElementById("depositAmount").value = "";
        })

        function updateSpanText(id, addedNumber) {
            const current = document.getElementById(id).innerText;
            const currentNumber = parseFloat(current);
            const totalAmount = addedNumber + currentNumber;
            document.getElementById(id).innerText = totalAmount;
        }