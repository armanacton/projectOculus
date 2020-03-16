## Project Oculus: An Eye into Support's Mind 
### Dashboard Parameters - Live Updates 
(contact Kris with questions/updates) -- last updated 2/11/20

### PHONE (RingCentral)
[API Docs](https://developers.ringcentral.com/api-and-docs.html)

- [ ] Agents Available
- [ ] Queue (number of calls waiting)
- [ ] Call volume (how many have called in)
- [ ] Number of abandoned calls
- [ ] Average handle time
	- [ ] Longest handle time
- [ ] Average speed of answer (SOA), initial response time (IRT)
	- [ ] Longest SOA 
	

### Chat (Zendesk)
[API Docs](https://developer.zendesk.com/rest_api/docs/chat/introduction)
- [ ] Agents Available
- [ ] Queue (number of chats waiting)
- [ ] Chat volume (how many that day)
- [ ] Number of missed chats
- [ ] Average handle time
	- [ ] Longest handle time
- [ ] Average speed of answer (SOA), initial response time (IRT)
	- [ ] Longest SOA 

### Email/Web Support (Zendesk)
[API Docs](https://developer.zendesk.com/rest_api/docs/support/introduction)
- [ ] Queue; number in unassigned
- [ ] Case volume (total number of cases created that day)
- [ ] Number of missed SLA (by Support package/tier)
- [ ] Average SoA/IRT
	- [ ] Longest handle time
- [ ] SLA by Support Tier (Haley has similar script from SLAckbots)
	- [ ] Platinum
	- [ ] Gold
	- [ ] Silver





D:.  
|  	
|	index.js  
|  
|_____	calculations  
		|  
		|	weekCalc.js  
		|	monthCalc.js  	
		|  
_____views  
		|  
		|	index.handlebars  
		|	daily.handlebars  
		|	weekly.handlebars  
		|	404.handlebars  
		|  
		|_____layouts  
				|  
				|	main.handlebars  
				|  


### Instructions

Run locally

- Make sure you are in the correct folder and run this command on your terminal:

```
& node index.js
```

This will run locally on port 8080.


To view the pages on your browser enter:

http://localhost:8080

http://localhost:8080/daily

http://localhost:8080/weekly

Make sure to cancel and run the node if changes have been made. To cancel : ctrl + c.