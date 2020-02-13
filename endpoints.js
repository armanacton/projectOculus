- API scoping clarification to connect/export to another module/bunlder


- Queue; number in unassigned
https://developer.zendesk.com/rest_api/docs/support/search#query-basics (grabbing logic from SLAckbot request)

- Case volume (total number of cases created that day)
https://actonsoftware.zendesk.com/api/v2/tickets.json -- filter for 'created_at' - check in the last day (midnight? business hours?)
"created_at": "2017-12-01T21:42:55Z",

- Number of missed SLA (by Support package/tier)
SLAckbot logic from above as well, will report if breached and with an hour leeway; need to rewrite logic for scope and call (will not refer to  outside of function logic)


- [ ] Average SoA/IRT
speed of answer = status change from new to open; compare created date to last updated? 
https://actonsoftware.zendesk.com/api/v2/search.json?query=status:new

- longest handle time, time from status open to today? by days    

- [ ] SLA by Support Tier - clarification needed; number of tickets submitted or...?
	- [ ] Platinum
	- [ ] Gold
	- [ ] Silver
