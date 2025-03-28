//your JS code here. If required.
let counter = 0;
        
        document.getElementById('incrementBtn').addEventListener('click', function() {
            counter++;
            alert("Current Counter Value: " + counter);
            document.getElementById('counter').textContent = counter;
        });