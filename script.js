document.addEventListener('DOMContentLoaded', () => {
    function updateDateTime() {
        const currentDate = new Date();
        const formattedDate = currentDate.toDateString();
        const formattedTime = currentDate.toLocaleTimeString();
        
        document.getElementById('current-date').textContent = formattedDate;
        document.getElementById('running-time').textContent = `${formattedTime}`;
    }

    updateDateTime();

    setInterval(updateDateTime, 1000);

    fetch('/api/jobs')
        .then(response => response.json())
        .then(data => {
            const jobList = document.getElementById('job-list');
            data.forEach(job => {
                const jobElement = document.createElement('div');
                jobElement.className = 'job';
                jobElement.innerHTML = `
                    <h2>
                        <span>${job.job_id})${job.company}</span>
                        <span>${job.role}</span>
                    </h2>
                    <p>${job.description}</p>
                    <p>Posted on: ${new Date(job.posted_date).toDateString()}</p>
                    <p><a href="${job.apply_link}" target="_blank">Apply Here</a></p>
                `;
                jobList.appendChild(jobElement);
            });
        });
});
