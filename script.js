//your JS code here. If required.
let counter = 0;
        
        document.getElementById('incrementBtn').addEventListener('click', function() {
            alert("Previous Counter Value: " + counter);
            counter++;
            document.getElementById('counter').textContent = counter;
        });