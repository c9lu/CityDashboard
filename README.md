Website: http://citydashboard-dev.azurewebsites.net/ (please wait for 6 seconds for the data to be retrieved from the API)

For my demo program, which is an application that pulls time zone information and weather information from different cities at real time. If I did not apply reactive programming, the synchronous implementation would look something like this:

For every 6 seconds
    For each city in the array   
	Read from the Time API for the city
	Read from the Weather API for the city
	Update the result on the UI.
    End for
End for


Since I am using jQuery ajax for the API web requests, which is asynchronous, meaning the response returns right away, thus there is no certainty on the sequence of events. It is possible that City 3 will have the weather updated before city 2 finish reading from the web API, and this will cause a problem for my application, because the UI will not be reflecting all of the cities time zone at the same time.  The RxJS operator MergeMap allows observables to be subscribed concurrently.  The operator forkJoin in particular, makes sure that certain action will only proceed when a response has been received for all.

As a web developer, I have used callback to handle this kind of situation, the problem with callback is that chained events can quickly turn into Callback Hell (please refer to code in Appendix).  Thus, in order to keep the code shallow without the growing indentation level, ES6 promise came to the rescue. But when I apply promise in my demo application, the code can get messy and complex easily when multiple requests/events are involved (please refer to code in Appendix). And this is because Promises works well with onetime events, and if we move from onetime events to event streams, Promises show limitations as it can only handle one asynchronous request with each promise. Therefore, when it comes to dealing with stream of, I had to use RxJS observable operators such as mergeMap which allows me to flatten the higher order observables and eliminates the nested composition. As one can see, the final program flows along the vertical axis only, so we can read the code line by line and reason about what is happening line after line (please refer to code in Appendix).
