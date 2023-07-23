function calculateCountdown() {
    const targetDateInput = document.getElementById("targetDate");
    const targetDateValue = targetDateInput.value;
    
    if (targetDateValue === "") {
      alert("Please enter a valid target date (YYYY-MM-DD).");
      return;
    }
    
    const currentDate = new Date();
    const targetDate = new Date(targetDateValue);
    
    if (isNaN(targetDate.getTime())) {
      alert("Invalid date format. Please use YYYY-MM-DD format.");
      return;
    }

    // Calculate the time difference in milliseconds
    const timeDifference = targetDate.getTime() - currentDate.getTime();
    
    if (timeDifference < 0) {
      document.getElementById("result").textContent = "The target date has already passed.";
    } else {
      const daysRemaining = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
      document.getElementById("result").textContent = `Days remaining: ${daysRemaining}`;
    }
  }